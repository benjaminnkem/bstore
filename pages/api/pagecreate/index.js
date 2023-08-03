import multer from "multer";
import nc from "next-connect";

const handler = nc({
  onError: (err, req, res, next) => {
    console.error(err.stack);
    res.status(500).end("Something broke!");
  },
  onNoMatch: (req, res) => {
    res.status(404).end("Page is not found");
  },
});

const upload = multer({
  storage: multer.diskStorage({
    destination: "public/uploads/products",
    filename: (req, file, cb) => cb(null, file.fieldname + "-" + Date.now() + file.originalname),
  }),
});

handler.use(upload.single("productImage")).post("/api/pagecreate", (req, res) => {
  const body = req.body;
  res.json({ message: 'worked'});
});

export const config = {
  api: {
    bodyParser: false,
  },
};

export default handler;
