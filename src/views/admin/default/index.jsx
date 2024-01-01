/*!
  _   _  ___  ____  ___ ________  _   _   _   _ ___   
 | | | |/ _ \|  _ \|_ _|__  / _ \| \ | | | | | |_ _| 
 | |_| | | | | |_) || |  / / | | |  \| | | | | || | 
 |  _  | |_| |  _ < | | / /| |_| | |\  | | |_| || |
 |_| |_|\___/|_| \_\___/____\___/|_| \_|  \___/|___|
                                                                                                                                                                                                                                                                                                                                       
=========================================================
* Horizon UI - v1.1.0
=========================================================

* Product Page: https://www.horizon-ui.com/
* Copyright 2023 Horizon UI (https://www.horizon-ui.com/)

* Designed and Coded by Simmmple

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

// Chakra imports
import {
  Box,
  Icon,
  Button,
  SimpleGrid,
  useColorModeValue,
} from "@chakra-ui/react";
// Assets
// Custom components
import MiniStatistics from "components/card/MiniStatistics";
import IconBox from "components/icons/IconBox";
import React, { useState } from 'react';
import {
  MdFileCopy,
  MdElectricMeter,
  MdElectricBolt,
  MdOutlineCardMembership,
  MdNoteAdd,
  MdEditDocument,
} from "react-icons/md";
import { SearchBar } from 'components/navbar/searchBar/SearchBar';
import CreditScoreArc from "components/card/CreditScoreArc";
import Cookies from 'universal-cookie';

import MiniCalendar from "components/calendar/MiniCalendar";
import CheckTable from "views/admin/default/components/CheckTable";
import ComplexTable from "views/admin/default/components/ComplexTable";
import DailyTraffic from "views/admin/default/components/DailyTraffic";
import PieCard from "views/admin/default/components/PieCard";
import Tasks from "views/admin/default/components/Tasks";
import TotalSpent from "views/admin/default/components/TotalSpent";
import WeeklyRevenue from "views/admin/default/components/WeeklyRevenue";
import {
  columnsDataCheck,
  columnsDataComplex,
} from "views/admin/default/variables/columnsData";
import tableDataCheck from "views/admin/default/variables/tableDataCheck.json";
import tableDataComplex from "views/admin/default/variables/tableDataComplex.json";

export default function UserReports() {
  // Chakra Color Mode
  const cookies = new Cookies();
  const brandColor = useColorModeValue("brand.500", "white");
  const boxBg = useColorModeValue("secondaryGray.300", "whiteAlpha.100");
  const [infoResponse, changeInfoResponse] = useState(cookies.get('infoResponse'));

  return (
    infoResponse != null ? (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      <SimpleGrid
        columns={{ base: 1, md: 2, "2xl": 6 }}
        gap='20px'
        mb='20px'>
          <Box
            mt='1'
            as='h4'
            height='250px'
            lineHeight='tight'
            paddingLeft='10%'
            paddingTop='40px'
            backgroundColor='rgba(112, 144, 176, 0.12)'
            borderRadius='10px'
          >
            <SimpleGrid gap='10px'>
              <Box fontSize='20px' fontWeight='bold'>
                <h1> Basic Information </h1>
              </Box>
              <Box>
                <p> Full Name: {infoResponse.fullName} </p>
              </Box>
              <Box>
                <p> Birthdate: {infoResponse.birthDate} </p>
              </Box>
              <Box>
                <p> Identity Number: {infoResponse.identityNumber} </p>
              </Box>
              <Box>
                <p> Number of Family members: {infoResponse.numberOfFamilyMembers} </p>
              </Box>
            </SimpleGrid>
          </Box>
          <CreditScoreArc userScore={infoResponse.creditScore}></CreditScoreArc>
      </SimpleGrid>
      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 3, "2xl": 6 }}
        gap='20px'
        mb='20px'>
        <MiniStatistics
          startContent={
            <IconBox
              w='56px'
              h='56px'
              bg={boxBg}
              icon={
                <Icon w='32px' h='32px' as={MdOutlineCardMembership} color={brandColor} />
              }
            />
          }
          name='Number of Family credit cards'
          value={infoResponse.numberOfFamilyCreditCards}
        />
        <MiniStatistics
          startContent={
            <IconBox
              w='56px'
              h='56px'
              bg={boxBg}
              icon={
                <Icon w='32px' h='32px' as={MdElectricMeter} color={brandColor} />
              }
            />
          }
          name='Total Electiricity Bills Not Paid On Time In The Last 2 Years'
          value={infoResponse.totalElectricityBillsNotPaidOnTimeLast2Years}
        />
        <MiniStatistics
          startContent={
            <IconBox
              w='56px'
              h='56px'
              bg={boxBg}
              icon={
                <Icon w='32px' h='32px' as={MdElectricBolt} color={brandColor} />
              }
            />
          }
          name='Total Electiricity Bills Paid On Time In The Last 2 Years'
          value={infoResponse.totalElectricityBillsPaidOnTimeLast2Years}
        />
        <MiniStatistics
          startContent={
            <IconBox
              w='56px'
              h='56px'
              bg={boxBg}
              icon={
                <Icon w='32px' h='32px' as={MdEditDocument} color={brandColor} />
              }
            />
          }
          name='Loan Amounts Overdue For 30 - 59 Days In The Last 2 Years'
          value={infoResponse.loanAmountsOverdueFor3059DaysInTheLast2Years}
        />
        <MiniStatistics
          startContent={
            <IconBox
              w='56px'
              h='56px'
              bg={boxBg}
                icon={<Icon w='28px' h='28px' as={MdNoteAdd} color={brandColor} />}
            />
          }
          name='Loan Amounts Overdue For 60 - 89 Days In The Last 2 Years'
          value={infoResponse.loanAmountsOverdueFor6089DaysInTheLast2Years}
        />
        <MiniStatistics
          startContent={
            <IconBox
              w='56px'
              h='56px'
              bg={boxBg}
              icon={
                <Icon w='32px' h='32px' as={MdFileCopy} color={brandColor} />
              }
            />
          }
          name='Loan Amounts Overdue For More Than 90 Days In The Last 2 Years'
          value={infoResponse.loanAmountsOverdueFor90DaysInTheLast2Years}
        />
      </SimpleGrid>
        <SimpleGrid columns={{ base: 1 }} gap='20px' mb='20px'>
          <TotalSpent chartData={infoResponse.loanAmountsOverdueByMonth} />
          {/* <WeeklyRevenue /> */}
        </SimpleGrid>
        {/* <SimpleGrid columns={{ base: 1, md: 1, xl: 2 }} gap='20px' mb='20px'>
          <CheckTable columnsData={columnsDataCheck} tableData={tableDataCheck} />
          <SimpleGrid columns={{ base: 1, md: 2, xl: 2 }} gap='20px'>
            <DailyTraffic />
            <PieCard />
          </SimpleGrid>
        </SimpleGrid> */}
        {/* <SimpleGrid columns={{ base: 1, md: 1, xl: 2 }} gap='20px' mb='20px'>
          <ComplexTable
            columnsData={columnsDataComplex}
            tableData={tableDataComplex}
          />
          <SimpleGrid columns={{ base: 1, md: 2, xl: 2 }} gap='20px'>
            <Tasks />
            <MiniCalendar h='100%' minW='100%' selectRange={false} />
          </SimpleGrid>
        </SimpleGrid> */}
      <Button
        mt={4}
        colorScheme='teal'
        type='submit'
        onClick={() => {
          cookies.remove('infoResponse');
          changeInfoResponse(null);
        }}
      >
        New query
      </Button>
    </Box>
  ) : (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}
          mt='1'
          as='h4'
          marginTop='1%'
          height='250px'
          lineHeight='tight'
          borderRadius='10px'
    >
      <SearchBar mb={{ base: '10px', md: 'unset' }} me="10px" borderRadius="30px" onEvent={changeInfoResponse} />
    </Box>
  )
  );
}
