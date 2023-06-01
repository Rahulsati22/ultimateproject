import React from 'react'
import { Grid, Box, Text, Heading, Stack } from '@chakra-ui/react'
import Bar from './Bar'
import SideBar from './SideBar'
import Databox from './Databox'
import LineChart from './Chart'
const DashBoard = () => {
    return (
        <Grid minH={'100vh'} templateColumns={['1fr', '5fr 1fr']}>
            <Box boxSizing='border-box' py='16' px={['4', '0']}>
                <Text textAlign={'center'} opacity={'0.5'}>
                    Last change was on {String(new Date()).split("G")[0]}
                </Text>

                <Heading ml={['0', '16']} mb={'16'} textAlign={['center', 'left']}>
                    Dashboard
                </Heading>

                <Stack direction={['column', 'row']} minH={'24'} justifyContent={'space-evenly'}>
                    <Databox title='Views' qty={123} qtyPercentage={30} profit={true} />
                    <Databox title='Users' qty={123} qtyPercentage={30} profit={true} />
                    <Databox title='Subscription' qty={123} qtyPercentage={30} profit={false} />
                </Stack>

                <Box boxShadow={'-2px 0 10px rgba(107, 70, 193, 0.5)'} margin={['0', '16px']} borderRadius={'lg'} padding={['0', '16']} mt={['4', '16']}>
                    <Heading textAlign={['center', 'left']} size={'md'} pt={['8', '0']} ml={['0', '16']}>
                        Views Graph
                    </Heading>
                    {/* Line Graph Here */}
                </Box>

                <Grid templateColumns={['1fr', '2fr 1fr']}>
                    <Box p='4'>
                        <Heading my='8' ml={['0', '16']} textAlign={['center', 'left']} size={'md'} >
                            Progress Bar
                        </Heading>

                        <Box>
                            <Bar profit={true} title={'Views'} value={30} />
                            <Bar profit={true} title={'Users'} value={30} />
                            <Bar profit={false} title={'Subscription'} value={30} />
                        </Box>
                    </Box>

                    <Box p={['0','16']} boxSizing='border-box' py='4'>
                    <Heading textAlign={'center'} size='md' mb='4' children='Users '/>

                    {/* Donut Graph */}
                    </Box>
                </Grid>
            </Box>

            <SideBar />

        </Grid>
    )
}

export default DashBoard