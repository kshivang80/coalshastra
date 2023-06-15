import { Box, Image, Input, InputGroup, InputLeftElement, Select, SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react'
import "./Body.css"
import { Search2Icon } from '@chakra-ui/icons'
import { BsShare, } from 'react-icons/bs';
import { AiOutlineStar,AiOutlineFire } from 'react-icons/ai';
import { MdDownload, MdLocationOn } from 'react-icons/md';
import { IoBoatOutline } from 'react-icons/io5';
import { HiOutlineLightBulb } from 'react-icons/hi2';
import usa from "../Images/usa.png"
import BuyerAndSellerForm from './BuyerForm/BuyerAndSellerForm';


const Body = () => {

    return (
        <div>
            <Box className='mainDiv'>
                <Box className='searchBiv'>
                    <Box className='search1'>
                        <Box className='smallInput1'>
                            <Text>Currency</Text>
                            <Select border="1px solid gray">
                                <option value='option1'>INR</option>
                                <option value='option1'>USA</option>
                            </Select>

                        </Box>
                        <Box className='smallInput2'>
                            <Text>Payment Method</Text>{" "}
                            <Select border="1px solid gray" placeholder='Payment Method'>
                                <option value='option1'>INR</option>
                                <option value='option1'>USA</option>
                            </Select>
                        </Box>
                        <Box className='smallInput3'>
                            <Text>Currency</Text>
                            <Select border="1px solid gray">
                                <option value='option1'>INR</option>
                                <option value='option1'>USA</option>
                            </Select>

                        </Box>
                        <Box className='smallInput4'>
                            <Text mt="20px" color='blue'>Clear All</Text>
                        </Box>

                    </Box>
                    <Box className='searchClass'>
                        <Box className='searchClassDiv1'>

                        </Box>
                        <Box className='searchClassDiv2'>
                            <InputGroup>
                                <InputLeftElement pointerEvents='none'>
                                    <Search2Icon color='gray.300' />
                                </InputLeftElement>
                                <Input size='md' variant='outline' type='tel' placeholder='Search by Vessel,type,etc' />
                            </InputGroup>
                        </Box>


                    </Box>

                </Box>

                <SimpleGrid columns={{sm: 1, md: 2,lg:2}} width="90%" margin={"auto"} >
                    <div className="oneDiv" >
                        <Box className='gujart'>
                            <Text mt="10px" color="gray">"USA-GUJARAT" market</Text>
                        </Box>
                        <Box className='mainContentDIv'>
                            <Box className='mainContent'>
                                <Box className='mainContent1'>
                                    <Box className='mainContentSub1'>
                                        <Text ml="10px" color="purple" as="b" fontSize={"20px"}>IOANNIS</Text>
                                    </Box>
                                    <Box className='mainContentSub2'>
                                        <BsShare style={{ width: "20px", height: "30px" }} />
                                        <MdDownload style={{ width: "25px", height: "30px", color: "blue" }} />
                                        <AiOutlineStar style={{ width: "25px", height: "30px", color: "yellow" }} />

                                    </Box>


                                </Box>
                                <Box className='usa'>
                                    <Box className='usa1'>

                                        <Image src={usa} w="20px" h="20px" mt="3px" />
                                        <Text ml="3px">United State  |</Text>
                                    </Box>
                                    <Box className='usa2'>
                                        <MdLocationOn style={{ width: "20px", height: "20px", marginTop: "3px" }} />
                                        <Text ml="3px">Tuna Port</Text>
                                    </Box>
                                    <Box className='usa3'>
                                        <Text>5906 NAR(Kcal/kg)</Text>
                                    </Box>

                                </Box>
                                <Box className='boatText'>
                                    <Box className='boatIcone'>
                                        <IoBoatOutline style={{ width: "30px", height: "25px", marginLeft: "4px", margin: "auto", marginTop: "5px" }} />
                                    </Box>
                                    <Box className='boatText1'>
                                        <Text fontFamily={"sans-serif"}>
                                            IOANNIS , San Nicolas ,abc contract ,abc contract ,US COAL, Chandrapur -HLC-2
                                        </Text>
                                    </Box>

                                </Box>
                                <Box className='bidDiv'>
                                    <Box className='bidDiv1'>
                                        <Text color={"gray"}>Bid Price /MT</Text>
                                        <Text as="b" fontFamily={"sans-serif"}>INR 0.00</Text>
                                    </Box>
                                    <Box className='bidDiv1'>
                                        <Text color={"gray"}>Floor Price /MT</Text>
                                        <Text as="b" fontFamily={"sans-serif"}>INR ****</Text>
                                    </Box>
                                    <Box className='bidDiv1'>
                                        <Text color={"gray"}>Last Match</Text>
                                        <Text as="b" fontFamily={"sans-serif"}>INR 0.00</Text>
                                    </Box>

                                </Box>

                            </Box>
                            <Box className='mainContent'>
                                <Box className='mainContent1'>
                                    <Box className='mainContentSub1'>
                                        <Text ml="10px" color="purple" as="b" fontSize={"20px"}>TEST EAUCTION 6750 NAR</Text>
                                    </Box>
                                    <Box className='mainContentSub2'>
                                        <BsShare style={{ width: "20px", height: "30px" }} />
                                        <MdDownload style={{ width: "25px", height: "30px", color: "blue" }} />
                                        <AiOutlineStar style={{ width: "25px", height: "30px", color: "yellow" }} />

                                    </Box>


                                </Box>
                                <Box className='usa'>
                                    <Box className='usa1'>

                                        <Image src={usa} w="20px" h="20px" mt="3px" />
                                        <Text ml="3px">United State  |</Text>
                                    </Box>
                                    <Box className='usa2'>
                                        <MdLocationOn style={{ width: "20px", height: "20px", marginTop: "3px" }} />
                                        <Text ml="3px">Tuna Port</Text>
                                    </Box>
                                    <Box className='usa3'>
                                        <Text>5906 NAR(Kcal/kg)</Text>
                                    </Box>

                                </Box>
                                <Box className='boatText'>
                                    <Box className='boatIcone'>
                                        <IoBoatOutline style={{ width: "30px", height: "25px", marginLeft: "4px", margin: "auto", marginTop: "5px" }} />
                                    </Box>
                                    <Box className='boatText1'>
                                        <Text fontFamily={"sans-serif"}>
                                            IOANNIS , San Nicolas ,abc contract ,abc contract ,US COAL, Chandrapur -HLC-2
                                        </Text>
                                    </Box>

                                </Box>
                                <Box className='bidDiv'>
                                    <Box className='bidDiv1'>
                                        <Text color={"gray"}>Bid Price /MT</Text>
                                        <Text as="b" fontFamily={"sans-serif"}>INR 0.00</Text>
                                    </Box>
                                    <Box className='bidDiv1'>
                                        <Text color={"gray"}>Floor Price /MT</Text>
                                        <Text as="b" fontFamily={"sans-serif"}>INR ****</Text>
                                    </Box>
                                    <Box className='bidDiv1'>
                                        <Text color={"gray"}>Last Match</Text>
                                        <Text as="b" fontFamily={"sans-serif"}>INR 0.00</Text>
                                    </Box>

                                </Box>

                            </Box>
                            <Box className='mainContent'>
                                <Box className='mainContent1'>
                                    <Box className='mainContentSub1'>
                                        <Text ml="10px" color="purple" as="b" fontSize={"20px"}>MV SAMJOHN SOLIDARITY</Text>
                                    </Box>
                                    <Box className='mainContentSub2'>
                                        <BsShare style={{ width: "20px", height: "30px" }} />
                                        <MdDownload style={{ width: "25px", height: "30px", color: "blue" }} />
                                        <AiOutlineStar style={{ width: "25px", height: "30px", color: "yellow" }} />

                                    </Box>


                                </Box>
                                <Box className='usa'>
                                    <Box className='usa1'>

                                        <Image src={usa} w="20px" h="20px" mt="3px" />
                                        <Text ml="3px">United State  |</Text>
                                    </Box>
                                    <Box className='usa2'>
                                        <MdLocationOn style={{ width: "20px", height: "20px", marginTop: "3px" }} />
                                        <Text ml="3px">Tuna Port</Text>
                                    </Box>
                                    <Box className='usa3'>
                                        <Text>5906 NAR(Kcal/kg)</Text>
                                    </Box>

                                </Box>
                                <Box className='boatText'>
                                    <Box className='boatIcone'>
                                        <IoBoatOutline style={{ width: "30px", height: "25px", marginLeft: "4px", margin: "auto", marginTop: "5px" }} />
                                    </Box>
                                    <Box className='boatText1'>
                                        <Text fontFamily={"sans-serif"}>
                                            IOANNIS , San Nicolas ,abc contract ,abc contract ,US COAL, Chandrapur -HLC-2
                                        </Text>
                                    </Box>

                                </Box>
                                <Box className='bidDiv'>
                                    <Box className='bidDiv1'>
                                        <Text color={"gray"}>Bid Price /MT</Text>
                                        <Text as="b" fontFamily={"sans-serif"}>INR 0.00</Text>
                                    </Box>
                                    <Box className='bidDiv1'>
                                        <Text color={"gray"}>Floor Price /MT</Text>
                                        <Text as="b" fontFamily={"sans-serif"}>INR ****</Text>
                                    </Box>
                                    <Box className='bidDiv1'>
                                        <Text color={"gray"}>Last Match</Text>
                                        <Text as="b" fontFamily={"sans-serif"}>INR 0.00</Text>
                                    </Box>

                                </Box>

                            </Box>
                        </Box>
                    </div>
                    <Box className='twoDiv' >
                        <Box className='blueDiv'>
                        <HiOutlineLightBulb style={{marginTop:""}}/>
                            <Text ml="5px">
                                All Prices are including CESS
                            </Text>
                       </Box>
                       <Box className='redDiv'>
                            <Box className='redDiv1'>
                                <AiOutlineFire style={{color:"red",height:"30px",width:"20px",margin:"auto"}}/>
                                <Text fontSize={"12px"} as="b"  marginLeft="10px">HOT Listing</Text>
                            </Box>
                            <Box className='redDiv2'>
                            <Text color="red">Accepting terms ,without any modification of a "HOT listing" will lead to compulsory bid/offer accepting .</Text>

                            </Box>
                            
                       </Box>

                       <Box className='MV'>
                       <Box className='mainContent1'>
                                    <Box className='mainContentSub1'>
                                        <Text ml="10px" color="purple" as="b" fontSize={"20px"}>MV SAMJOHN SOLIDARITY</Text>
                                    </Box>
                                    <Box className='mainContentSub2'>
                                        <BsShare style={{ width: "20px", height: "30px" }} />
                                        <MdDownload style={{ width: "25px", height: "30px", color: "blue" }} />
                                        <AiOutlineStar style={{ width: "25px", height: "30px", color: "yellow" }} />

                                    </Box>


                                </Box>
                                <Box className='usa'>
                                    <Box className='usa1'>

                                        <Image src={usa} w="20px" h="20px" mt="3px" />
                                        <Text ml="3px">United State  |</Text>
                                    </Box>
                                    <Box className='usa2'>
                                        <MdLocationOn style={{ width: "20px", height: "20px", marginTop: "3px" }} />
                                        <Text ml="3px">Tuna Port</Text>
                                    </Box>
                                    <Box className='usa3'>
                                        <Text>5906 NAR(Kcal/kg)</Text>
                                    </Box>

                                </Box>

                       </Box>
                    </Box>

                </SimpleGrid>


                <Box   h="auto" display="flex" w="90%" m="auto">
                    <Box w="50%">

                    </Box>
                    <Box w="50%"  >
                    <BuyerAndSellerForm/>
                    </Box>
                     
                </Box>

            </Box>
        </div>
    )
}

export default Body