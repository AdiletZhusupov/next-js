export default function handler(req, res){
    res.setPreviewData({user: "Adilet"})
    res.redirect(req.query.redirect)
}