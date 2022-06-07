import connection from "../databse.js"
import { asyncWrapper, createError } from "../middlewares"

export const getAll = asyncWrapper(async(req, res, next) => {
    const result = await connection("app").where("app_id", req.id)
    res.status(200).json(result)
})
export const createLibro=asyncWrapper(async(req,res,next)=>{
    if(!req.file)createError('Please provide an image',401);
    const imageUrl=req.file.path
    let {title,author,release,pages,restriction,physical,language,editorial}=req.body
    let [exist]=await connection("libro").whereILike("lib_title",`%${title}%`).andWhere("app_id","=",`${req.id}`)
    if(typeof exist?.lib_id !=="undefined")
    {
        return res.status(404).json({msg:"Libro repetido"})
    }
    let [languageDB]=await connection("language").whereILike("lan_name",`%${language}%`)
    let [authorid]=await connection("author").whereILike("ath_name",`%${author}%`)
    let idLanguage=languageDB?.lan_id
    let idauthore=authorid?.ath_id
    if(typeof idLanguage==="undefined")
    {
        [languageDB]= await connection("language").insert({lan_name:language}).returning('lan_id')
        idLanguage=languageDB.lan_id
    }
    if(typeof idauthore=="undefined")
    {
        [authorid]=await connection("author").insert({ath_name:author}).returning('ath_id')
        idauthore=authorid.ath_id
    }
    const [Libro]=await connection("libro")
                    .insert({lib_title:title,lib_urlImage:imageUrl,lib_release:release
                            ,lib_restriction:restriction,lib_pages:pages,lib_solid:physical
                            ,app_id:req.id,lib_editorial:editorial,lan_id:idLanguage,
                        ath_id:idauthore}).returning('lib_id');
    res.status(201).json({msg:"Libro Agregado Correctamente"})
})