import {Url} from "../model/URL.model.js"
import shortid from "shortid";

async function handleGenerateNewShortUrl(req, res) {
    const { url } = req.body;

    if(!url) {
        res.status(400).json({error : "Url is required ."})
    }

    const shortId = shortid()

    await Url.create({
        shortId : shortId,
        redirectUrl : url,
        visitHistory : []
    })

    return res.json({
        id  : shortId
    })
}

async function handleRedirectUrl(req,res) {
    const { shortId } = req.params;
    const entry = await Url.findOneAndUpdate({
        shortId
    },
    {
        $push : {
            visitHistory : {
                timeStamps : Date.now()
            }
        },
    })

    res.redirect(entry.redirectUrl);
}

async function handleAnalytics(req,res) {
    const { shortId } = req.params;

    const analytics = await Url.findOne({shortId})

    if(!analytics) return res.status(400).json({err : "shortId is not find"})

    return res.status(200).json({
        totalClicks : analytics.visitHistory.length,
        analytics
    })
}

export {
    handleGenerateNewShortUrl,
    handleRedirectUrl,
    handleAnalytics
}