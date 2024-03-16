"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleletComment = void 0;
const UserSchema_1 = require("../../../Model/UserSchema");
const DeleletComment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { CommentID } = req.query;
        const comment = yield UserSchema_1.CommentModel.findById(CommentID);
        if (comment) {
            yield comment.deleteOne();
            yield UserSchema_1.PostModel.updateOne({ Comments: CommentID }, { $pull: { Comments: CommentID } });
            res.status(200).json({ message: "Comment Deleted" });
        }
        else {
            res.status(404).json({ message: "Comment Not Found" });
        }
    }
    catch (error) {
        console.log(error.message);
    }
});
exports.DeleletComment = DeleletComment;
