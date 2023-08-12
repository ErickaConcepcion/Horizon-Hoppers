const destinations = [
  {
    country: 'Canada',
    countryImage: 'https://images.unsplash.com/photo-1503614472-8c93d56e92ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=811&q=80',
    discounted: true,
    discount: 30,
    popular: true,
    pricePerPerson: 1900, 
    dayNightFormat: '7D/6N', 
    numberOfPeople: 5, 
    location: 'Canada',  
    packageTitle: 'Calming terrain of Moraine Lake',
    numberOfReviews: 20,
    ratingOutOfFive: 4, 
    description: "Moraine Lake is a glacially fed lake in Banff National Park, 14 kilometres outside the hamlet of Lake Louise, Alberta, Canada.",
    picture: 'https://images.unsplash.com/photo-1503614472-8c93d56e92ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=811&q=80',
    tours: [
      {
        id: 1,
        tourCardImage: 'https://images.unsplash.com/photo-1526863336296-fac32d550655?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
        tourCardRating: '8.0 Superb',
        tourCardTitle: "Calgary",
        tourCardDays: '1 Day',
        tourCardPax: '5+',
        tourCardDestination: 'Canada',
        tourCardWishList: true,
        details: {
          images: [
            'https://images.unsplash.com/photo-1574950333594-f3e9a9446d0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
            'https://images.prismic.io/telusspark/df3da90f-8518-4aa2-860d-ec3e296e7ede_TELUS+SPARK_Building.jpg?auto=compress,format',
            'https://thewestleyhotel.com/wp-content/uploads/2021/06/calgary-stephen-avenue.jpg',
            'https://images.ctfassets.net/gk8hs8lmghf8/6tVKN7EKyfdkZY28CRACCQ/ba9bd0d9184b582b7bac4e772f801a5a/35411544810_5ad7e69578_k.jpg ',
            'https://th-thumbnailer.cdn-si-edu.com/jyJmJFPd5U8HEzIuwL-BHnP8KQE=/fit-in/1072x0/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/d4/51/d451de56-b4bb-48cc-82a4-4b0334610a5f/gatesofmountains.jpg',
          ],
          overview: "Calgary, a cosmopolitan Alberta city with numerous skyscrapers, owes its rapid growth to its status as the centre of Canada’s oil industry. However, it’s still steeped in the western culture that earned it the nickname “Cowtown,” evident in the Calgary Stampede, its massive July rodeo and festival that grew out of the farming exhibitions once presented here.",
        }
      },
      {
        id: 2,
        tourCardImage: 'https://plus.unsplash.com/premium_photo-1669750818389-796d13fb323a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
        tourCardRating: '8.0 Superb',
        tourCardTitle: "Banff Town",
        tourCardDays: '3 Days',
        tourCardPax: '5+',
        tourCardDestination: 'Canada',
        tourCardWishList: true,
        details: {
          images: [
            'https://images.unsplash.com/photo-1533587032585-7c78bbeef622?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
            'https://images.unsplash.com/photo-1455156218388-5e61b526818b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/440540648.jpg?k=382cce92a3365db33aafca619ad85c673c01ac98bc4b6feb6feec10d1a2dd452&o=&hp=1',
            'https://www.mtlblog.com/media-library/image.jpg?id=26902961&width=1245&height=700&quality=85&coordinates=0%2C21%2C0%2C21',
            'https://ychef.files.bbci.co.uk/1600x900/p018j887.webp'
          ],
          overview: "Start for Banff National Park. It is located about a 1.50 hours drive away. Plan to spend 3 days in Banff, and check off relaxing activities on day one. These include the following: Sulphur mountain gondola ride, Bow Falls, a walk, and a castle food tour at the famous Fairmont Banff Springs!",
        }
      },
      {
        id: 3,
        tourCardImage: 'https://images.unsplash.com/photo-1516293635722-a0ae2709d570?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80',
        tourCardRating: '8.0 Superb',
        tourCardTitle: "Lake Louise",
        tourCardDays: '1 Day',
        tourCardPax: '5+',
        tourCardDestination: 'Canada',
        tourCardWishList: true,
        details: {
          images: [
            'https://images.unsplash.com/photo-1533520908216-c678e171f24b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
            'https://images.unsplash.com/photo-1514413534171-6914647601ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
            'https://www.banffjaspercollection.com/Brewster/media/Images/Hotels/Elk-and-Avenue/PX-Heart-of-Banff.jpg',
            'https://cdn.sanity.io/images/6sugrgl1/production/40ee48be58636d0fcc718c195547e7a952d61b24-2000x1333.jpg?rect=0,224,2000,887&w=1988&h=882&fit=crop',
            'https://www.banfflakelouise.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F6sugrgl1%2Fproduction%2F6a39ae4bd224ca84777fcd5a35fede6ee6abedb8-2000x1333.jpg%3Frect%3D0%2C60%2C2000%2C1215%26w%3D2120%26h%3D1288%26fit%3Dcrop&w=1200&q=75'
          
          ],
          overview: "Lake Louise is a hamlet in Banff National Park in the Canadian Rockies, known for its turquoise, glacier-fed lake ringed by high peaks and overlooked by a stately chateau. Hiking trails wind up to the Lake Agnes Tea House for bird's-eye views. There's a canoe dock in summer, and a skating rink on the frozen lake in winter.",
        }
      },
      {
        id: 4,
        tourCardImage: 'https://www.canadacrossroads.com/wp-content/uploads/2020/06/Lake-Emerald-Yoho-NP.jpg',
        tourCardRating: '8.0 Superb',
        tourCardTitle: "Yoho National Park",
        tourCardDays: '1 Day',
        tourCardPax: '5+',
        tourCardDestination: 'Canada',
        tourCardWishList: true,
        details: {
          images: [
            'https://images.unsplash.com/photo-1580390631873-cf2906f10b68?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
            'https://plus.unsplash.com/premium_photo-1664111294842-310e3b8fb5b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
            'https://glacierraft.com/wp-content/uploads/2015/03/winterkayak5-blog-1024x678.jpg',
            'https://revelstokemountaineer.com/web/wp-content/uploads/2016/04/Kicking-Horse-rafting.jpg',
            'https://plus.unsplash.com/premium_photo-1673239605771-ff5fe814e2bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80'
          ],
          overview: "Head to Yoho National Park in British Columbia on day 6. It is a quick ride from Lake Louise, and spend the day chasing the mightiest Takakkaw Falls, Natural Falls, Spiral Tunnels on Kicking Horse Pass, and the gorgeous Emerald Lake",
        }
      },
    ],
    itinerary: [
      {
        count: '01',
        title: 'Day 1: Arrive and explore Calgary ',
        time: '8:00 am to 4:00 pm',
        description: "Calgary is famous for the Calgary Stampede, Berta beef, and the 1988 Winter Olympics. Calgary is known as Cowtown, the Gateway to the Rocky Mountains, and the cleanest city in the world. Calgary is known for Fort Calgary, the Calgary Flames, and the “Texas of Canada.”",
        inclusion: ['Free Zoo Admission', 'Awesome Breakfast', 'Free TELUS Spark Science Center Admission', "Free Meals"]
      },
      {
        count: '02',
        title: 'Day 2 – 4: Drive to Banff, and explore',
        time: '8:00 am to 4:00 pm',
        description: 'Spend time exploring 3 beautiful lakes in Banff National Park, namely Two Jack Lake, Lake Minnewanka, and Vermillion Lakes. In the summer months, you can go kayaking and enjoy easy (1-2 hour) hikes',
        inclusion: ['Hiking', 'Fishing', 'Buffet']
      },
      {
        count: '03',
        title: 'Day 5: Lake Louise',
        time: '8:00 am to 4:00 pm',
        description: 'Enjoy a hike up to Agnes Tea House, or relax with a canoe ride. In the winters, you can go ice-skating and then warm up at the Fairmont Château Lake Louise. You can choose to stay overnight in Lake Louise too (Banff town to Lake Louise is a 90-minute drive, one way). ',
        inclusion: ['Caneoing', 'Hiking', 'Tea House', 'Ice Skating']
      },
      {
        count: '04',
        title: 'Day 6: Yoho National Park',
        time: '8:00 am to 4:00 pm',
        description: 'Yoho National Park is in the Rocky Mountains, in eastern British Columbia, Canada. Waterfalls include Wapta Falls, on the Kicking Horse River, and towering Takakkaw Falls. A trail circles turquoise-coloured Emerald Lake, with a nearby natural stone bridge. ',
        inclusion: ['Falls', 'Hiking', 'Rubber Rafting', 'Stone Bridge']
      },
      {
        count: '05',
        title: 'Day 7: Return to Calgary to Fly out',
        time: '8:00 am to 12:00 nn',
        description: 'Drive along the Icefield Parkway connecting Lake Louise and Jasper (day 7). Along the way make a stop at Peyto Lake, Columbia Icefield, and Sunwapta Falls before arriving in Jasper town (stay here overnight). ',
        inclusion: ['Staying', 'Free Meals', 'Shopping']
      },
    ],
  },
  {
    country: 'Maldives',
    countryImage: 'https://images.unsplash.com/photo-1573843981267-be1999ff37cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80',
    discounted: true,
    discount: 10,
    popular: true,
    pricePerPerson: 25999, 
    dayNightFormat: '8D/7N', 
    numberOfPeople: 8, 
    location: 'Maldives',  
    packageTitle: 'Mesmerizing Marvels of the Maldives',  
    numberOfReviews: 39,  
    ratingOutOfFive : 5, 
    description: 'Nestled in the Indian Ocean, the Maldives is a mesmerizing paradise known for its turquoise waters, white-sand beaches, and luxurious overwater bungalows.', 
    picture: 'https://images.unsplash.com/photo-1609601546193-f558f1ebb385?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    tours: [
      {
        id: 1,
        tourCardImage: 'https://www.tripsavvy.com/thmb/6ZxdQjD98cX0O1MXz8e8J6tPW_k=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/malaysia-mosque-626439294-5c37f6bb46e0fb0001cb050b.jpg',
        tourCardRating: '8.0 Superb',
        tourCardTitle: "Grand Friday Mosque",
        tourCardDays: '1 Day',
        tourCardPax: '5+',
        tourCardDestination: 'Maldives',
        tourCardWishList: true,
        details: {
          images: [
            'https://www.tripsavvy.com/thmb/6ZxdQjD98cX0O1MXz8e8J6tPW_k=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/malaysia-mosque-626439294-5c37f6bb46e0fb0001cb050b.jpg', 'https://images.unsplash.com/photo-1519817650390-64a93db51149?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=327&q=80', 'https://images.unsplash.com/photo-1512632578888-169bbbc64f33?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80', 'https://images.unsplash.com/photo-1528862973381-9bc5ad6d4227?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80', 'https://www.holidify.com/images/cmsuploads/compressed/32913036916_3c43e62448_b(1)_20181016215338_20181016215350.jpg'
          ],
          overview: "The Grand Friday Mosque, located in Male, the capital city of the Maldives, stands as an architectural marvel and significant religious landmark. Constructed with intricate Islamic design elements, the mosque is adorned with elegant domes, delicate calligraphy, and intricate patterns that showcase the country's rich cultural heritage. As one of the largest mosques in the Maldives, it can accommodate a large congregation of worshippers. The mosque's serene ambiance and awe-inspiring interior create a spiritual atmosphere, inviting both locals and visitors to appreciate its cultural and religious significance."
        }
      },
      {
        id: 2,
        tourCardImage: 'https://livingnomads.com/wp-content/uploads/2019/05/05/The-National-Museum-of-Maldives.jpg',
        tourCardRating: '8.0 Superb',
        tourCardTitle: "The National Museum",
        tourCardDays: '1 Day',
        tourCardPax: '5+',
        tourCardDestination: 'Maldives',
        tourCardWishList: true,
        details: {
          images: [
            'https://www.transferotel.com/uploads/articles/20/big/natural_history_museum_elephant_rotunda.jpg', 'https://livingnomads.com/wp-content/uploads/2019/05/05/The-National-Museum-of-Maldives.jpg', 'https://www.makemytrip.com/travel-guide/media/dg_image/maldives/Maldives-National-Museum.jpg', 'https://www.connectingtraveller.com/images/localtip/1664884768Buddhist_sculpture_from_Maldives.jpg', 'https://pyt-blogs.imgix.net/2020/05/mle-scaled.jpg?auto=format&fit=crop&h=400&ixlib=php-3.3.0&w=1500&wpsize=gridlove-cover', 'https://lh3.googleusercontent.com/p/AF1QipNSxpSE44lpCdO6KJ6DJrV908PVT4fRYmZ7ifqV=s1600-w2436', 'https://pyt-blogs.imgix.net/2020/04/101-scaled.jpg?auto=format&fit=scale&h=400&ixlib=php-3.3.0&w=1024&wpsize=large'
          ],
          overview: "The National Museum of the Maldives, located in the capital city of Male, offers a captivating journey through the country's history and culture. Housed within a charming three-story building, the museum's exhibits feature a diverse collection of artifacts, including ancient coins, royal antiques, traditional costumes, and intricate pieces of art. The museum serves as a window into the Maldives' past, allowing visitors to explore its maritime heritage, archaeological treasures, and the evolution of its society over the centuries. With its carefully curated displays, the National Museum provides a compelling narrative of the Maldives' rich heritage and the unique stories that have shaped its identity."
        }
      },
      {
        id: 3,
        tourCardImage: 'https://images.unsplash.com/photo-1586861642026-74a6da22a3cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=388&q=80',
        tourCardRating: '8.0 Superb',
        tourCardTitle: "The Artificial Beach",
        tourCardDays: '1 Day',
        tourCardPax: '5+',
        tourCardDestination: 'Maldives',
        tourCardWishList: true,
        details: {
          images: [
            'https://images.unsplash.com/photo-1573843981267-be1999ff37cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80',
            'https://plus.unsplash.com/premium_photo-1666286163385-abe05f0326c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1075&q=80',
            'https://images.unsplash.com/photo-1516815231560-8f41ec531527?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1167&q=80',
            'https://images.unsplash.com/photo-1540202404-a2f29016b523?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1333&q=80',
            'https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80',

            'https://images.unsplash.com/photo-1505228395891-9a51e7e86bf6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1333&q=80',
            'https://images.unsplash.com/photo-1586861642026-74a6da22a3cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=388&q=80',
            'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1173&q=80',
            'https://images.unsplash.com/photo-1609601546193-f558f1ebb385?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
            'https://images.unsplash.com/photo-1586500038052-b831efc02314?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80',
            'https://images.unsplash.com/photo-1620065487644-1080510335f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80',
            'https://images.unsplash.com/photo-1618238832760-7e4129ef4a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
            'https://c4.wallpaperflare.com/wallpaper/124/352/923/water-beach-sky-maldives-wallpaper-preview.jpg'
        ],
          overview: "Male's Artificial Beach is a serene urban retreat, offering a respite from the bustling city life. This man-made stretch of coastline presents a tranquil spot for relaxation, leisurely strolls, and enjoying the beautiful sea views. The beach's soft sands and gentle waves create an inviting atmosphere for both locals and tourists to unwind, bask in the sun, or simply appreciate the soothing sound of the ocean. As a popular gathering spot, Artificial Beach showcases the Maldives' ability to create peaceful havens within its vibrant urban landscape."
        }
      },
      {
        id: 4,
        tourCardImage: 'https://cdn.virily.com/wp-content/uploads/2017/10/photo-41577764.jpg',
        tourCardRating: '8.0 Superb',
        tourCardTitle: "The Tsunami Museum",
        tourCardDays: '1 Day',
        tourCardPax: '5+',
        tourCardDestination: 'Maldives',
        tourCardWishList: true,
        details: {
          images: [
            'https://cdn.virily.com/wp-content/uploads/2017/10/photo-41577764.jpg', 'https://thumbs.dreamstime.com/b/tsunami-memorandon-maldives-sunny-day-56916004.jpg', 'https://coralglass.sfo2.digitaloceanspaces.com/images/upload/1QMNcOXFrMOxNmOBEoPC0FPbxOwtwdLezsxAgEMS.jpeg', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_tNCeDbBB1FyuyZGjBM8tathFhwjDP10HaydRsGQrEaKyi0RyNxrBbPa9tnkA39g_7wc&usqp=CAU', 'https://www.whereismaldives.com/wp-content/uploads/2021/04/tsunami-monument2-1024x661.jpeg'
        ],
          overview: "The Tsunami Museum in Malé stands as a poignant tribute to the resilience of the Maldivian people in the face of adversity. Through immersive exhibits and personal stories, the museum commemorates the 2004 Indian Ocean tsunami, highlighting the nation's response, recovery efforts, and the importance of disaster preparedness. The museum's somber yet inspiring atmosphere serves as a reminder of the Maldives' strength and unity, making it a significant place of reflection and learning."
        }
      },
    ],
    itinerary: [
      {
        count: '01',
        title: 'Day 1: Arrival at Centara Ras Fushi Resort & Spa Maldives',
        time: '9:00 am to 10:00 am',
        description: 'Centara Ras Fushi Resort & Spa Maldives is a tranquil and luxurious adult-focused retreat, offering overwater bungalows and a range of indulgent spa and dining experiences in a stunning tropical setting.',
        inclusion: ['Free Drinks', 'Free Umbrella', 'Five Star Accomodation']
      },
      {
        count: '02',
        title: 'Day 2: Visit the Grand Friday Mosque.',
        time: '9:00 am to 6:00 pm',
        description: "Visiting the Grand Friday Mosque offers a glimpse into the Maldives' rich cultural heritage, showcasing intricate Islamic architecture and a serene atmosphere.",
        inclusion: ['Free Umbrella', 'Quoran', 'Free short sessions']
      },
      {
        count: '03',
        title: 'Day 3: Discover historical treasures at the National Museum.',
        time: '8:00 am to 6:00 pm',
        description: "Exploring the National Museum unveils a trove of historical treasures, providing insights into the Maldives' past and cultural evolution.",
        inclusion: ['Souvenirs', 'Historical Artifacts', 'Free Photoshoot']
      },
      {
        count: '04',
        title: "Day 4: Escape the hustle-bustle and spend time at Artificial Beach.",
        time: '5:00 am to 7:00 pm',
        description: "Indulge in tranquility by unwinding at Artificial Beach, a serene getaway offering a refreshing escape from the city's hustle and bustle.",
        inclusion: ['Free Meal', 'Free Sunscreen', 'Free Entrance Fee']
      },
      {
        count: '05',
        title: "Day 5: Visit the Tsunami Museum.",
        time: '5:00 am to 7:00 pm',
        description: "Gain poignant insights into the nation's resilience and history by visiting the Tsunami Museum, a testament to the Maldives' strength in the face of natural challenges.",
        inclusion: ['Free Meal', 'Free Sunscreen', 'Free Entrance Fee']
      },
      {
        count: '06',
        title: "Day 6: Go for a walk at lush Rasrani Bageecha.",
        time: '5:00 pm to 10:00 pm',
        description: "Immerse yourself in nature's beauty with a leisurely stroll through the lush Rasrani Bageecha, a verdant oasis perfect for a calming walk.",
        inclusion: ['Chaperone', 'Free Umbrella', 'Free Snacks']
      },
      {
        count: '07',
        title: "Day 7: Get your hands on souvenirs at Majeedhee Magu.",
        time: '1:00 pm to 5:00 pm',
        description: "Shop for memorable souvenirs and local finds at Majeedhee Magu, offering a vibrant and bustling market experience in the heart of the Maldives.",
        inclusion: ['Chaperone', 'Free Umbrella']
      },
      {
        count: '08',
        title: "Day 8: Departure",
        time: '1:00 pm to 3:00 pm',
        description: "Travelling to Velana International Airport",
        inclusion: ['Chaperone', 'Free Shuttle service']
      }


      
    ],
  },
  {
    country: 'Philippines',
    countryImage: 'https://images.pexels.com/photos/4673637/pexels-photo-4673637.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    discounted: true,
    discount: 15,
    popular: true,
    pricePerPerson: 1999, 
    dayNightFormat: '10D/9N', 
    numberOfPeople: 5, 
    location: 'Philippines',  
    packageTitle: "Discover, Relax, and Explore Philippines",  
    numberOfReviews: 45,  
    ratingOutOfFive : 5, 
    description: 'Explore the stunning beauty of the Philippines as you wander through its tropical islands, where lush rainforests, pristine beaches, and crystal-clear waters await your arrival.', 
    picture: 'https://images.pexels.com/photos/4673637/pexels-photo-4673637.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    tours: [
      {
        id: 1,
        tourCardImage: 'https://images.pexels.com/photos/11686040/pexels-photo-11686040.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        tourCardRating: '8.0 Superb',
        tourCardTitle: "White Beach of Boracay",
        tourCardDays: '2 Day',
        tourCardPax: '5+',
        tourCardDestination: 'Philippines',
        tourCardWishList: true,
        details: {
          images: [
            'https://images.unsplash.com/photo-1553195029-754fbd369560?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Ym9yYWNheXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60','https://images.unsplash.com/photo-1601634021304-79309ec67040?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1173&q=80','https://images.pexels.com/photos/4673637/pexels-photo-4673637.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 'https://images.unsplash.com/photo-1551322127-bc5c4f4700d0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Ym9yYWNheXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60','https://images.unsplash.com/photo-1462557522227-30b31bfb0db9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
          ],
          overview: "Visiting Boracay is an invitation to experience paradise. With its powdery white sand beaches, crystal-clear turquoise waters, and vibrant nightlife, this tropical island in the Philippines promises a memorable and exhilarating getaway. From fun-filled water activities like snorkeling, diving, and kayaking to relaxing sunset cruises and beachside massages, there is something for everyone to enjoy. Indulge in delectable local cuisine, explore the island's lush jungles, and immerse yourself in the warm Filipino hospitality. Boracay offers an oasis of tranquility where breathtaking sunsets and endless adventure await, ensuring an unforgettable vacation filled with relaxation, excitement, and unforgettable memories."
        }
      },
      {
        id: 2,
        tourCardImage: 'https://images.unsplash.com/photo-1615185403293-a8fb0482d24e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2hvY29sYXRlJTIwaGlsbHMlMjBib2hvbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
        tourCardRating: '9.0 Superb',
        tourCardTitle: "Chocolate Hills",
        tourCardDays: '1 Day',
        tourCardPax: '5+',
        tourCardDestination: 'Philippines',
        tourCardWishList: true,
        details: {
          images: [
           'https://images.unsplash.com/photo-1667823506151-836beb11723d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80','https://images.unsplash.com/photo-1546068996-8da61faeceaa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2hvY29sYXRlJTIwaGlsbHMlMjBib2hvbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60','https://images.unsplash.com/photo-1591506578484-d496b18a6908?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80','https://images.unsplash.com/photo-1515511210479-bc02c48ec763?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80', 'https://images.unsplash.com/photo-1591506578484-d496b18a6908?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
          ],
          overview: "Bohol Chocolate Hills is a natural wonder that promises breathtaking sights for nature enthusiasts. With more than a thousand perfectly cone-shaped hills spread across an area of 50 square kilometers, visitors can expect to witness a mesmerizing panoramic view unlike any other. As these hills turn a stunning shade of chocolate brown during the dry season, it creates a surreal and captivating landscape that captivates the imagination. Whether hiking up the hills, capturing stunning photographs, or simply basking in the awe-inspiring beauty of the surroundings, visitors to Bohol Chocolate Hills can look forward to an unforgettable adventure and a true connection with nature.."
        }
      },
      {
        id: 3,
        tourCardImage: 'https://images.unsplash.com/photo-1494676731265-5ed4f59790f9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1473&q=80',
        tourCardRating: '9.0 Superb',
        tourCardTitle: "Palawan",
        tourCardDays: '1 Day',
        tourCardPax: '5+',
        tourCardDestination: 'Philippines',
        tourCardWishList: true,
        details: {
          images: [
            'https://images.unsplash.com/photo-1581216061628-2187b387eb5c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1477&q=80',
            'https://images.unsplash.com/photo-1616596136440-cdff4ce1b4ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80','https://images.unsplash.com/photo-1597454385911-5c1b58be62c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80','https://images.unsplash.com/photo-1529686342540-1b43aec0df75?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80','https://images.unsplash.com/photo-1494676731265-5ed4f59790f9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1473&q=80'
        ],
          overview: "Palawan, a tropical paradise located in the Philippines, offers endless opportunities for breathtaking experiences and awe-inspiring natural wonders. From its crystal-clear turquoise waters to its vibrant coral reefs, Palawan promises an unforgettable escape for nature lovers and adventure seekers alike. Embark on exhilarating island hopping tours, snorkel alongside exotic marine life, or kayak through enchanting lagoons. Discover hidden caves, relax on pristine white-sand beaches, and immerse yourself in the rich local culture and cuisine. Palawan is a dream destination that guarantees unforgettable memories and moments of pure bliss.."
        }
      },
      {
        id: 4,
        tourCardImage: 'https://images.unsplash.com/photo-1563175544-9759b48523b9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80',
        tourCardRating: '7.0 Superb',
        tourCardTitle: "Rice Terraces",
        tourCardDays: '1 Day',
        tourCardPax: '5+',
        tourCardDestination: 'Philippines',
        tourCardWishList: true,
        details: {
          images: [
            'https://images.unsplash.com/photo-1663265159276-9f716dda0e83?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80', 'https://images.unsplash.com/photo-1563175544-9759b48523b9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80','https://images.unsplash.com/photo-1575891606029-2ced119438a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80', 'https://images.unsplash.com/photo-1575891467811-70c900ebd3ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80','https://images.unsplash.com/photo-1663265159301-b9be59237e5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
        ],
          overview: "Discover the timeless allure of the Banaue Rice Terraces in the Philippines, an emblem of both human ingenuity and natural beauty. Carved into the rugged Cordillera mountains over centuries, these terraces are an intricate mosaic of emerald fields that tell the story of ancient agricultural wisdom. Embark on a journey to this UNESCO World Heritage Site, where you'll witness the stunning interplay of culture and landscape. Trek through the terraced steps, meet the indigenous Ifugao communities who have preserved this heritage, and capture the essence of their traditions. The Banaue Rice Terraces promise not just a visual spectacle, but a soul-stirring connection to a heritage that's nurtured by the land and its people."
        }
      },
    ],
    itinerary: [
      {
        count: '01',
        title: 'Day 1: Relax on White Beach, try water sports, and savor beachside dining',
        time: '9:00 am to 10:00 am',
        description: " Enjoy the world-famous White Beach, indulge in water sports, and bask in the island's vibrant nightlife.",
        inclusion: ['Free Drinks', 'Free Umbrella', 'Free Tour']
      },
      {
        count: '02',
        title: 'Day 2: Hills of Mystery and Beauty.',
        time: '9:00 am to 6:00 pm',
        description: "Discover the enigmatic Chocolate Hills, explore the tarsier sanctuary, and cruise the scenic Loboc River.",
        inclusion: ['Free Umbrella', 'Free cruise', 'Free Lunch']
      },
      {
        count: '03',
        title: 'Day 3: Island Gateway to Palawan Paradise.',
        time: '8:00 am to 6:00 pm',
        description: "Arrive in Palawan and settle into your accommodation, followed by a leisurely stroll along Sabang Beach.",
        inclusion: ['Souvenirs', 'Free Tour', 'Free Photoshoot']
      },
      {
        count: '04',
        title: "Day 4:  Journey to the Majestic Rice Terraces.",
        time: '5:00 am to 7:00 pm',
        description: "Embark on a trek to Batad Village, where you'll be awed by the breathtaking Batad Rice Terraces, a UNESCO World Heritage Site.",
        inclusion: ['Free Water', 'Free Sunscreen', 'Free Entrance Fee']
      },
      


      
    ],
  },
  
]

module.exports = destinations
