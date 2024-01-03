import React, { useContext, useEffect, useState } from 'react';
import { Tabs } from 'antd';
import { HeadingH3, HeadingH4 } from '../Heading';
import { Para14, Para16 } from '../ParaGraph';
import { AiOutlineHome } from 'react-icons/ai';
import { useTheme } from 'next-themes';
import axios from 'axios';
import { UseidContext } from '../ServiceContext';

const ServiceTab = ({setServiceTabId}) => {
  const { theme } = useTheme();
  const { TabPane } = Tabs;
  const [allServicetabs, setAllServicetabs] = useState([]);
  const [filteredServicetabs, setFilteredServicetabs] = useState([]);
  const { id } = UseidContext(); // Getting id from context

  useEffect(() => {
    if (id) {
      const fetchAllServicetabs = async () => {
        try {
          const response = await axios.get(`/api/servicetab?infoId=${id}`);
          setAllServicetabs(response.data.servicetabs);
        } catch (error) {
          console.error('Error getting service tab:', error);
        }
      };
      fetchAllServicetabs();
    }
  }, [id]); // Removed setServiceTabId from dependency array
  
  useEffect(() => {
    const filteredData = allServicetabs.filter(tab => tab.serviceInfoId === id);
    setFilteredServicetabs(filteredData);
    // console.log("Filtered Service Tabs:", filteredData);
  
    if (filteredData.length > 0) {
      // Example: setting ID of the first tab in filtered data
      setServiceTabId(filteredData[0].serviceInfoId);
    }
  }, [allServicetabs, id]); // setServiceTabId is used here but not as a dependency
  

  return (
    <>
      <HeadingH3 title={'Media content storage and delivery'}/>
      <Tabs defaultActiveKey="1" tabBarStyle={{ border: 'none' }}>
        {filteredServicetabs.map((item, index) => (
          <TabPane 
            tab={<span className={`flex gap-1 ${theme === 'dark' ? 'text-primary-white' : 'text-primary-black'}`}>
              <AiOutlineHome size={20} className='mt-1'/>
              {item.title}
            </span>} 
            key={index + 1}
          >
            <div className={`space-y-3 ${theme === 'dark' ? 'text-primary-white' : 'text-primary-black'}`}>
              <HeadingH4 title={item.heading} />
              <Para16 title={item.description}/>
              <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 pt-5'>
                {item.subdata.map((subItem, subIndex) => (
                  <div className='border-t-2 p-2 shadow-md backdrop-blur-3xl' key={subIndex + 1}>
                    <Para14 title={subItem.description}/>
                  </div>
                ))}
              </div>
            </div>
          </TabPane>
        ))}
      </Tabs>
    </>
  );
};

export default ServiceTab;
