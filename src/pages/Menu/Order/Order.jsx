import { Helmet } from "react-helmet-async";
import orderImg from '../../../assets/shop/banner2.jpg'
import Cover from "../../../components/Shared/Cover";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useState } from "react";
import useMenu from "../../../hooks/useMenu";
import OrderTab from "./OrderTab";


const Order = () => {
    const [tabIndex, setTabIndex] = useState(0);
    const [menu] = useMenu();
    const dessert = menu.filter(item => item.category === 'dessert');
    const soup = menu.filter(item => item.category === 'soup');
    const salad = menu.filter(item => item.category === 'salad');
    const pizza = menu.filter(item => item.category === 'pizza');
    const drinks = menu.filter(item => item.category === 'drinks');

    return (
        <div>
            <Helmet>
                <title>Bonsai Sushi | Order Food</title>
            </Helmet>

            <Cover img={orderImg} title={"Order Food"} subtitle={"Please order here for your food"} />
            <div className=" mt-10 text-center">
                <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    <TabList>
                        <Tab>Salad</Tab>
                        <Tab>Pizza</Tab>
                        <Tab>Soup</Tab>
                        <Tab>Dessert</Tab>
                        <Tab>Drinks</Tab>
                    </TabList>
                    <TabPanel>
                        <OrderTab items={salad} />
                    </TabPanel>
                    <TabPanel>
                    <OrderTab items={pizza} />
                    </TabPanel>
                    <TabPanel>
                    <OrderTab items={soup} />
                    </TabPanel>
                    <TabPanel>
                    <OrderTab items={dessert} />
                    </TabPanel>
                    <TabPanel>
                    <OrderTab items={drinks} />
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default Order;