import mongoose,{Schema} from "mongoose";

const UrlSchema = new Schema({
    shortId : {
        type : String,
        required : true,
        unique : true
    },
    redirectUrl : {
        type : String,
        required : true
    },
    visitHistory : [
        {
            timeStamps : {
                type : Number
            }
        }
    ]
},{
    timestamps : true
})

export const Url = mongoose.model("Url",UrlSchema)