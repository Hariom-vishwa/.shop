export function Womenfashion(){

    const womensWear = [
        {
          photo: "https://assets0.mirraw.com/images/11931229/image_zoom.jpeg",
          name: "Maxi Dress",
          color: "Floral Print",
          size: "M",
          price: 999,
        },
        {
          photo: "https://rukminim2.flixcart.com/image/850/1000/xif0q/short/y/9/2/30-mnt-3010-montrez-original-image2uge6akzwff-bb.jpeg",
          name: "Denim Shorts",
          color: "Light Blue",
          size: 28,
          price: 699,
        },
        {
          photo: "https://5.imimg.com/data5/SELLER/Default/2023/8/337808953/ZL/FV/RX/8062019/ort1039-1000x1000.jpg",
          name: "Off-Shoulder Top",
          color: "Red",
          size: "S",
          price: 499,
        },
        {
          photo: "https://5.imimg.com/data5/SELLER/Default/2020/12/YZ/DV/KO/37264219/163-5-1000x1000.jpg",
          name: "Leather Biker Jacket",
          color: "Black",
          size: "L",
          price: 2499,
        },
        {
          photo: "https://gocolors.com/cdn/shop/files/LL06-DKGREY163_4.jpg?v=1719485680",
          name: "Yoga Leggings",
          color: "Dark Gray",
          size: "M",
          price: 799,
        },
        {
          photo: "https://i.etsystatic.com/25998548/r/il/5f47a8/3666985429/il_570xN.3666985429_gjih.jpg",
          name: "Knit Sweater",
          color: "Pastel Pink",
          size: "L",
          price: 1299,
        },
        {
          photo: "https://5.imimg.com/data5/SELLER/Default/2023/12/366805647/XK/FV/PQ/10322493/ladies-formal-and-casual-blazer-navy-blue-1000x1000.jpeg",
          name: "Formal Blazer",
          color: "Navy Blue",
          size: 36,
          price: 1799,
        },
        {
          photo: "https://rukminim2.flixcart.com/image/850/1000/xif0q/shoe/a/6/u/3-ld1050-3-layasa-white-original-imaggkmwastngq76.jpeg?q=90&crop=false",
          name: "Sneakers",
          color: "White",
          size: 6,
          price: 1199,
        },
        {
          photo: "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/9479013/2019/7/25/61e986ed-c34d-45e7-a431-93570a621f731564051914963-Roadster-Women-Jackets-3671564051911007-1.jpg",
          name: "Bomber Jacket",
          color: "Olive Green",
          size: "M",
          price: 1499,
        },
        {
          photo: "https://m.media-amazon.com/images/I/61qS+7dcMGL._SY741_.jpg",
          name: "Palazzo Pants",
          color: "Beige",
          size: 32,
          price: 599,
        },
      ];
      
    return(
        <>

<h1>Women's Wear - Fashion</h1>

<div className="itemsCont">
  {womensWear.map((data) => {
    return (
      <div className="item">
        <img src={data.photo} alt={data.name} />
        <div className="nameNcolor">
          <h2>{data.name}</h2>
          <h3>{data.color}</h3>
        </div>
        <div className="sizeNprice">
          <h3>Price: ₹{data.price}/-</h3>
          <h3>Size: {data.size}</h3>
        </div>
      </div>
    );
  })}
</div>
        </>
    )
}