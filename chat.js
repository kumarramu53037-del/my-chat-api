import english from "../replies/english.json";
import hinglish from "../replies/hinglish.json";

export default function handler(req, res) {

  const text = (req.query.text || "").toLowerCase();

  const allReplies = [...english, ...hinglish];

  const reply = allReplies[Math.floor(Math.random() * allReplies.length)];

  res.status(200).json({
    status: true,
    question: text,
    reply: reply
  });

}
