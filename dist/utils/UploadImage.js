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
exports.uploadImagePost = exports.uploadImageJob = void 0;
const supabase_1 = require("../lib/supabase");
const uploadImageJob = (file) => __awaiter(void 0, void 0, void 0, function* () {
    const fileName = `/job/${Date.now()}.jpg`;
    const { error } = yield supabase_1.supabase.storage
        .from("WebproImg")
        .upload(fileName, file.buffer, {
        cacheControl: "image/jpg",
        contentType: "image/jpg"
    });
    if (error) {
        throw error;
    }
    const { data } = yield supabase_1.supabase.storage
        .from("WebproImg")
        .getPublicUrl(fileName);
    return data.publicUrl;
});
exports.uploadImageJob = uploadImageJob;
const uploadImagePost = (file) => __awaiter(void 0, void 0, void 0, function* () {
    const fileName = `/post/${Date.now()}.jpg`;
    const { error } = yield supabase_1.supabase.storage
        .from("WebproImg")
        .upload(fileName, file.buffer, {
        cacheControl: "image/jpg",
        contentType: "image/jpg"
    });
    if (error) {
        throw error;
    }
    const { data } = yield supabase_1.supabase.storage
        .from("WebproImg")
        .getPublicUrl(fileName);
    return data.publicUrl;
});
exports.uploadImagePost = uploadImagePost;
