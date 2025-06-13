import express,{Router} from "express";
import {handleRedirectUrl,handleGenerateNewShortUrl,handleAnalytics} from "../controllers/url.controller.js"
const router = Router();

router.route("/shorten").post(handleGenerateNewShortUrl)
router.route("/redirect/:shortId").get(handleRedirectUrl)
router.route("/analytics/:shortId").get(handleAnalytics)

export default router