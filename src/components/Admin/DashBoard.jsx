import React, { useEffect } from 'react';
import { Grid, Box, Text, Heading, Stack } from '@chakra-ui/react';
import Bar from './Bar';
import SideBar from './SideBar';
import Databox from './Databox';
import Chart from './Chart';
import DoughnutChart from './DoughnutChart';
import Loader from '../Layout/Loader';
import toast from 'react-hot-toast'
import { useDispatch, useSelector } from 'react-redux';
import { getStats } from '../../redux/Actions/admin';
const DashBoard = () => {
    const {user} = useSelector((state)=>state.user);
    const { loading, error, stats, user2Count, usersCount, subscriptionsCount, viewsCount, usersPercentage, viewsPercentage, subscriptionsPercentage, viewsProfit, subscriptionsProfit, usersProfit } = useSelector(state => state.admin);
    const dispatch = useDispatch();
    useEffect(() => {
        if (error) {
            toast.error(error);
        }
        dispatch(getStats());
    }, [dispatch, error]);
    return (
        <Grid minH={'100vh'} templateColumns={['1fr', '5fr 1fr']}>
            {loading ? (
                <Loader />
            ) : (
                <>
                    <Box boxSizing="border-box" py="16" px={['4', '0']}>
                        <Text textAlign={'center'} opacity={'0.5'}>
                            Last change was on {String(new Date()).split('G')[0]}
                        </Text>

                        <Heading ml={['0', '16']} mb={'16'} textAlign={['center', 'left']}>
                            Dashboard
                        </Heading>

                        <Stack
                            direction={['column', 'row']}
                            minH={'24'}
                            justifyContent={'space-evenly'}
                        >
                            <Databox
                                title="Views"
                                qty={viewsCount}
                                qtyPercentage={30}
                                profit={viewsProfit}
                            />
                            <Databox
                                title="Users"
                                qty={usersCount}
                                qtyPercentage={30}
                                profit={usersProfit}
                            />
                            <Databox
                                title="Subscription"
                                qty={subscriptionsCount}
                                qtyPercentage={30}
                                profit={subscriptionsProfit}
                            />
                        </Stack>

                        <Box
                            boxShadow={'-2px 0 10px rgba(107, 70, 193, 0.5)'}
                            margin={['0', '16px']}
                            borderRadius={'lg'}
                            padding={['0', '16']}
                            mt={['4', '16']}
                        >
                            <Heading
                                textAlign={['center', 'left']}
                                size={'md'}
                                pt={['8', '0']}
                                ml={['0', '16']}
                            >
                                Views Graph
                            </Heading>
                            {/* Line Graph Here */}
                            {stats && <Chart stats={stats}/>}
                        </Box>

                        <Grid templateColumns={['1fr', '2fr 1fr']}>
                            <Box p="4">
                                <Heading
                                    my="8"
                                    ml={['0', '16']}
                                    textAlign={['center', 'left']}
                                    size={'md'}
                                >
                                    Progress Bar
                                </Heading>

                                <Box>
                                    <Bar profit={viewsProfit} title={'Views'} value={viewsPercentage} />
                                    <Bar profit={usersProfit} title={'Users'} value={usersPercentage} />
                                    <Bar profit={subscriptionsProfit} title={'Subscription'} value={subscriptionsPercentage} />
                                </Box>
                            </Box>

                            <Box p={['0', '16']} boxSizing="border-box" py="4">
                                <Heading
                                    textAlign={'center'}
                                    size="md"
                                    mb="4"
                                    children="Users "
                                />

                                {/* Donut Graph */}
                                {/* <Doughnut /> */}
                                {user && <DoughnutChart subscriptionsCount={subscriptionsCount} user2Count={user2Count}/>}
                            </Box>
                        </Grid>
                    </Box>

                    <SideBar />
                </>
            )}
        </Grid>
    );
};

export default DashBoard;
