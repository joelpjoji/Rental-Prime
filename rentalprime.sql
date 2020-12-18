-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 18, 2020 at 03:26 AM
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.4.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `rentalprime`
--

-- --------------------------------------------------------

--
-- Table structure for table `cart`
--

CREATE TABLE `cart` (
  `id` int(11) NOT NULL,
  `username` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `itemID` int(11) NOT NULL,
  `itemName` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `pic` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `price` float NOT NULL,
  `deposit` float NOT NULL,
  `count` int(11) NOT NULL,
  `days` int(11) NOT NULL,
  `dateStart` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `dateEnd` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `cart`
--

INSERT INTO `cart` (`id`, `username`, `itemID`, `itemName`, `pic`, `price`, `deposit`, `count`, `days`, `dateStart`, `dateEnd`) VALUES
(60, 'Jake', 26, 'SAE/Metric Long Arm Hex Key Set (26-Piece)', '13.jpg', 400, 101, 1, 8, 'Fri Dec 18 2020 00:00:00 GMT+0530 (India Standard Time)', 'Fri Dec 25 2020 00:00:00 GMT+0530 (India Standard Time)'),
(61, 'Jake', 23, '18-Volt X2 LXT 5.0Ah Lithium-Ion (36-Volt) Brushless Cordless Rear Handle 7-1/4 in. Circular Saw Kit', '10.jpg', 5000, 1000, 1, 3, 'Fri Dec 18 2020 00:00:00 GMT+0530 (India Standard Time)', 'Sun Dec 20 2020 00:00:00 GMT+0530 (India Standard Time)'),
(62, 'Jake', 24, 'ATOMIC 20-Volt MAX Cordless Brushless 4-1/2 in. Circular Saw (Tool-Only)', '11.jpg', 2520, 800, 1, 5, 'Fri Dec 18 2020 00:00:00 GMT+0530 (India Standard Time)', 'Tue Dec 22 2020 00:00:00 GMT+0530 (India Standard Time)'),
(63, 'Jake', 8, '4.5 Gal. Portable Electric Air Compressor', '8.jpg', 4300, 1200, 1, 8, 'Fri Dec 18 2020 00:00:00 GMT+0530 (India Standard Time)', 'Fri Dec 25 2020 00:00:00 GMT+0530 (India Standard Time)');

-- --------------------------------------------------------

--
-- Table structure for table `comments`
--

CREATE TABLE `comments` (
  `id` int(11) NOT NULL,
  `productID` int(11) NOT NULL,
  `commentID` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `comment` mediumtext COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `comments`
--

INSERT INTO `comments` (`id`, `productID`, `commentID`, `comment`) VALUES
(19, 24, 'c1', '{\"id\":\"c1\",\"parent\":\"\",\"created\":\"2020-12-05T09:46:57.063Z\",\"modified\":\"2020-12-05T09:47:02.455Z\",\"content\":\"Great!!\",\"fullname\":\"Jake\",\"profile_picture_url\":\"https://viima-app.s3.amazonaws.com/media/public/defaults/user-icon.png\",\"created_by_current_user\":\"true\",\"upvote_count\":\"0\",\"user_has_upvoted\":\"false\"}'),
(20, 29, 'c1', '{\"id\":\"c1\",\"parent\":\"\",\"created\":\"2020-12-05T10:11:56.472Z\",\"modified\":\"2020-12-05T10:12:03.492Z\",\"content\":\"Awesome!\",\"fullname\":\"Jake\",\"profile_picture_url\":\"https://viima-app.s3.amazonaws.com/media/public/defaults/user-icon.png\",\"created_by_current_user\":\"true\",\"upvote_count\":\"0\",\"user_has_upvoted\":\"false\"}');

-- --------------------------------------------------------

--
-- Table structure for table `items`
--

CREATE TABLE `items` (
  `id` int(11) NOT NULL,
  `itemName` varchar(1000) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` mediumtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `pic` varchar(1000) COLLATE utf8mb4_unicode_ci NOT NULL,
  `company` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `price` float NOT NULL,
  `stock` int(11) NOT NULL,
  `lightDesc` varchar(1000) COLLATE utf8mb4_unicode_ci NOT NULL,
  `category` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `subCategory` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `deposit` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `items`
--

INSERT INTO `items` (`id`, `itemName`, `description`, `pic`, `company`, `price`, `stock`, `lightDesc`, `category`, `subCategory`, `deposit`) VALUES
(1, '20-Volt MAX XR Cordless Brushless 1/2 in. Drill/Driver with (1) 20-Volt 5.0Ah Battery, Charger and Tool Bag', 'The DEWALT DCD791P1 Drill Driver is ideal for most drilling and fastening applications on the jobsite or home. This drill features a DEWALT Brushless Motor delivers up to 57% more run time over brushed. Includes a tool bag, battery pack and a charger.\r\nCalifornia residents\r\nXR lithium-ion batteries with fuel gauge provide 33% more capacity over standard packs\r\nCompact (6.9 in. front to back), lightweight (3.4 lbs.) design fits into tight areas\r\nHigh speed transmission with 2-speed settings (0 RPM to 550 RPM/0 RPM to 2,000 RPM) delivers up to 30% faster application speeds\r\nErgonomic comfort grip handle provides ideal balance and tool control\r\nMetal 1/2 in. ratcheting chuck for superior bit gripping strength\r\n3-mode LED provides lighting in dark or confined spaces up to 20X brighter than previous model\r\nLED spotlight mode features 20-minute shutoff function allowing for extended work time in dark or confined spaces', '1.jpg', 'DEWALT', 1000, 12, 'Compact, lightweight design allows easy handling and portability\r\n(2) speed transmission delivers (0-550 / 0-2000 RPM\r\nCompatible w/ All (200+) DEWALT 20-Volt MAX batteries & chargers', 'Power Tools', 'Drills', 3000),
(2, '61 in. 11-Drawer/1-Door 22 in. D Mobile Workbench with Sliding Pegboard Back Wall in Red/Black', 'The Milwaukee 37.8 in. x 61 in. x 23.9 in. Steel 11-Drawer Mobile Workbench in Red is a practical tool storage system. With a portable design, this professional mobile workbench can be moved around for ultimate customization. Designed to add increased durability, it has a 20-Gauge steel construction, ideal for the garage or workshop. This tool storage system has a powder coating to increase resistance to corrosion, weather and staining. It has 2 shelves and a tray for complete customization of your tool storage system. It has 11 drawers - 4 small, 5 medium and 2 large and features a total holding capacity of 24,199 cu. in., which offers plenty of storage for all your tools. Perfect for effortless closing and opening, this high-quality mobile workbench is designed with ball bearing slides that can hold up to 100 lbs. to accommodate heavy loads. Excellent for storing expensive tools, it is designed with a 3-barrel key locking system to offer you peace of mind. This Milwaukee high-quality mobile workbench has 5 in. x 2 in. casters and is built with a push handle, providing an easy way to move it around. Always find what you need with the Milwaukee 37.8 in. x 61 in. x 23.9 in. Steel 11-Drawer Mobile Workbench in Red.\r\nBall bearing slides with a weight capacity of 100 lbs.\r\nLined drawers protect against stains and spills\r\nBuilt with a 20-Gauge steel construction for increased durability\r\nAdjustable shelves for accommodating larger items\r\nWood work surface located on the top of the unit offers extra space for projects\r\nPegboard included for better tool organization options\r\nTotal of 24,199 cu. in. of storage space provided\r\nWeight capacity of 2,200 lbs.\r\nDrawer slide capacity of 100 lbs.\r\nPush handle for comfortably moving the unit\r\n5 in. x 2 in. casters for ease of movement around the garage\r\nMade with a 3-barrel key locking system for securing your equipment\r\nAssembly required\r\nReturnable within 90 days\r\nDisclaimer: tools and accessories shown in photos are not included with purchase\r\nInner Drawer dimensions: 2 top drawers - 19.88 in. D x 26.69 in. W x 3.85 in. H, Cabinet area - 21.05 in. D x 13.70 in. W x 20.35 in. H, 1- Center drawer - 19.88 in. D x 25.79 in. W x 2.78 in. H, 1 center drawer- 19.88 in. D x 25.79 in. W x 3.85 in. H, 1 center drawer - 19.88 in. D x 25.79 in. W x 9.16 in. H, 1 right drawer- 19.88 in. D x 12.60 in. W x 2.25 in. H, 1 right drawer- 19.88 in. D x 12.60 in. W x 9.16 in.\r\nCarton dimensions (approximate): 64.5 in. W x 27.5 in. D x 40.8 in. H and weighs 455.7 lbs.\r\nAssembled dimensions with 3.25 in. W handle (approximate): 64.25 in. W x 22 in. D x 37.8 in. H and weighs around 405 lbs.', '2.jpg', 'Milwaukee', 2500, 32, 'Angle Iron Reinforced Frame\r\nIndustrial Casters\r\n100lbs Soft-Close Drawer Slides', 'Tool Storage', 'Mobile Workbenches', 600),
(3, 'SAE Quad Drive Ratcheting Wrench Set (2-Piece)', 'The Husky 2-Piece 4-in-1 Reversible Ratcheting Wrench features a design that offers you 4 wrench sizes from just 1 wrench. This reduces down the number of wrenches you need to carry in your tool box and saves space. The wrench is made from alloy steel for durability and a surface that resists rust.\r\nSet includes two 4-sided wrenches covering sizes 5/16 in. x 3/8 in. and 7/16 in. x 1/2 in., 9/16 in. x 5/8 in. and 11/16 in. x 3/4 in.\r\nEach wrench features 4 sizes to help reduce the number of tools you need to get the job done\r\nAlloy steel construction provides durability and long lasting performance\r\n0 offset box end allows for maximum clearance in tight spaces\r\nWrenches feature off corner loading to help prevent the rounding of fasteners\r\nBox - end provides additional leverage and less likelihood of slipping when used on hard to remove fasteners\r\nReversing lever allows quick directional changes without removing the wrench from the fastener\r\nChamfered lead-ins help to provide fast and easy placement onto fasteners\r\n12-point box-end\r\nLarge hard stamped size markings allow for easy identification\r\nFull polished chrome finish easily wipes clean of oil and dirt\r\nMeets or exceeds ANSI standards\r\nBacked by a lifetime warranty, if your Husky product ever fails, bring it back and we will replace it for free Click here for details.', '3.jpg', 'Husky', 300, 50, 'Quad head design gives user 4 sizes per wrench\r\n0° offset box-end for tight spaces\r\nLifetime Warranty with no questions, no receipt required.', 'Hand Tools', 'Wrenches', 100),
(4, '180 Amp Weld-Pak 180 HD MIG Wire Feed Welder with Magnum 100L Gun, Gas Regulator, MIG and Flux-Cored Wire, 230V', 'Get it done with the Weld-Pak 180HD for farm, light fabrication, auto or home projects. If you have access to industrial 208/230-Volt input power, you can weld on thicker material - up to 3/16 in. with MIG welding and 1/2 in. with gas-less flux-cored welding. Simple 2 knob tapped control makes it easy to tackle thin steel, stainless or aluminum sheet metal with MIG or thicker steel with flux-cored welding. Compare the precise drive, rugged construction and full list of standard accessories. Lincoln Weld-Pak is an excellent choice.\r\nWide 30-180 Amp welding output range - use 0.025 in. wire on the thinnest sheet metal up to 0.045 in. flux-cored wire on thick plate\r\nMIG weld 24-Gauge up to 3/16 in. sheet metal in a single pass; weld up to 1/2 in. steel using self-shielded Lincoln inner shield wire (FCAW-S)\r\nSpool gun ready add the optional magnum 100SG spool gun for reliable operation at the high wire feed speeds aluminum welding demands; no expensive outboard modules required\r\n3-year Lincoln warranty/90 days on gun and cable assembly', '4.jpg', 'Lincoln Electric', 1700, 54, '230-Volt input, wide 30-180 Amp welding output range\r\nWelds up to 1/2 in. mild steel using flux-cored wire without gas\r\nMIG weld up to 3/16 in. in a single pass with gas', 'Welding & Soldering Tools', 'Welding Machine', 700),
(5, '4 Gal. 5.0-Peak HP Portable Wet/Dry Shop Vacuum with Filter, Hose and Accessories', 'This 4 Gal. wet/dry vac has a 5.0-peak horsepower motor that offers the powerful performance necessary to tackle even the messiest projects. The 20 ft. cord provides an extensive reach and the 18 lbs. design is light-weight and easily portable. The wet/dry vacuum\'s large rear wheels and casters provide great mobility over carpeted floors, thresholds and rough floors at jobsites. This is an ideal vacuum for car cleaning.\r\n5.0 peak horsepower motor offers powerful performance\r\n20 ft. cord provides an extensive reach\r\n18.32 lbs. design is light-weight and very portable\r\nLarge rear wheels and casters provide great mobility over carpeted floors, thresholds and rough floors at jobsites\r\nAccessory storage caddy keeps accessories organized and close by for easy access\r\n7 ft. tug-a-long hose offers clog-free performance\r\nPeak horsepower represents a level at or below the maximum horsepower output of an electric motor tested in a laboratory using a dynamometer\r\nGallons indicated reflect drum volume, not necessarily collection capacity, actual capacity dependent upon type of debris collected, condition of filter and other factors', '5.jpg', 'RIDGID', 900, 35, 'Portable car vacuum with the power of a vac 3X its size\r\nBuilt-in accessory caddy stores all included accessories\r\nFeatures the RIDGID lifetime warranty', 'Shop Vacuums', 'Small Capacity', 500),
(6, '11 Amp 2 HP 1/2 in. Corded Fixed Base Router', 'The RIDGID 2 HP Fixed Base Router is durably built from precision-milled magnesium and features an 11 Amp motor that delivers enough power for dense materials. Easy-access, soft, hex-grip handles give you comfort and minimize vibration. Soft start ensures controlled, smooth starts. Dual LED lights on the router help illuminate your work area for improved visibility.\r\nCalifornia residents\r\nIncludes motor, fixed base router, 1/2 in. collet, 1/4 in. collet adaptor, collet wrench, router table attachment screws, centering tool and pin, T-handle wrench, vacuum attachment, 1-1/4 in. vacuum adaptor for 2-1/2 in. hose and contractor\'s bag\r\n11 Amp, 2-peak horsepower motor provides the power needed for dense material\r\nElectronic variable speed with feedback helps maintain speed under load\r\nMicro-depth adjustment for precise depth control\r\nSoft start for gradual start-up and extended life of motor\r\nSpindle lock for easy bit changes\r\n3-point over mold design prevents accidental marring of surfaces\r\nBrushes are accessible and can be serviced quickly for minimum downtime\r\nNo-mar flat top: router sits upside down for easier bit changes\r\n3-year warranty and lifetime service agreement with tool registration', '6.jpg', 'RIDGID', 2000, 15, 'Powerful 11 Amp, 2 peak horsepower motor\r\nSpindle lock for quick and easy bit changes\r\nBacked by the Industry\'s only Lifetime Service Agreement', 'Woodworking Tools', 'Router', 1000),
(7, '18 in. x 18 in. x 30 in. Diamond Plate Tread Aluminum Underbody Truck Tool Box', 'Protect and secure your equipment for the long haul with an underbed truck tool box that offers convenient, easy access on the job site. The Diamond Tread Aluminum Underbody Truck Tool Box from Buyers Products is built to last with durable diamond tread aluminum and, on boxes 36 in. and wider, a structural door backbone. A reinforced, recessed drop door and a locking, die cast, compression latch system helps guard your tools from weather and theft. Units are built to perform for long life with aircraft grade cable lanyards, aluminum continuous hinges, and a watertight gasket system.\r\nBuilt tough with durable, corrosion-resistant, 0.100 in. thick diamond tread aluminum for great weather resistance\r\nBox contents are secured behind a recessed drop door with continuous hidden hinge\r\nProtect against weather and theft with the locking, die cast, compression latch system\r\nCan be mounted on either a flat surface or underbody\r\nBuilt for long life with aircraft-grade cables and a replaceable gasket sealing system', '7.jpg', 'Buyers Products Company', 3600, 18, 'Built tough with durable, corrosion-resistant, 0.100 in. thick diamond tread aluminum for great weather resistance\r\nBox contents are secured behind a recessed drop door with continuous hidden hinge', 'Automotive', 'Truck Boxes', 950),
(8, '4.5 Gal. Portable Electric Air Compressor', 'The DEWALT 4.5 Gal. Portable Electric Air Compressor has pneumatic wheels for easy transport around a job site. The compressor can be used to support roofing and framing nailers (not included). When storing, the air compressor can be moved to a vertical orientation to save space. Its steel construction adds increased durability. With a low operational noise level, the air compressor delivers a quiet work environment.\r\n1.6 HP electric engine gets the job done\r\nHigh-pressure motor with consistent draw requirements can be run with a 12-Gauge or higher extension cord that is under 50 ft.\r\n225 PSI maximum pressure\r\nDelivers 5 SCFM at 90 PSI so it recovers quickly after an initial tank charge\r\nLow-maintenance, oil-free pump for convenience\r\n78 dBA operational noise level for a quiet and safe work environment\r\nAutomatic start/stop operation for safe and easy use\r\nSteel tank is durable\r\nPneumatic wheels provide easy transport around a job site\r\nVertical stand saves storage space\r\nETL listed', '8.jpg', 'DEWALT', 4300, 11, '225 MAX PSI, 5 SCFM at 90PSI for more stored air, quick recovery\r\nLarge wheels and retractable handle for easy jobsite portability\r\nSupports multiple framing, roofing or finish nailers concurrently', 'Air Compressors, Tools & Accessories', 'Air Compressors', 1200),
(9, '10 in. x 60-Tooth Fine Finish Saw Blade (2-Pack)', 'Create fine, smooth cuts in a variety of wood types with these AvantiPRO 10 in. x 60-Tooth Fine Finish Saw Blades (2-pack). The blades are crafted of carbide for exceptional durability and long-term cutting performance. The set of 2 is well-suited for use on plywood, hardwood, softwood, moulding and MDF.\r\nCarbide material ensures long blade life\r\n60 Teeth create fine, smooth cuts\r\nDesigned to fit 5/8 in. arbors\r\nCuts plywood, hardwood, softwood, moulding and MDF\r\nSpecial rim coating helps reduce binding and drag\r\nSet includes 2 saw blades\r\nNot recommended for use above 7000 RPM', '9.jpg', 'Avanti Pro', 400, 30, 'Cuts plywood, melamine, MDF, hard & softwood\r\nCompatible with 10\" miter saw, slide miter saw, or table saws\r\nFor 2x longerlife vs standard blades', 'Power Tool Accessories', 'Saw Blades', 50),
(23, '18-Volt X2 LXT 5.0Ah Lithium-Ion (36-Volt) Brushless Cordless Rear Handle 7-1/4 in. Circular Saw Kit', 'Makita, a pioneer in brushless motor technology and battery innovation, combines both in the 18-Volt X2 LXT (36-Volt) Lithium-Ion Brushless Rear Handle 7-1/4 in. Circular Saw (XSR01PT). It\'s powered by two 18-Volt LXT Lithium-Ion batteries for maximum performance and has an electronically-controlled BL Brushless motor that matches torque and RPM to the application. Makita 18-Volt X2 means freedom from the cord, even for demanding applications like cutting sheet and dimensional lumber that traditionally called for a corded saw. Best of all, users can remain in one battery platform, using the same fast-charging 18-Volt batteries with the XSR01PT as they use across the expansive Makita 18-Volt LXT cordless tool series. The XSR01PT has a long list of features for efficient cutting without the cord. Users of leading corded saws will appreciate the blade-left rear-handle design. The electronically-controlled brushless motor delivers a full 5,100 RPM for efficient cutting. In internal testing, the XSR01PT made up to 558 cross-cuts per charge in 2x4 SPF lumber using 2 fully-charged 5.0Ah batteries. Added features include a large 2-9/16 in. cutting capacity at 90° that will cut 3X lumber in a single pass and an electric brake for maximum productivity. The saw has a die-cast magnesium base and blade guard with die-cast aluminum blade cover and motor housing, which combines durability with less weight (only 12.4 lbs. with batteries).\nCalifornia residents\nPowered by 2 LXT batteries; X2 LXT technology delivers more power, speed and run time without the hassles of a cord\nMakita built electronically controlled BL motor delivers 5,100 RPM for maximum performance and 50% longer run time per charge\nBL brushless motor eliminates carbon brushes, enabling the BL motor to run cooler and more efficiently for longer life\nAutomatic speed change technology adjusts cutting speed and torque during cut for optimum performance\nX2 LXT technology delivers up to 558 cross-cuts per charge in 2x4 SPF lumber and up to 291 cross-cuts per charge in 2x10 SPF lumber using the two 5.0Ah batteries\nLarge 2-9/16 in. cutting capacity at 90°; cuts 3X material in a single pass\nElectric brake for maximum productivity\n0°- 53° bevel capacity with positive stops at 22.5°, 45° and 53°\nDie-cast magnesium base and blade guard along with a die-cast aluminum blade cover and motor housing provide a lightweight, durable design\nCompact and ergonomic design at only 17-1/2 in. L\nWeighs only 12.4 lbs. with batteries for reduced operator fatigue\nIdeal for framers, formers, builders, roofers and more\nEquipped with star protection computer controls to protect against overloading, over-discharging and over-heating\nRetractable, extra-wide tool hook secures the tool when not in use\nBuilt-in tether notch (tether sold separately)\nRubberized soft grip handle provides increased comfort on the job\nExtreme Protection Technology (XPT) is engineered for improved dust and water resistance for operation in harsh conditions\n3-stage LED gauges on the tool indicate battery charge levels', '10.jpg', 'Makita', 5000, 31, 'Includes 2 batteries, dual-port charger and bag\nBrushless motor runs cooler for tool efficiency and longer life\nPart of the expanding 18V LXT line of cordless tools', 'Power Tools', 'Saws', 1000),
(24, 'ATOMIC 20-Volt MAX Cordless Brushless 4-1/2 in. Circular Saw (Tool-Only)', 'This brushless cordless 4-1/2 in. circular saw comes with 1 blade, rip fence, dust port adaptor and blade change key. The DCS571 features a bevel gear design allowing users to cut 2X material at 90° and 1X material at 45°. With convenient on-board blade key storage users can change blades with minimal hassle. Elongated handle optimizes reach for rip cutting OSB and plywood. With the DCB205, you can cut up to 339 lin. ft. of 3/4 in. OSB. Battery and charger sold separately.\nBrushless motor allows you to cut up to 339 lin. ft. of 3/4 in. OSB using DCB205 battery (sold separately)\nRemovable auxiliary handle for increased control\nHang hook for increased convenience\nOn-board blade key storage for hassle free blade changes\n1-1/2 in. finger trigger allows users to choke-up on tool if necessary for their application\nBevel gear allows users to cut 2X material at 90° with a 4-1/2 in. blade\nElectronic blade brake stops blade quickly for safety and productivity\nBevel lever gives user the ability to bevel at 45° to cut 1X dimensional lumber\nOn-board dust port for dust control', '11.jpg', 'DEWALT', 2520, 18, '20V motor delivers up to 800 MWO and 4500 RPM\nUp to 45 degree bevel cut capacity\n1 9/16 in. cutting capacity at 90 degrees', 'Power Tools', 'Saws', 800),
(25, 'Screwdriver Set (8-Piece)', 'Featuring hardened tips and forged shanks the Milwaukee 8-piece screwdriver set provides professional grade solutions and durability to the user. Bit types are marked on the cap of each tool for quick identification and increased efficiency. The comfortable tri-lobe handle allows users to comfortably apply more leverage.\n8-piece screwdriver set with square drive\nVisible ID markings allows for quick tool identification on jobsite\nIncludes: phillips #1 x 3 in., phillips #2 x 4 in., phillips #2 x 6 in., slotted 1/4 in. x 4 in., slotted 3/16 in. x 6 in., slotted 5/16 in. x 6 in., square #1, square #2\nWrench ready hex shanks\nLanyard hole\nLimited lifetime warranty\nComfortable tri-lobe handle\nMagnetic tips\nHardened tips for durability', '12.jpg', 'Milwaukee', 600, 14, 'Lifetime Warranty\nComfortable Tri-Lobe Handle\nMagnetic Tips', 'Hand Tools', 'Tool Sets', 200),
(26, 'SAE/Metric Long Arm Hex Key Set (26-Piece)', 'The Husky 26-Piece Hex Key Set includes hex keys made from alloy steel for long-lasting wear and featuring a chamfered-end design. The Allen wrenches resist rotational distortion and come in a variety of SAE and metric sizes. The finish provides resistance to corrosion while the included caddies help you keep them organized.\nSet includes 13 SAE and 13 metric keys covering sizes 0.05, 1/16, 5/64, 3/32, 7/64, 1/8, 9/64, 5/32, 3/16, 7/32, 1/4, 5/16, 3/8 in. and 1.5, 2, 2.5, 3, 4, 4.5, 5, 5.5, 6, 7, 8, 9, 10 mm\nKeys feature chamfered ends on both sides of the key to help guide the key into the fastener\nKeys store in color-coded caddies\nCaddies are marked both inside and out with size identification\nKeys are stamped with size\nKeys are designed to resist rotational distortion\nKeys can be used as short- or long-arm keys to allow access in various locations\nCaddies snap shut to help secure the keys in place\nCaddies can be attached together to keep all your keys in one place\nMeets or exceeds ANSI standards\nCall 1-888-HD-HUSKY for customer service and support.\nBacked by a Lifetime Warranty. If your Husky product ever fails, bring it back and we will replace it for free.', '13.jpg', 'Husky', 400, 10, 'Set contains 13 SAE and 13 metric key sizes\nKeys can be used as short-arm or long-arm keys\nLifetime Warranty with no questions, no receipt required.', 'Hand Tools', 'Tool Sets', 101),
(27, 'SHOCKWAVE IMPACT DUTY Titanium Drill Bit Set (23-Piece)', 'The MILWAUKEE 23 Piece SHOCKWAVE RED HELIX Titanium Drill Bit Set is engineered for extreme durability and long life. The QUAD EDGE tip delivers a precision start and four cutting edges to create smaller chips for faster removal and less heat leading to longer bit life. Designed with a Variable Helix that includes an aggressive 35° helical angle, which ends at 15°, these tapered drill bits with RED HELIX provide Rapid Chip Removal limiting heat buildup to Stay Sharper Longer. The bits also feature an internal ENHANCED TAPERED WEB that greatly increases their strength, reducing premature breakage. Ideal for various applications including but not limited to wood, plastics, and metals, Milwaukee Red Helix Titanium Drill Bits provide up to 5X life vs. black oxide drill bits.\n5X Life vs. Black Oxide Drill Bits\n1/4\" Hex Shank. Use in Drills or Impact Drivers\nSHOCKWAVE Impact Duty Bits\n135° Split Point Tip\nTitanium Coated for longer life\nIdeal for Wood, Plastics, & Metals\nIncludes: (2) 1/16\" SHOCKWAVE RED HELIX Titanium Drill Bit; (2) 5/64\" SHOCKWAVE RED HELIX Titanium Drill Bit; (1) 3/32\" SHOCKWAVE RED HELIX Titanium Drill Bit; (2) 7/64\" SHOCKWAVE RED HELIX Titanium Drill Bit; (2) 1/8\" SHOCKWAVE RED HELIX Titanium Drill Bit; (2) 9/64\" SHOCKWAVE RED HELIX Titanium Drill Bit; (2) 5/32\" SHOCKWAVE RED HELIX Titanium Drill Bit; (1) 11/64\" SHOCKWAVE RED HELIX Titanium Drill Bit; (2) 3/16\" SHOCKWAVE RED HELIX Titanium Drill Bit; (1) 13/64\" SHOCKWAVE RED HELIX Titanium Drill Bit; (1) 7/32\" SHOCKWAVE RED HELIX Titanium Drill Bit; (1) 15/64\" SHOCKWAVE RED HELIX Titanium Drill Bit; (2) 1/4\" SHOCKWAVE RED HELIX Titanium Drill Bit; (1) 5/16\" SHOCKWAVE RED HELIX Titanium Drill Bit; (1) 3/8\" SHOCKWAVE RED HELIX Titanium Drill Bit', '14.jpg', 'Milwaukee', 1800, 2, 'QUAD EDGE Tip - Stays Sharper Longer\nVARIABLE HELIX - Rapid Chip Removal\nENHANCED TAPERED WEB - Stronger More Durable Bit', 'Power Tool Accessories', 'Drill Bits', 1000),
(28, 'MAXFIT Screwdriving Set with Sleeve (30-Piece)', 'DEWALT MAXFIT screw driving bits are engineered for use with Impact Drivers. Their tip geometry reduces wear and creates an ideal fit with every fastener. Each bit features a unique torsion zone to deliver long life in both metal and wood fastening applications. The S2 modified steel enhances the overall durability of the product. CNC manufacturing ensures the product consistently delivers the highest level of quality.\nMAXFIT optimized tip geometry reduces wear and creates an ideal fit with the fastener\nTorsion zone delivers long-life with impact drivers\nS2 modified steel for durability\nCNC machined for consistent quality and geometric accuracy\nCompatible with magnetic sleeve to hold fasteners', '15.jpg', 'DEWALT', 1200, 0, 'Impact Rated with hex shank for both impact drivers and drills\nTorsion Zone Providing Longer Life\n10X magnetic screw lock system', 'Power Tool Accessories', 'Drill Bits', 300),
(29, 'PACKOUT 18.6 in. Tool Storage Crate Bin', 'The MILWAUKEE PACKOUT Crate is part of the industry’s most versatile and most durable modular storage system. The tool crate is constructed with impact resistant polymers for ultimate durability in harsh jobsite conditions and provides up to 50 lbs. of weight capacity. The crate tool box can be stacked seamlessly with all Milwaukee PACKOUT products and includes rear hanging points so it can be hung from a wall-mounted PACKOUT Mounting Plate. The PACKOUT modular storage system allows users to customize and build their own storage system to easily transport and organize tools and accessories.\nStack or hang\nImpact resistant polymer body\n50 lbs. weight capacity\nRear hanging points for vertical use\nTop attachment points for stacking full width PACKOUT components\nIntegrated weep holes prevent water from collecting\nIntegrated side handles for easy carrying\n16 in. x 13 in. x 9 in. internal dimension\n1872 cu. In. of storage capacity\nModular connectivity with ALL PACKOUT components', '16.jpg', 'Milwaukee', 1000, 8, 'Attachment points for stacking or hanging\nImpact resistant body w/stands drops and harsh jobsite conditions\nPart of the PACKOUT modular tool and accessories storage system', 'Tool Storage', 'Portable Toolboxes', 200),
(30, '22 in. Pro Gear Cart Tool Box in Black', 'This Ridgid 22 in. Pro Gear Cart is made with durable, high-impact resin for long-lasting performance. It\'s equipped with heavy-duty metal latches, and features an integrated water seal to protect against water and dust intrusion. All-terrain wheels provide easy mobility to different work sites. This tool box cart works with the Ridgid Pro Tool Storage System for a complete, professional look.\nHigh-impact resin and heavy-duty construction offer lasting durability\nEquipped with an integrated seal to protect contents against water and dust intrusion\nHolds up to 60 lbs. of gear\nRetractable handle allows it to fit in confined spaces\nCustomize your system with the RIDGID professional tool storage box and organizer (sold separately)\nIncludes locking bar (use locking bar when attaching the following Ridgid combination mobile cart-toolbox-organizer)', '17.jpg', 'RIDGID', 1200, 14, 'Heavy-duty construction withstands impact\nLockable system protects against water and dust damage\nAll-terrain wheels allow easy portability to different areas', 'Tool Storage', 'Portable Toolboxes', 300);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `firstName` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `lastName` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `profilePic` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `username` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `address` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `city` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `state` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `zipcode` int(11) NOT NULL,
  `country` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `firstName`, `lastName`, `profilePic`, `username`, `email`, `password`, `address`, `city`, `state`, `zipcode`, `country`) VALUES
(2, 'Tom', 'Hanks', 'defaultuser.png', 'Jake', 'tom@hanks.com', 'd9729feb74992cc3482b350163a1a010', '22 Lodon Street', 'ERNAKULAM', 'KERALA', 682025, 'INDIA'),
(3, 'Thomas', 'Jake', 'defaultuser.png', 'Thomas', 'thomas@gmail.com', '975d1981d0887c826088a888df800e26', '', '', '', 0, '');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `cart`
--
ALTER TABLE `cart`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `comments`
--
ALTER TABLE `comments`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `items`
--
ALTER TABLE `items`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `cart`
--
ALTER TABLE `cart`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=64;

--
-- AUTO_INCREMENT for table `comments`
--
ALTER TABLE `comments`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `items`
--
ALTER TABLE `items`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
