var productArray = [
    {
        productId:10030,   				//ID của sản phẩm
        brand:'mac',    				//Mã thể loại
        img:'images/imgMacbook/10030.png',	//Ảnh sản phẩm (dẫn link)
        name:'MacBook Pro Touch 2019',  //Tên sản phẩm
        price: 172369,					//Giá thành sản phẩm
        
        //Cấu hình chi tiết của sản phẩm
        detail: {
                    screen: 'LED Backlit 13.3", IPS, Retina ',
                    os: 'Mac OS',								
                    camaraFront: 'HD Webcam',					
                    camara: 'No',								
                    cpu: 'Intel Core i5 Coffee Lake, 1.40 GHz', 
                    ram: '8 GB, DDR3L, 2133 MHz',				
                    rom: 'SSD 256GB NVMe PCle',
                    microUSB: '2 x Thunderbolt (USB-C)',
                    battery: 'About 10 hours',
                    size: '14.9 mm, 1.39 kg' 
                  },
    },
    
    {
        productId:10029, 			
        brand:'watch',    
        img:'images/imgAppleWatch/10029.png', 
        name:'Apple Watch series 4', 
        price: 516810,
        
        //Cấu hình chi tiết
        detail: {
                    screen: 'AMOLED 2.2"',
                    os: 'watchOS 6.0',
                    camaraFront: '0.08 MP',
                    camara: '0.08 MP',
                    cpu: 'Apple S4 64 bit',
                    ram: 'No',
                    rom: '16 GB',
                    microUSB: 'Wifi, Bluetooth v5.0, GPS',
                    battery: '340 mAh',
                    size: 'Diameter 44mm, 30.1g'
                  },
    },
    
    {
        productId:10028, 
        brand:'watch',    
        img:'images/imgAppleWatch/10028.png', 
        name:'Apple Watch series 3', 
        price: 245260,
        
        detail: {
                    screen: 'OLED 1.9"',
                    os: 'watchOS 6.0',
                    camaraFront: 'No',
                    camara: 'No',
                    cpu: 'Apple W2',
                    ram: 'No',
                    rom: '8 GB',
                    microUSB: 'Wifi, Bluetooth',
                    battery: '334 mAh',
                    size: 'Diameter 38mm, 26.7g'
                  },
    },
    
    {
        productId:10027, 
        brand:'ipad',    
        img:'images/imgIpad/10027.png', 
        name:'iPad Pro 11 inch Wifi 64GB (2018)', 
        price: 947840,
        
        detail: {
                    screen: 'Liquid Retina, 11"',
                    os: 'iOS 12',
                    camaraFront: '7 MP',
                    camara: '12 MP',
                    cpu: 'Apple A12X Bionic 64-bit',
                    ram: '4 GB',
                    rom: '64 GB',
                    microUSB: 'USB Type-C, Wifi, Bluetooth 5.0, No support 3G, 4G',
                    battery: 'Lithium - Polymer, 30.4 Wh',
                    size: '5.9 mm, 468g'
                  },
    },
    
    {
        productId:10026, 
        brand:'ipad',    
        img:'images/imgIpad/10026.png', 
        name:'iPad Pro', 
        price: 646110,
        
        detail: {
                    screen: 'LED backlit LCD, 10.2"',
                    os: 'iOS 13',
                    camaraFront: '1.2 MP',
                    camara: '8 MP',
                    cpu: 'Apple A10 Fusion, 2.34 GHz',
                    ram: '3 GB',
                    rom: '128 GB',
                    microUSB: 'Lightning, WiFi, Bluetooth, 3G, 4G LTE',
                    battery: 'Lithium - Ion, 8600 mAh',
                    size: '7.5 mm, 493g'
                  },
    },
    
    {
        productId:10025, 
        brand:'iphone',    
        img:'images/imgIphone/10025.png', 
        name:'iPhone XR 128GB', 
        price: 818530,
        
        detail: {
                    screen: 'IPS LCD, 6.1", Liquid Retina',
                    os: 'iOS 12',
                    camaraFront: '7 MP',
                    camara: '12 MP',
                    cpu: 'Apple A12 Bionic 6 nhân',
                    ram: '3 GB',
                    rom: '128 GB',
                    microUSB: 'Lightning, NFC, OTG',
                    battery: 'Li-ion, 2942 mAh',
                    size: '8.3 mm, 194g'
                  },
    },
    
    {
        productId:10024, 
        brand:'iphone',    
        img:'images/imgIphone/10024.png', 
        name:'iPhone XS Max 256GB', 
        price: 146507,
        
        detail: {
                    screen: 'OLED, 6.5", Super Retina',
                    os: 'iOS 12',
                    camaraFront: '7 MP',
                    camara: 'Chính 12 MP & Phụ 12 MP',
                    cpu: 'Apple A12 Bionic 6 nhân',
                    ram: '4 GB',
                    rom: '256 GB',
                    microUSB: 'Lightning, NFC, OTG',
                    battery: 'Li-ion, 3174 mAh',
                    size: '7.7 mm, 208g'
                  },
    },
    
    {
        productId:10023, 
        brand:'mac',    
        img:'images/imgMacbook/10023.png', 
        name:'MacBook Air 2019 128GB', 
        price: 120645,
        
        detail: {
                    screen: 'LED Backlit, IPS, Retina 13"',
                    os: 'Mac OS',
                    camaraFront: 'HD Webcam',
                    camara: 'No',
                    cpu: 'Intel Core i5 Coffee Lake, 1.60 GHz',
                    ram: '8 GB, DDR3, 2133 MHz',
                    rom: 'SSD: 128 GB',
                    microUSB: '2 x Thunderbolt 3 (USB-C)',
                    battery: 'About 10 hours',
                    size: '4.1 mm to 15.6 mm, 1.25 kg'
                  },
    },
    
    
    {
        productId:10022, 
        brand:'mac',    
        img:'images/imgMacbook/10006.png', 
        name:'MacBook Pro Touch 2019 256GB', 
        price: 258575,
        
        detail: {
                    screen: 'LED Backlit, IPS, Retina 15.4"',
                    os: 'Mac OS',
                    camaraFront: 'HD Webcam',
                    camara: 'No',
                    cpu: 'Intel Core i7 Coffee Lake, 2.60 GHz',
                    ram: '16 GB, DDR4 (On board), 2400 MHz',
                    rom: 'SSD: 256 GB',
                    microUSB: '4 x Thunderbolt 3 (USB-C)',
                    battery: 'About 10 hours',
                    size: '15.5 mm, 1.83 kg'
                  },
    },
    
    {
        productId:10021, 
        brand:'iphone',    
        img:'images/imgIphone/10021.png', 
        name:'iPhone 11 128GB', 
        price: 103404,
        
        detail: {
                    screen: 'IPS LCD, 6.1", Liquid Retina',
                    os: 'iOS 13',
                    camaraFront: '12 MP',
                    camara: 'Chính 12 MP & Phụ 12 MP',
                    cpu: 'Apple A13 Bionic 6 nhân',
                    ram: '4 GB',
                    rom: '128 GB',
                    microUSB: 'Lightning, NFC, OTG',
                    battery: 'Li-ion, 3110 mAh',
                    size: '8.3 mm, 194g'
                  },
    },
    
    {
        productId:10020, 
        brand:'iphone',    
        img:'images/imgIphone/10020.png', 
        name:'iPhone 11 Pro Max 512GB', 
        price: 189610,
        
        detail: {
                    screen: 'OLED, 6.5", Super Retina XDR',
                    os: 'iOS 13',
                    camaraFront: '12 MP',
                    camara: '3 camera 12 MP',
                    cpu: 'Apple A13 Bionic 6 nhân',
                    ram: '4 GB',
                    rom: '512 GB',
                    microUSB: 'Lightning, NFC, OTG',
                    battery: 'Li-ion, 3969 mAh',
                    size: '8.1 mm, 226g'
                  },
    },
    
    {
        productId:10019, 
        brand:'ipad',    
        img:'images/imgIpad/10019.png', 
        name:'iPad 10.2 inch Wifi Cellular 128GB (2019)',
        price: 646110,
        
        detail: {
                    screen: 'LED backlit LCD, 10.2"',
                    os: 'iOS 13',
                    camaraFront: '1.2 MP',
                    camara: '8 MP',
                    cpu: 'Apple A10 Fusion, 2.34 GHz',
                    ram: '3 GB',
                    rom: '128 GB',
                    microUSB: 'WiFi, Bluetooth, 3G, 4G LTE',
                    battery: 'Lithium - Ion, 8600 mAh',
                    size: '7.5 mm, 493g'
                  },
    },
    
    {
        productId:10018, 
        brand:'ipad',    
        img:'images/imgIpad/10018.png', 
        name:'iPad Mini 7.9 inch Wifi 64GB (2019)', 
        price: 473700,
        
        detail: {
                    screen: 'LED backlit LCD, 7.9"',
                    os: 'iOS 12',
                    camaraFront: '7 MP',
                    camara: '8 MP',
                    cpu: 'Apple A12 Bionic 6 nhân, 2 nhân 2.5 GHz Vortex & 4 nhân 1.6 GHz Tempest',
                    ram: '3 GB',
                    rom: '64 GB',
                    microUSB: 'Wifi, Bluetooth, No support 3G, 4G',
                    battery: 'Lithium - Polymer, 5124 mAh',
                    size: '6.1 mm, 300g'
                  },
    },
    
    {
        productId:10017, 
        brand:'iphone',    
        img:'images/imgIphone/10017.png', 
        name:'iPhone 8 Plus 64GB', 
        price: 689220,
        
        detail: {
                    screen: 'LED-backlit IPS LCD, 5.5", Retina HD',
                    os: 'iOS 12',
                    camaraFront: '7 MP',
                    camara: 'Chính 12 MP & Phụ 12 MP',
                    cpu: 'Apple A11 Bionic 6 nhân',
                    ram: '3 GB',
                    rom: '64 GB',
                    microUSB: 'Lightning, NFC, OTG',
                    battery: 'Li-ion, 2691 mAh',
                    size: '7.5 mm, 205g'
                  },
    },
    
    {
        productId:10016, 
        brand:'iphone',    
        img:'images/imgIphone/10016.png', 
        name:'iPhone 6s Plus 32GB', 
        price: 387500,
        
        detail: {
                    screen: 'LED-backlit IPS LCD, 5.5", Retina HD',
                    os: 'iOS 12',
                    camaraFront: '5 MP',
                    camara: '12 MP',
                    cpu: 'Apple A9 2 nhân 64-bit',
                    ram: '2 GB',
                    rom: '32 GB',
                    microUSB: 'Lightning, NFC, OTG',
                    battery: 'Li-ion, 2750 mAh',
                    size: '7.3 mm, 192g'
                  },
    },
    
    {
        productId:10015, 
        brand:'mac',    
        img:'images/imgMacbook/10015.png', 
        name:'MacBook Air 2017 128GB', 
        price: 926280,
        
        detail: {
                    screen: '13.3 inch, WXGA+(1440 x 900)',
                    os: 'Mac OS',
                    camaraFront: 'HD Webcam',
                    camara: 'No',
                    cpu: 'Intel Core i5 Broadwell, 1.80 GHz',
                    ram: '8 GB, DDR3L(On board), 1600 MHz',
                    rom: 'SSD: 128 GB',
                    microUSB: 'MagSafe 2, 2 x USB 3.0, Thunderbolt 2',
                    battery: 'About 12 hours',
                    size: '17 mm, 1.35 kg'
                  },
    },
    
    {
        productId:10014, 
        brand:'iphone',    
        img:'images/imgIphone/10014.png', 
        name:'iPhone 7 32GB', 
        price: 430600,
        
        detail: {
                    screen: 'LED-backlit IPS LCD, 4.7", Retina HD',
                    os: 'iOS 12',
                    camaraFront: '7 MP',
                    camara: '12 MP',
                    cpu: 'Apple A10 Fusion 4 nhân 64-bit',
                    ram: '2 GB',
                    rom: '32 GB',
                    microUSB: 'Lightning, Air Play, NFC, OTG, HDMI',
                    battery: 'Li-ion, 1960 mAh',
                    size: '7.1 mm, 138g'
                  },
    },
    
    {
        productId:10013, 
        brand:'watch',    
        img:'images/imgAppleWatch/10013.png', 
        name:'Apple Watch Series 5', 
        price: 531890,
        
        detail: {
                    screen: 'OLED 1.78"',
                    os: 'watchOS 6.0',
                    camaraFront: 'No',
                    camara: 'No',
                    cpu: 'Apple S5 64 bit',
                    ram: 'No',
                    rom: '32 GB',
                    microUSB: 'Wifi, Bluetooth v5.0, GPS',
                    battery: 'About 18 hours',
                    size: 'Diameter 44 mm, 36.7g'
                },
    },
    
    {
        productId:10012, 
        brand:'watch',    
        img:'images/imgAppleWatch/10012.png', 
        name:'Apple Watch Series 5 Black', 
        price: 490940,
        
        detail: {
                    screen: 'OLED 1.57"',
                    os: 'watchOS 6.0',
                    camaraFront: 'No',
                    camara: 'No',
                    cpu: 'Apple S5 64 bit',
                    ram: 'No',
                    rom: '32 GB',
                    microUSB: 'Wifi, Bluetooth v5.0, GPS',
                    battery: 'About 18 hours',
                    size: 'Diameter 4 mm, 30g'
                  },
    },
    
    {
        productId:10011, 
        brand:'ipad',    
        img:'images/imgIpad/10011.png', 
        name:'iPad Wifi 32GB (2019)', 
        price: 387500,
        
        detail: {
                    screen: 'LED backlit LCD, 10.2"',
                    os: 'iOS 13',
                    camaraFront: '1.2 MP',
                    camara: '8 MP',
                    cpu: 'Apple A10 Fusion, 2.34 GHz',
                    ram: '3 GB',
                    rom: '32 GB',
                    microUSB: 'Wifi, Bluetooth, GPS, No support 3G, 4G',
                    battery: 'Li-ion, 8600 mAh',
                    size: '7.5 mm, 483g'
                  },
    },
    
    {
        productId:10010, 
        brand:'ipad',    
        img:'images/imgIpad/10010.png', 
        name:'iPad Wifi 32GB (2018)', 
        price: 387500,
        
        detail: {
                    screen: 'LED backlit LCD, 9.7"',
                    os: 'iOS 12',
                    camaraFront: '1.2 MP',
                    camara: '8 MP',
                    cpu: 'Apple A10 Fusion, 2.34 GHz',
                    ram: '2 GB',
                    rom: '32 GB',
                    microUSB: 'Wifi, Bluetooth, GPS, No support 3G, 4G',
                    battery: 'Li-ion, 8600 mAh',
                    size: '7.5 mm, 469g'
                  },
    },
    
    {
        productId:10009, 
        brand:'iphone',    
        img:'images/imgIphone/10009.png',
        name:'iPhone X 64GB', 
        price: 861630,
        
        detail: {
                    screen: 'OLED, 5.8", Super Retina',
                    os: 'iOS 12',
                    camaraFront: '7 MP',
                    camara: 'Chính 12 MP & Phụ 12 MP',
                    cpu: 'Apple A11 Bionic 6 nhân',
                    ram: '3 GB',
                    rom: '64 GB',
                    microUSB: 'Lightning, NFC, OTG',
                    battery: 'Li-ion, 2716 mAh',
                    size: '7.7 mm, 174g'
                  },
    },
    
    {
        productId:10008, 
        brand:'iphone',    
        img:'images/imgIphone/10008.png', 
        name:'iPhone 7S Plus 32GB', 
        price: 559910,
        
        detail: {
                    screen: 'LED-backlit IPS LCD, 5.5", Retina HD',
                    os: 'iOS 12',
                    camaraFront: '7 MP',
                    camara: 'Chính 12 MP & Phụ 12 MP',
                    cpu: 'Apple A10 Fusion 4 nhân 64-bit',
                    ram: '3 GB',
                    rom: '32 GB',
                    microUSB: 'Lightning, Air Play, NFC, OTG, HDMI',
                    battery: 'Li-ion, 2900 mAh',
                    size: '7.3 mm, 188g'
                  },
    },
    
    {
        productId:10007, 
        brand:'mac',    
        img:'images/imgMacbook/10007.png', 
        name:'iMac 5K Retina', 
        price: 206852,
        
        detail: {
                    screen: 'Retina 27 inch, 5K (5120 x 2880)',
                    os: 'Mac OS',
                    camaraFront: 'HD Webcam',
                    camara: 'No',
                    cpu: 'Intel Core i5 Coffee Lake, 3.00 GHz',
                    ram: '8 GB, DDR4 (On board), 2666 MHz',
                    rom: '1TB Fusion Drive',
                    microUSB: '3 x USB 3.0, LAN (RJ45), 2 x Thunderbolt 3 (USB-C), USB 2.0',
                    battery: 'Updating',
                    size: '203 mm, 9.42 kg'
                  },
    },
    
    {
        productId:10006, 
        brand:'mac',    
        img:'images/imgMacbook/10006.png', 
        name:'Macbook Pro Touch 2019 512GB', 
        price: 301678,
        
        detail: {
                    screen: '15.4 inch, Retina (2880 x 1800)',
                    os: 'Mac OS',
                    camaraFront: 'HD Webcam',
                    camara: 'No',
                    cpu: 'Intel Core i9 Coffee Lake, 2.30 GHz',
                    ram: '16 GB, DDR4 (On board), 2400 MHz',
                    rom: 'SSD 512GB',
                    microUSB: '4 x Thunderbolt 3 (USB-C)',
                    battery: 'About 10 hours',
                    size: '15.5 mm, 1.83 kg'
                  },
    },
    
    {
        productId:10005, 
        brand:'watch',    
        img:'images/imgAppleWatch/10005.png', 
        name:'Apple Watch Series 4', 
        price: 516810,
        
        detail: {
                    screen: 'AMOLED 2.2"',
                    os: 'watchOS 6.0',
                    camaraFront: '0.08 MP',
                    camara: '0.08 MP',
                    cpu: 'Apple S4 64 bit',
                    ram: 'No',
                    rom: '16 GB',
                    microUSB: 'Wifi, Bluetooth v5.0, GPS',
                    battery: '340 mAh',
                    size: 'Diameter 44 mm, 30.1g'
                  },
    },
    
    {
        productId:10004, 
        brand:'watch',    
        img:'images/imgAppleWatch/10004.png', 
        name:'Apple Watch Series 4', 
        price: 473700,
        
        detail: {
                    screen: 'AMOLED 2.0"',
                    os: 'watchOS 5.0',
                    camaraFront: 'No',
                    camara: 'No',
                    cpu: 'Apple S4 64 bit',
                    ram: 'No',
                    rom: '16 GB',
                    microUSB: 'Bluetooth v5.0, Wifi, GPS',
                    battery: '340 mAh'
                  },
    },
    
    {
        productId:10003, 
        brand:'ipad',    
        img:'images/imgIpad/10003.png', 
        name:'iPad Wifi Cellular 32GB (2019)', 
        price: 559910,
        
        detail: {
                    screen: 'LED backlit LCD, 10.2"',
                    os: 'iOS 13',
                    camaraFront: '1.2 MP',
                    camara: '8 MP',
                    cpu: 'Apple A10 Fusion, 2.34 GHz',
                    ram: '3 GB',
                    rom: '32 GB',
                    microUSB: 'WiFi, Bluetooth, 3G, 4G LTE',
                    battery: 'Li-ion, 8600 mAh',
                    size: '7.5 mm, 493g'
                  },
    },
    
    {
        productId:10002, 
        brand:'ipad',    
        img:'images/imgIpad/10002.png', 
        name:'iPad Mini Wifi Cellular 64GB (2019)', 
        price: 646110,
        
        detail: {
                    screen: 'LED backlit LCD, 7.9"',
                    os: 'iOS 12',
                    camaraFront: '7 MP',
                    camara: '8 MP',
                    cpu: 'Apple A12 Bionic 6 nhân, 2 nhân 2.5 GHz Vortex & 4 nhân 1.6 GHz Tempest',
                    ram: '3 GB',
                    rom: '64 GB',
                    microUSB: 'Wifi, Bluetooth, Support 4G',
                    battery: 'Lithium - Polymer, 5124 mAh',
                    size: '6.1 mm, 308g'
                  },
    },
    
    {
        productId:10001, 
        brand:'iphone',    
        img:'images/imgIphone/10001.png', 
        name:'iPhone Xs Max 256GB', 
        price: 146507,
        
        detail: {
                    screen: 'OLED, 6.5", Super Retina',
                    os: 'iOS 12',
                    camaraFront: '7 MP',
                    camara: 'Chính 12 MP & Phụ 12 MP',
                    cpu: 'Apple A12 Bionic 6 nhân',
                    ram: '4 GB',
                    rom: '256 GB',
                    microUSB: 'Lightning, NFC, OTG',
                    battery: 'Li-ion, 3174 mAh',
                    size: '7.7 mm, 208g'
                  },
    },
    
    {
        productId:10000, 
        brand:'iphone',    
        img:'images/imgIphone/10000.png', 
        name:'iPhone 11 Pro Max 512GB', 
        price: 189610,
        
        //Cấu hình chi tiết sản phẩm
        detail: {
                    screen: 'OLED, 6.5", Super Retina XDR',
                    os: 'iOS 13',
                    camaraFront: '12 MP',
                    camara: '3 camera 12 MP',
                    cpu: 'Apple A13 Bionic 6 nhân',
                    ram: '4 GB',
                    rom: '512 GB',
                    microUSB: 'Lightning, NFC, OTG',
                    battery: 'Li-ion, 3969 mAh',
                    size: '8.1 mm, 226g'
                  },
    },
    {
      productId:9999, 
      brand:'iphone',    
      img:'images/imgIphone/10000.png', 
      name:'iPhone 11 Pro Max 512GB', 
      price: 189610,
      
      //Cấu hình chi tiết sản phẩm
      detail: {
                  screen: 'OLED, 6.5", Super Retina XDR',
                  os: 'iOS 13',
                  camaraFront: '12 MP',
                  camara: '3 camera 12 MP',
                  cpu: 'Apple A13 Bionic 6 nhân',
                  ram: '4 GB',
                  rom: '512 GB',
                  microUSB: 'Lightning, NFC, OTG',
                  battery: 'Li-ion, 3969 mAh',
                  size: '8.1 mm, 226g'
                },
  },
  {
    productId:9999, 
    brand:'iphone',    
    img:'images/imgIphone/10000.png', 
    name:'iPhone 11 Pro Max 512GB', 
    price: 189610,
    
    //Cấu hình chi tiết sản phẩm
    detail: {
                screen: 'OLED, 6.5", Super Retina XDR',
                os: 'iOS 13',
                camaraFront: '12 MP',
                camara: '3 camera 12 MP',
                cpu: 'Apple A13 Bionic 6 nhân',
                ram: '4 GB',
                rom: '512 GB',
                microUSB: 'Lightning, NFC, OTG',
                battery: 'Li-ion, 3969 mAh',
                size: '8.1 mm, 226g'
              },
},
{
  productId:9999, 
  brand:'iphone',    
  img:'images/imgIphone/10000.png', 
  name:'iPhone 11 Pro Max 512GB', 
  price: 189610,
  
  //Cấu hình chi tiết sản phẩm
  detail: {
              screen: 'OLED, 6.5", Super Retina XDR',
              os: 'iOS 13',
              camaraFront: '12 MP',
              camara: '3 camera 12 MP',
              cpu: 'Apple A13 Bionic 6 nhân',
              ram: '4 GB',
              rom: '512 GB',
              microUSB: 'Lightning, NFC, OTG',
              battery: 'Li-ion, 3969 mAh',
              size: '8.1 mm, 226g'
            },
},
{
  productId:9999, 
  brand:'iphone',    
  img:'images/imgIphone/10000.png', 
  name:'iPhone 11 Pro Max 512GB', 
  price: 189610,
  
  //Cấu hình chi tiết sản phẩm
  detail: {
              screen: 'OLED, 6.5", Super Retina XDR',
              os: 'iOS 13',
              camaraFront: '12 MP',
              camara: '3 camera 12 MP',
              cpu: 'Apple A13 Bionic 6 nhân',
              ram: '4 GB',
              rom: '512 GB',
              microUSB: 'Lightning, NFC, OTG',
              battery: 'Li-ion, 3969 mAh',
              size: '8.1 mm, 226g'
            },
},
    
];

