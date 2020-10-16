import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import data from "../data/mockData";
import { Card, CardContent } from 'semantic-ui-react'
import cupcake from './Cupcake.jpg';

//import "../../styles/GalleryPage.css";

export default function GalleryPage() {
  return (
    <div>
      <h1 style={{textAlign: 'center', fontSize: '50px', marginTop: '40px'}}>Our Selection</h1>
      {/* This is the page that displays all the items in your database. For now, 
      hard-code these objects in the ../data/mockData.js file. */}
      <div style={{display: 'flex', flexDirection: 'row', gridRow: 3, marginLeft: '30px', marginRight: '30px'}}>
        <Card style={{marginTop: '15px', marginLeft: '15px', width: '395px'}}
          //CardContent='flex'
          //href='./DetailPage/RedVelvet'
          href='./detail'
          image='https://www.bostongirlbakes.com/wp-content/uploads/2012/04/IMG_6812.jpg'
          header='Red Velvet Cupcakes'
          description='Creamy buttermilk icing topping rich, flavorful red cake'
          meta='$3.50'
        />
        <Card style={{marginLeft: '15px', width: '395px'}}
          href='./detail'
          //href='./DetailPage/Macaroons'
          image='https://res.cloudinary.com/hz3gmuqw6/image/upload/c_fill,h_539,q_60,w_718/g_north_east,l_cozymeal-verified,w_120,x_0,y_40/assorted-macarons-FF0E0D3'
          header='Assorted Macaroons'
          description='Your favorite soft and sweet sandwiches of sugar'
          height='300px'
          meta='$2.00'
        />
        <Card style={{marginLeft: '15px', width: '395px'}}
          href='./detail'
          //href='./DetailPage/ChocolateCake'
          image='https://preppykitchen.com/wp-content/uploads/2019/06/Chocolate-cake-recipe-1200a.jpg'
          header='Chocolate Cake'
          description ='Moist and rich cake with semi-sweet icing, just sweet enough to leave you wanting more'
          meta='$5.00'
        />
        <Card style={{marginLeft: '15px', width: '395px'}}
          //CardContent='flex'
          href='./detail'
          //href='./DetailPage/StrawberryShortcake'
          image='https://i2.wp.com/grandbaby-cakes.com/wp-content/uploads/2020/06/Strawberry-Shortcake-Cake-5.jpg'
          header='Strawberry Shortcake'
          description='Reminisce your childhood with strawberries, whipped cream, and rich cake'
          meta='$6.00'
        />
      </div>

      <div style={{display: 'flex', flexDirection: 'row', gridRow: 3, marginLeft: '30px', marginRight: '30px'}}>
        <Card style={{marginTop: '15px', marginLeft: '15px', width: '395px'}}
          href='./detail'
          //href='./DetailPage/RedVelvet'
          image='https://www.bostongirlbakes.com/wp-content/uploads/2012/04/IMG_6812.jpg'
          header='Red Velvet Cupcakes'
          description='Creamy buttermilk icing topping rich, flavorful red cake'
          meta='$3.50'
        />
        <Card style={{marginLeft: '15px', width: '395px'}}
          href='./detail'
          //href='./DetailPage/Macaroons'
          image='https://res.cloudinary.com/hz3gmuqw6/image/upload/c_fill,h_539,q_60,w_718/g_north_east,l_cozymeal-verified,w_120,x_0,y_40/assorted-macarons-FF0E0D3'
          header='Assorted Macaroons'
          description='Your favorite soft and sweet sandwiches of sugar'
          height='300px'
          meta='$2.00'
        />
        <Card style={{marginLeft: '15px', width: '395px'}}
          href='./detail'
          //href='./DetailPage/ChocolateCake'
          image='https://preppykitchen.com/wp-content/uploads/2019/06/Chocolate-cake-recipe-1200a.jpg'
          header='Chocolate Cake'
          description ='Moist and rich cake with semi-sweet icing, just sweet enough to leave you wanting more'
          meta='$5.00'
        />
        <Card style={{marginLeft: '15px', width: '395px'}}
          href='./detail'
          //href='./DetailPage/StrawberryShortcake'
          image='https://i2.wp.com/grandbaby-cakes.com/wp-content/uploads/2020/06/Strawberry-Shortcake-Cake-5.jpg'
          header='Strawberry Shortcake'
          description='Reminisce your childhood with strawberries, whipped cream, and rich cake'
          meta='$6.00'
        />
      </div>
    </div>
  );
}
