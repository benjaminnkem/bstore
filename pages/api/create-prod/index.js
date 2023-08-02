import nextConnect from "next-connect";
import multer from "multer";
import { getToken } from "next-auth/jwt";

const upload = multer({
  storage: multer.diskStorage({
    destination: "public/uploads/albums/",
    filename: (req, file, cb) => cb(null, file.fieldname + "-" + Date.now() + "-" + file.originalname),
  }),
});

const apiRoute = nextConnect({
  onError(error, req, res) {
    res.status(501).json({ error: `Sorry something Happened! ${error.message}` });
  },
  onNoMatch(req, res) {
    res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
  },
});

apiRoute.use(upload.single("productImage"));
apiRoute.post("/api/create2", async (req, res) => {
  const token = await getToken({ req });
  if (token) {
    try {
      const albumImg = req.file;
      const albumImgPath = `/uploads/albums/${albumImg.filename}`;

      console.log(albumImg, albumImgPath);

      res.status(200).json({ data: "Album Created Successfully" });
    } catch (err) {
      res.status(500).json({ msg: "An error occurred " + err.message });
    }
  } else {
    return res.status(401).json({ msg: "You are not authorized!" });
  }
});

export const config = {
  api: {
    bodyParser: false, // Disallow body parsing, consume as stream
  },
};

export default apiRoute;