function closeDetail() {
  const styleDisplayDetail = "none";
  document.getElementById("background-container").style.display = styleDisplayDetail;
}



function formatPrice(num) {
  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') + ' VNĐ';
}


function showProductDetail(productId) {
  var s = "";
  var styleDisplay = "" ;
  for(i = 0; i < productArray.length; ++i) {
    if(productId === productArray[i].productId) {
      s += `<button onClick="closeDetail();" type="button" class="button-close">+</button>
            <div class="img-product">
                <img src="./${productArray[i].img}" alt="${productArray[i].name}">
            </div>

            <div class="info-product">
              <div class="div-info">
                  <h2 class="name-product">Name: ${productArray[i].name}</h2>
                  <h4 class="price-product">Price: ${formatPrice(productArray[i].price)}</h4>
                  <h4 class="title-product">PRODUCT CONFIGURATION</h4>
                  <ul>
                    <li><p>Screen: ${productArray[i].detail.screen}</p></li><br>
                    <li><p>Operating System: ${productArray[i].detail.system}</p></li><br>
                    <li><p>Front Camera: ${productArray[i].detail.camaraFront}</p></li><br>
                    <li><p>Rear Camera: ${productArray[i].detail.camara}</p></li><br>
                    <li><p>CPU: ${productArray[i].detail.cpu}</p></li><br>
                    <li><p>RAM: ${productArray[i].detail.ram}</p></li><br>
                    <li><p>ROM: ${productArray[i].detail.rom}</p></li><br>
                    <li><p>MicroUSB: ${productArray[i].detail.microUSB}</p></li><br>
                    <li><p>Battery: ${productArray[i].detail.battery}</p></li><br>
                    <li><p>Size: ${productArray[i].detail.size}</p></li><br>
                  </ul>
              </div>

              <div class="div-submit">
                <button type="button" class="btn-submit">ADD TO CART</button>
              </div>
            </div>`;

      styleDisplay += "inline";
    }
  }
 
  document.getElementById("div-product").style.animation = "anim-detail 0.5s";
  document.getElementById("background-container").style.display = 'block';
  document.getElementById("div-product").innerHTML = s;
}
function getData() {
  var s = "";
  for(i = 0; i < productArray.length; ++i) { 
    s += `
    <div class="col l-2-4 m-4 c-6">
    <a class="home-product-item" href="#">
        <div class="home-product-item__img" style="background-image: url(./${productArray[i].img});"></div>
        <h4 class="home-product-item__name">${productArray[i].name}</h4>
        <div class="home-product-item__price">
            <span class="home-product-item__price-old">1.200.000</span>
            <span class="home-product-item__price-current">${formatPrice(productArray[i].price)}</span>
        </div>
        <div class="home-product-item__action">
            <span class="home-product-item__like home-product-item__like--liked">
                <i class="home-product-item__like-icon-empty far fa-heart"></i>
                <i class="home-product-item__like-icon-fill fas fa-heart"></i>
            </span>
            <div class="home-product-item__rating">
                <i class="home-product-item__star--gold fas fa-star"></i>
                <i class="home-product-item__star--gold fas fa-star"></i>
                <i class="home-product-item__star--gold fas fa-star"></i>
                <i class="home-product-item__star--gold fas fa-star"></i>
                <i class="home-product-item__star--gold fas fa-star"></i>
            </div>
            <span class="home-product-item__sold">Đã bán</span>
        </div>
        <div class="home-product-item__origin">
            <span class="home-product-item__brand">${productArray[i].brand}</span>
            <span class="home-product-item__origin-name">Hàn Quốc</span>
        </div>
        <div class="home-product-item__favorite">
            <i class="fas fa-check"></i>
            <span>Yêu thích</span>
        </div>
        <div class="home-product-item__sale-off">
            <span class="home-product-item__sale-off-percent">10%</span>
            <span class="home-product-item__sale-off-label">Giảm</span>
        </div>
        <button onClick="showProductDetail(${productArray[i].productId});" id="btn-click-show" type="button">Chi Tiết</button>
      </div>
    </a>
    
</div>

    `;
  }
  document.getElementById("product").innerHTML = s;
  
}
getData();
