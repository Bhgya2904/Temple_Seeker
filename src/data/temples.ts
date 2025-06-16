export interface Temple {
  id: string;
  name: string;
  location: string;
  description: string;
  image: string;
  rating: number;
  reviews: number;
  coordinates: { lat: number; lng: number };
  history: string;
  contact: {
    phone: string;
    email: string;
    address: string;
  };
  timings: string;
  nearbyTemples: string[];
  gallery: string[];
}

export const temples: Temple[] = [
  {
    id: '1',
    name: 'Sri Venkateswara Temple',
    location: 'Tirumala, Andhra Pradesh',
    description: 'One of the most sacred temples dedicated to Lord Venkateswara, located on the hills of Tirumala.',
    image: 'https://images.pexels.com/photos/5792641/pexels-photo-5792641.jpeg?auto=compress&cs=tinysrgb&w=800',
    rating: 4.8,
    reviews: 15420,
    coordinates: { lat: 13.6833, lng: 79.3667 },
    history: 'The temple has a rich history dating back to ancient times. It is believed to have been constructed over several centuries, with the main structure dating to the 12th century. The temple is mentioned in various ancient scriptures and has been a center of devotion for millions of pilgrims.',
    contact: {
      phone: '+91-877-2277777',
      email: 'info@tirumala.org',
      address: 'Tirumala Hills, Tirumala, Tirupati, Andhra Pradesh 517504'
    },
    timings: '4:00 AM - 11:00 PM',
    nearbyTemples: ['2', '3'],
    gallery: [
      'https://images.pexels.com/photos/5792641/pexels-photo-5792641.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/6986358/pexels-photo-6986358.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/7031606/pexels-photo-7031606.jpeg?auto=compress&cs=tinysrgb&w=800'
    ]
  },
  {
    id: '2',
    name: 'Meenakshi Amman Temple',
    location: 'Madurai, Tamil Nadu',
    description: 'A historic Hindu temple dedicated to Goddess Meenakshi and Lord Sundareshwarar.',
    image: 'https://images.pexels.com/photos/7031606/pexels-photo-7031606.jpeg?auto=compress&cs=tinysrgb&w=800',
    rating: 4.7,
    reviews: 12580,
    coordinates: { lat: 9.9195, lng: 78.1193 },
    history: 'The Meenakshi Temple is a magnificent example of Dravidian architecture. The temple complex houses 14 gopurams (gateway towers) ranging from 45-50m in height. The temple has a history spanning over 2500 years and has been rebuilt multiple times.',
    contact: {
      phone: '+91-452-2345789',
      email: 'info@meenakshi.org',
      address: 'Madurai Main, Madurai, Tamil Nadu 625001'
    },
    timings: '5:00 AM - 12:30 PM, 4:00 PM - 9:30 PM',
    nearbyTemples: ['1', '4'],
    gallery: [
      'https://images.pexels.com/photos/7031606/pexels-photo-7031606.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/6986358/pexels-photo-6986358.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/5792641/pexels-photo-5792641.jpeg?auto=compress&cs=tinysrgb&w=800'
    ]
  },
  {
    id: '3',
    name: 'Golden Temple',
    location: 'Amritsar, Punjab',
    description: 'The holiest Gurdwara of Sikhism, known for its stunning golden architecture.',
    image: 'https://images.pexels.com/photos/6986358/pexels-photo-6986358.jpeg?auto=compress&cs=tinysrgb&w=800',
    rating: 4.9,
    reviews: 18750,
    coordinates: { lat: 31.6200, lng: 74.8765 },
    history: 'The Golden Temple, also known as Harmandir Sahib, was built in the 16th century by Guru Arjan Dev. The temple is covered in gold and sits in the middle of a sacred pool. It represents the spiritual and cultural heritage of the Sikh community.',
    contact: {
      phone: '+91-183-2553957',
      email: 'info@goldentemple.org',
      address: 'Golden Temple Rd, Atta Mandi, Katra Ahluwalia, Amritsar, Punjab 143006'
    },
    timings: '24 Hours Open',
    nearbyTemples: ['1', '5'],
    gallery: [
      'https://images.pexels.com/photos/6986358/pexels-photo-6986358.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/5792641/pexels-photo-5792641.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/7031606/pexels-photo-7031606.jpeg?auto=compress&cs=tinysrgb&w=800'
    ]
  },
  {
    id: '4',
    name: 'Brihadeeswarar Temple',
    location: 'Thanjavur, Tamil Nadu',
    description: 'A UNESCO World Heritage Site and one of the largest temples in India.',
    image: 'https://images.pexels.com/photos/16147094/pexels-photo-16147094.jpeg?auto=compress&cs=tinysrgb&w=800',
    rating: 4.6,
    reviews: 8920,
    coordinates: { lat: 10.7827, lng: 79.1378 },
    history: 'Built by Raja Raja Chola I in the 11th century, this temple is a masterpiece of Tamil architecture. The temple tower is 216 feet tall and was the tallest structure in the world at the time of its construction. It showcases the architectural brilliance of the Chola dynasty.',
    contact: {
      phone: '+91-4362-274447',
      email: 'info@brihadisvara.org',
      address: 'Membalam Rd, Balaganapathy Nagar, Thanjavur, Tamil Nadu 613007'
    },
    timings: '6:00 AM - 12:00 PM, 4:00 PM - 8:30 PM',
    nearbyTemples: ['2', '6'],
    gallery: [
      'https://images.pexels.com/photos/16147094/pexels-photo-16147094.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/7031606/pexels-photo-7031606.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/6986358/pexels-photo-6986358.jpeg?auto=compress&cs=tinysrgb&w=800'
    ]
  },
  {
    id: '5',
    name: 'Jagannath Temple',
    location: 'Puri, Odisha',
    description: 'Famous for the annual Rath Yatra festival and dedicated to Lord Jagannath.',
    image: 'https://images.pexels.com/photos/8471302/pexels-photo-8471302.jpeg?auto=compress&cs=tinysrgb&w=800',
    rating: 4.5,
    reviews: 11340,
    coordinates: { lat: 19.8045, lng: 85.8182 },
    history: 'The Jagannath Temple in Puri is one of the Char Dham pilgrimage sites. Built in the 12th century, it is famous for its annual Rath Yatra where the deities are pulled in huge chariots. The temple is known for its unique traditions and architectural style.',
    contact: {
      phone: '+91-6752-222204',
      email: 'info@jagannathtemple.org',
      address: 'Bada Danda, Puri, Odisha 752001'
    },
    timings: '5:00 AM - 12:00 PM, 4:00 PM - 10:00 PM',
    nearbyTemples: ['3', '6'],
    gallery: [
      'https://images.pexels.com/photos/8471302/pexels-photo-8471302.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/5792641/pexels-photo-5792641.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/7031606/pexels-photo-7031606.jpeg?auto=compress&cs=tinysrgb&w=800'
    ]
  },
  {
    id: '6',
    name: 'Kedarnath Temple',
    location: 'Kedarnath, Uttarakhand',
    description: 'One of the twelve Jyotirlingas of Lord Shiva, located in the Himalayas.',
    image: 'https://images.pexels.com/photos/13896182/pexels-photo-13896182.jpeg?auto=compress&cs=tinysrgb&w=800',
    rating: 4.7,
    reviews: 9870,
    coordinates: { lat: 30.7346, lng: 79.0669 },
    history: 'Kedarnath Temple is situated at an altitude of 3,583 meters and is one of the most sacred pilgrimage sites for Hindus. The temple is believed to be over 1000 years old and is accessible only during the summer months due to extreme weather conditions.',
    contact: {
      phone: '+91-1364-233009',
      email: 'info@kedarnath.org',
      address: 'Kedarnath, Rudraprayag, Uttarakhand 246445'
    },
    timings: '4:00 AM - 2:00 PM, 5:00 PM - 9:00 PM (Seasonal)',
    nearbyTemples: ['4', '5'],
    gallery: [
      'https://images.pexels.com/photos/13896182/pexels-photo-13896182.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/6986358/pexels-photo-6986358.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/5792641/pexels-photo-5792641.jpeg?auto=compress&cs=tinysrgb&w=800'
    ]
  }
];