const getAllBooks = async (req, res) => {
  console.log("getAllBooks route hit");
  res.status(200).json({ msg: "All books found" });
};

const postBooks = async (req, res) => {
  console.log("postBook route hit");
  res.status(201).json({ msg: "Book created" });
};

module.exports = { getAllBooks, postBooks };
