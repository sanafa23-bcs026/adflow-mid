let ads = [];

exports.getAds = (req, res) => {
  res.json(ads);
};

exports.createAd = (req, res) => {
  const { title, description, userId } = req.body;
  const ad = {
    id: Date.now(),
    title,
    description,
    status: "Draft",
    publish_at: null,
    expire_at: null,
    userId
  };
  ads.push(ad);
  res.json({ message: "Ad created", ad });
};