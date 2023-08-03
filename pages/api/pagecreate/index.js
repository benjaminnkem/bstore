import { createRouter } from "next-connect";

const router = createRouter();

router.get('/api/pagecreate', (req, res) => {
  res.json({ message: "it worked" });
});

export const config = {
  runtime: "edge",
};

export default router.handler({
  onError: (err, req, res) => {
    console.error(err.stack);
    res.status(err.statusCode || 500).end(err.message);
  },
});
