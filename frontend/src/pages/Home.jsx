import React from 'react';

import {
	Box,
	Center,
	Flex,
	Grid,
	GridItem,
	Image,
	Img,
	Spacer,
	Stack,
	Text,
} from '@chakra-ui/react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Contact from '../components/contact';
import ReactPlayer from 'react-player';

const Home = () => {
	const settings = {
		dots: false,
		infinite: true,
		speed: 3000,
		slidesToShow: 6,
		slidesToScroll: 2,
	};
	return (
		<div className='home-main'>
			<br />
			{/* Top Section (Hero Section) */}
			<Flex w={'95%'} m={'auto'}>
				<Box mt={'50px'} width={'20%'}>
					<Center>
						<Image
							borderRadius={'5px'}
							style={{ width: '230px' }}
							src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZxUj3ju_SOxMIhO0TtM4HJrSTbdGNIEUMUuk3ratz8s223B0b_UzUub3z4dwcw8iDYjw'
							alt='hero-Img'
						/>
					</Center>
					<h5 style={{ textAlign: 'center' }}>This Just In</h5>
					<p style={{ textAlign: 'center' }}>
						New arrivals to officially
						<br /> kick off the summer
						<br /> season.
					</p>
					<Center>
						<Image
							borderRadius={'5px'}
							style={{ width: '250px' }}
							src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ5hcKf2l0AkUpLzDT2nCX73ZskQIXwDn5ahGfgzYbuAKsMOr3N-sdcVHZ2qWDvliNztY'
							alt='hero-Img'
						/>
					</Center>
					<h5 style={{ textAlign: 'center' }}>This Just In</h5>
					<p style={{ textAlign: 'center' }}>
						New arrivals to officially
						<br /> kick off the summer
						<br /> season.
					</p>
				</Box>
				<Box width={'60%'}>
					<Center p={'20px'}>
						<Image
							borderRadius={'50px'}
							style={{ width: '700px' }}
							src='https://img.freepik.com/free-photo/top-view-table-full-delicious-food-composition_23-2149141353.jpg'
							alt='hero-Img'
						/>
					</Center>

					<Box textAlign={'center'}>
						<h5>THE SHOP</h5>
						<h3 style={{ fontFamily: 'Jost' }}>
							Our 13 Essential Grilling Tools,
							<br /> Accessories & Serving Platters
						</h3>

						<Text>Meet the grills</Text>
					</Box>
				</Box>

				<Box mt={'50px'} width={'20%'}>
					<Center>
						<Image
							borderRadius={'5px'}
							style={{ width: '250px' }}
							src='https://media.istockphoto.com/id/503337620/photo/grilled-halibut-with-spinach-leeks-and-pine-nuts.jpg?s=612x612&w=0&k=20&c=bcrySCiUxAEhyRm8Hd5W9wLvnivMUA7o2xkM-i_lpT8='
							alt='hero-Img'
						/>
					</Center>
					<h5 style={{ textAlign: 'center' }}>This Just In</h5>
					<p style={{ textAlign: 'center' }}>
						New arrivals to officially
						<br /> kick off the summer
						<br /> season.
					</p>
					<Center>
						<Image
							borderRadius={'5px'}
							style={{ width: '250px' }}
							src='https://cdn.thewirecutter.com/wp-content/media/2023/05/dinnerware-2048px-0062-3x2-1.jpg?auto=webp&quality=75&crop=3:2&width=1024'
							alt='hero-Img'
						/>
					</Center>
					<h5 style={{ textAlign: 'center' }}>This Just In</h5>
					<p style={{ textAlign: 'center' }}>
						New arrivals to officially
						<br /> kick off the summer
						<br /> season.
					</p>
				</Box>
			</Flex>
			{/* Middle Section  */}

			<Box background={'white'} textAlign={'center'} mt={'80px'} h={'90vh'}>
				<Center gap={'7px'}>
					<span>
						<h3 style={{ fontFamily: 'Jost' }}>New to</h3>
					</span>
					<Text pt={'10px'} className='paint-text'>
						the Shop
					</Text>
				</Center>
				<p>Our newest additions that we can't stop talking about</p>
				<Box mt={'100px'} h={'500px'}>
					<Grid templateColumns='repeat(3, 1fr)' gap={6}>
						<GridItem>
							<Box m={'auto '} width={'350px'}>
								<Image
									boxSize='350px'
									h={'250px'}
									borderRadius={'10px'}
									src='https://media.istockphoto.com/id/526920325/photo/kitchenware-on-wooden-shelves.jpg?s=612x612&w=0&k=20&c=SOlfj82zu_1DWAKpXdLRv0k0lTJS5cXJ0fkZ4Ym6XRU='
									alt='Dan Abramov'
								/>
								<h5>GIFT COLLECTION</h5>

								<Text pt={'10px'} className='paint-text'>
									Newly Added
								</Text>
							</Box>
						</GridItem>
						<GridItem>
							<Box m={'auto '} width={'350px'}>
								<Image
									boxSize='350px'
									h={'250px'}
									borderRadius={'10px'}
									src='https://www.bsshomestore.com/wp-content/uploads/2022/01/Best-Kitchen-Appliance-Brands-in-India-1.jpg'
									alt='Dan Abramov'
								/>
								<h5>APLIANCE COLLECTION</h5>
								<Text pt={'10px'} className='paint-text'>
									Newly Added
								</Text>
							</Box>
						</GridItem>
						<GridItem>
							<Box m={'auto '} width={'350px'}>
								<Image
									boxSize='350px'
									h={'250px'}
									borderRadius={'10px'}
									src='https://cdn.shopify.com/s/files/1/2690/0106/products/m21nsa05p2142_800x.png?v=1642226062'
									alt='Dan Abramov'
								/>

								<h5>HOME COLLECTION</h5>
								<Text pt={'10px'} className='paint-text'>
									Newly Added
								</Text>
							</Box>
						</GridItem>
					</Grid>
				</Box>
			</Box>
			{/* Second Middle Section */}
			<Box textAlign={'center'} mt={'50px'}>
				<h2 style={{ fontFamily: 'Jost' }}>🛒Shop By Category</h2>
			</Box>
			<Box pt={'80px'} h={'300px'} w={'95%'} m={'auto'}>
				<Slider {...settings}>
					<div className='shopbydiv'>
						<Center borderRadius={'full'}>
							<img
								className='shopbydivimg'
								width={'100px'}
								src='https://cdn.shopify.com/s/files/1/0086/2332/5244/collections/CLP-3UP-800x800-Recoveredkobenstyle_1200x1200.jpg?v=1653326612'
								alt='img'
							/>
						</Center>
						<h6>CROCKERY</h6>
					</div>
					<div className='shopbydiv'>
						<Center borderRadius={'full'}>
							<img
								className='shopbydivimg'
								width={'100px'}
								src='https://res.cloudinary.com/purnesh/image/upload/w_540,f_auto,q_auto:eco,c_limit/kitchenaidindia-72945108-188213418998372-1790845475307032312-n1.jpg'
								alt='img'
							/>
						</Center>
						<h6>KITCHEN</h6>
					</div>
					<div className='shopbydiv'>
						<Center borderRadius={'full'}>
							<img
								className='shopbydivimg'
								width={'100px'}
								src='https://hips.hearstapps.com/hmg-prod/images/gh-092520-ghi-best-ceramic-cookware-1601061120.png?crop=0.577xw:0.887xh;0.179xw,0.0764xh&resize=1200:*'
								alt='img'
							/>
						</Center>
						<h6>TABLE</h6>
					</div>
					<div className='shopbydiv'>
						<Center borderRadius={'full'}>
							<img
								className='shopbydivimg'
								width={'100px'}
								src='https://food.fnr.sndimg.com/content/dam/images/food/products/2021/1/26/rx_rachael-ray-create-delicious-nonstick-cookware-pots-and-pans-set-13-piece.jpeg.rend.hgtvcom.616.616.suffix/1611697745590.jpeg'
								alt='img'
							/>
						</Center>
						<h6>APLIANCES</h6>
					</div>
					<div className='shopbydiv'>
						<Center borderRadius={'full'}>
							<img
								className='shopbydivimg'
								width={'100px'}
								src='https://i.pinimg.com/originals/58/ca/c1/58cac197a822752e73d5fefb418cb8b3.jpg'
								alt='img'
							/>
						</Center>
						<h6>HOME</h6>
					</div>
					<div className='shopbydiv'>
						<Center borderRadius={'full'}>
							<img
								className='shopbydivimg'
								width={'100px'}
								src='https://cdn.shopify.com/s/files/1/2690/0106/products/ModernVase_7_800x.jpg?v=1610438012'
								alt='img'
							/>
						</Center>
						<h6>GIFTS</h6>
					</div>
					<div className='shopbydiv'>
						<Center borderRadius={'full'}>
							<img
								className='shopbydivimg'
								width={'100px'}
								src='https://www.glowgift.com/wp-content/uploads/2022/10/GLOW-GIFTS-CHARCUTERIE-Web-1022.jpg'
								alt='img'
							/>
						</Center>
						<h6>FIVE TWO</h6>
					</div>
				</Slider>
			</Box>

			<Box h={'500px'}>
				<Grid w={'100%'} templateColumns='repeat(2, 1fr)'>
					<GridItem w={'100%'} h={'100%'}>
						<Center>
							<h5>FEATURED VIDEO</h5>
						</Center>
						<Spacer h={'30px'} />
						<Center>
							<h1 className='feature-video'>
								You Asked, We Tested:
								<br /> Here Are Our 5 <br /> Favorite Spatulas
							</h1>
						</Center>
						<Spacer h={'30px'} />
						<Center>
							<h5>
								It turns out, a fish spatula is probably not the
								<br /> only spatula you need.
							</h5>
						</Center>
						<Spacer h={'20px'} />
						<Center>
							<button className='btn'>Read Mode</button>
						</Center>
					</GridItem>
					<GridItem w={'100%'} h={'100%'}>
						<Center>
							<ReactPlayer url='https://www.youtube.com/watch?v=99ND_B5kMd4' />
						</Center>
					</GridItem>
				</Grid>
			</Box>
			<Contact />
		</div>
	);
};

export default Home;
