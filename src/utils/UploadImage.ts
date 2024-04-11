import { supabase } from "../lib/supabase";

export const uploadImageJob = async (file: any) => {
  const fileName = `/job/${Date.now()}.jpg`;

  const { error } = await supabase.storage
    .from("WebproImg")
    .upload(fileName, file.buffer, { 
      cacheControl: "image/jpg",
    contentType : "image/jpg"
    });

  if (error) {
    throw error;
  }

  const { data } = await supabase.storage
    .from("WebproImg")
    .getPublicUrl(fileName);

  return data.publicUrl;
};


export const uploadImagePost = async (file: any) => {
  const fileName = `/post/${Date.now()}.jpg`;

  const { error } = await supabase.storage
    .from("WebproImg")
    .upload(fileName, file.buffer, { 
      cacheControl: "image/jpg",
    contentType : "image/jpg"
    });

  if (error) {
    throw error;
  }

  const { data } = await supabase.storage
    .from("WebproImg")
    .getPublicUrl(fileName);

  return data.publicUrl;
};


export const uploadImageQuizz = async (file: any) => {
  const fileName = `/quizz/${Date.now()}.jpg`;

  const { error } = await supabase.storage
    .from("WebproImg")
    .upload(fileName, file.buffer, { 
      cacheControl: "image/jpg",
    contentType : "image/jpg"
    });

  if (error) {
    throw error;
  }

  const { data } = await supabase.storage
    .from("WebproImg")
    .getPublicUrl(fileName);

  return data.publicUrl;
};