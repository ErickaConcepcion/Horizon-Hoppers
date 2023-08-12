const tourCardData = [
  {
    tourCardImage: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1164&q=80',
    tourCardRating: '8.0 Superb',
    tourCardTitle: "Trader's Hotel",
    tourCardDays: '3 Days',
    tourCardPax: '4+',
    tourCardDestination: 'Malaysia',
    tourCardWishList: true
  },
  {
    tourCardImage: 'https://images.unsplash.com/photo-1470087167738-6aa485ff65dc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80',
    tourCardRating: '8.0 Superb',
    tourCardTitle: 'Cameron Lands',
    tourCardDays: '2 Days',
    tourCardPax: '10+',
    tourCardDestination: 'Malaysia',
    tourCardWishList: true
  },
  {
    tourCardImage: 'https://images.unsplash.com/photo-1581981657871-77c0d8adc84d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    tourCardRating: '8.0 Superb',
    tourCardTitle: 'Bukit Bintang',
    tourCardDays: '1 Day',
    tourCardPax: '10+',
    tourCardDestination: 'Malaysia',
    tourCardWishList: true
  },
  {
    tourCardImage: 'https://images.unsplash.com/photo-1604631832503-a0bc87125967?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    tourCardRating: '8.0 Superb',
    tourCardTitle: 'Petaling Street Market',
    tourCardDays: '1 Day',
    tourCardPax: '10+',
    tourCardDestination: 'Malaysia',
    tourCardWishList: true
  },
  {
    tourCardImage: 'https://images.unsplash.com/photo-1555881400-74d7acaacd8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    tourCardRating: '8.0 Superb',
    tourCardTitle: 'Porto',
    tourCardDays: '3 Days',
    tourCardPax: '12+',
    tourCardDestination: 'Portugal',
    tourCardWishList: true
  },
  {
    tourCardImage: 'https://images.unsplash.com/photo-1556572912-ba2085f0ff28?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    tourCardRating: '8.0 Superb',
    tourCardTitle: 'Aveiro',
    tourCardDays: '3 Days',
    tourCardPax: '12+',
    tourCardDestination: 'Portugal',
    tourCardWishList: true
  },
  {
    tourCardImage: 'https://images.unsplash.com/photo-1558102400-72da9fdbecae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=796&q=80',  
    tourCardRating: '8.0 Superb',
    tourCardTitle: 'Ponte 25 de Abril',
    tourCardDays: '3 Days',
    tourCardPax: '12+',
    tourCardDestination: 'Portugal',
    tourCardWishList: true
  },
  {
    tourCardImage: 'https://images.unsplash.com/photo-1555881400-69a2384edcd4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',  
    tourCardRating: '8.0 Superb',
    tourCardTitle: 'Waterfront',
    tourCardDays: '3 Days',
    tourCardPax: '12+',
    tourCardDestination: 'Portugal',
    tourCardWishList: true
  },
  {
    tourCardImage: 'https://images.unsplash.com/photo-1503614472-8c93d56e92ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=811&q=80',
    tourCardRating: '8.0 Superb',
    tourCardTitle: 'Morain Lake',
    tourCardDays: '3 Days',
    tourCardPax: '12+',
    tourCardDestination: 'Canada',
    tourCardWishList: true
  },
  {
    tourCardImage: 'https://images.unsplash.com/photo-1581259021841-a16d7c2a777d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1157&q=80',
    tourCardRating: '8.0 Superb',
    tourCardTitle: 'Banff Town',
    tourCardDays: '1 Day',
    tourCardPax: '12+',
    tourCardDestination: 'Canada',
    tourCardWishList: true
  },
  {
    tourCardImage: 'https://images.unsplash.com/photo-1519181258491-889c2b001485?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    tourCardRating: '8.0 Superb',
    tourCardTitle: 'Vancouver City',
    tourCardDays: '1 Day',
    tourCardPax: '12+',
    tourCardDestination: 'Canada',
    tourCardWishList: true
  },
  {
    tourCardImage: 'https://images.unsplash.com/photo-1576771304215-6d4d30f7bb63?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    tourCardRating: '8.0 Superb',
    tourCardTitle: 'Québec, QC, Canada',
    tourCardDays: '1 Day',
    tourCardPax: '12+',
    tourCardDestination: 'Canada',
    tourCardWishList: true
  },
      
]

module.exports = tourCardData