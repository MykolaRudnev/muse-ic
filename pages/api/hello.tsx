// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

interface Created {
  req: any;
  res: any;
}

export default ({req, res}: Created) => {
  res.status(200).json({ name: 'John Doe' })
}
