export const getImgLaunches=async()=>{
    let res=await(await fetch("https://api.spacexdata.com/v3/launches")).json();
    let img=res.map(element => {
        let { mission_patch: img, mission_patch_small: img_small } = element.links;
        return { img, img_small };
      });
      return img;
}

export const getImgRockets=async()=>{
  let res=await(await fetch("https://api.spacexdata.com/v3/rockets")).json();
  let img=res.map(e=>{
    let {flickr_images} = e;
    return flickr_images;
  })
  return img;
}

export const getImgShips = async () => {
  let res = await(await fetch("https://api.spacexdata.com/v3/ships")).json();
  let img = res.map(element =>{
    let {image} = element;
    return image;
  });
  return img;
};