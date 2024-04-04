//List Item Component
import React from 'react';
import { View, Text } from 'react-native';

const MobileDetail = ({ mobile }) => {
  return (
    <View>
      <Text>Name: {mobile.name}</Text>
      <Text>Brand: {mobile.brand}</Text>
      <Text>Price: ${mobile.price}</Text>
    </View>
  );
}

export default MobileDetail;

// //Section Header Component 
// import React from 'react';
// import { View, Text } from 'react-native';

// const SectionHeader = ({ headerText }) => {
//   return (
//     <View style={styles.header}>
//       <Text style={styles.headerText}>{headerText}</Text>
//     </View>
//   );
// };

// const styles = {
//   header: {
//     backgroundColor: '#f8f8f8',
//     justifyContent: 'center',
//     alignItems: 'center',
//     height: 40,
//     paddingTop: 10,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.2,
//     elevation: 2,
//     position: 'relative'
//   },
//   headerText: {
//     fontSize: 18
//   }
// };

// export default SectionHeader;

// //How to Show An Image
// import React from 'react';
// import { View, Text, Image } from 'react-native';

// const MobileDetail = ({ mobile }) => {
//   return (
//     <View>
//       <Text>Name: {mobile.name}</Text>
//       <Text>Brand: {mobile.brand}</Text>
//       <Text>Price: ${mobile.price}</Text>
//       <Image
//         style={{ width: 200, height: 200 }}
//         source={{ uri: mobile.imageURL }}
//       />
//     </View>
//   );
// }

// export default MobileDetail;

// //Scrollable Content
// import React, { useState, useEffect } from 'react';
// import { View, FlatList, ActivityIndicator } from 'react-native';
// import axios from 'axios';
// import Item from './Item';

// const MobileList = () => {
//   const [mobiles, setMobiles] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     // Fetch mobiles from the API
//     fetchMobiles();
//   }, []);

//   const fetchMobiles = () => {
//     // Fetch mobiles data from the API
//     axios.get('https://my-json-server.typicode.com/<username>/<repository>/gadgets')
//       .then(response => {
//         setMobiles(response.data); // Update mobiles state with fetched data
//         setLoading(false); // Set loading state to false once data is fetched
//       })
//       .catch(error => {
//         console.error(error);
//         setLoading(false); // Set loading state to false in case of error
//       });
//   };

//   return (
//     <View style={{ flex: 1 }}>
//       {loading ? (
//         <ActivityIndicator size="large" color="#0000ff" /> // Display loading indicator while fetching data
//       ) : (
//         <FlatList
//           data={mobiles}
//           renderItem={({ item }) => <Item name={item.name} brand={item.brand} price={item.price} />}
//           keyExtractor={(item) => item.id.toString()}
//         />
//       )}
//     </View>
//   );
// };

// export default MobileList;

// //How to open another App (Browser)
// import React from 'react';
// import { View, Text, Linking } from 'react-native';
// import Button from './Button';

// const MobileDetail = ({ mobile }) => {
//   const openBrowser = () => {
//     Linking.openURL(mobile.website);
//   };

//   return (
//     <View>
//       <Text>Name: {mobile.name}</Text>
//       <Text>Brand: {mobile.brand}</Text>
//       <Text>Price: ${mobile.price}</Text>
//       <Button onPress={openBrowser}>Visit Website</Button>
//     </View>
//   );
// }

// export default MobileDetail;
