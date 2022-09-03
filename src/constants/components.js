import AMDRyzen5_3700X from "../assets/components/AMD-RYZEN-7-3700X.jpeg";
import AMDRyzen5_5600X from "../assets/components/Amd-Ryzen-5-5600X.jpeg";
import AMDRyzen9_5900X from "../assets/components/Amd-Ryzen-9-5900X.jpeg";
import IntelI5_12000K from "../assets/components/Intel-Core-i5-12600K-12th.jpeg";
import IntelI9_12900KF from "../assets/components/Intel-Core-I9-12900KF.jpeg";
import Asrock_B550_PG from "../assets/components/Asrock-B550-PG-Velocita.jpeg";
import Asrock_B550_Steel from "../assets/components/Asrock-B550-Steel-Legend.jpeg";
import Asus_Prime_H670 from "../assets/components/Asus-Prime-H670-PLUS.jpeg";
import Asus_ROG_Strix from "../assets/components/Asus-ROG-Strix-B550.jpeg";
import Asus_Prime_B660M from "../assets/components/Asus-Prime-B660M.jpeg";
import GSkill from "../assets/components/G.SKILL-16GB-8GBX2-3200-MHZ-DDR4-TRIDENT-Z-NEO-RGB-RAM-2.jpg";
import Crucial_P1_1000GB from "../assets/components/Crucial-P1-1000GB-M.2-NVMe-1.jpg";
import Crucial_P1_NAND_500GB from "../assets/components/Crucial-P1-3D-NAND-500GB-M.2-1.jpg";
import Crucial_P2_1TB from "../assets/components/Crucial-P2-1TB-M.2-NVMe-Internal-SSD-1.jpg";
import Crucial_P2_250GB from "../assets/components/Crucial-P2-250GB-M.2-NVMe-1.jpg";
import Nzxt_H20_Matte_Black from "../assets/components/Nzxt-H210-Matte-Black-1.jpeg";
import Nzxt_H210i_Matte_White from "../assets/components/Nzxt-H210i-Matte-White-1.jpeg";
import Nzxt_H510_Elite_Matte_Black from "../assets/components/Nzxt-H510-Elite-Matte-Black-1.jpeg";
import Nzxt_H510_Flow_Compact from "../assets/components/NZXT-H510-Flow-Compact-Mid-Tower-White-Cabinet-1.jpeg"
import Asus_Rog_Strix_RTX_3080ti from "../assets/components/Asus-Rog-Strix-RTX-3080ti-OC-12GB-1.png"
import MSI_GeForce_RTX_3090 from "../assets/components/MSI-GeForce-RTX-3090-VENTUS-3X-24G-OC-1.png"
import Asus_Dual_GeForce_RTX_2060 from "../assets/components/Asus-Dual-GeForce-RTX-2060-Evo-6GB-GDDR6-1.png"
import INNO3D_GeForce_RTX_3070 from "../assets/components/INNO3D-GEFORCE-RTX-3070-ICHILL-X4-LHR-1.png"


const components = [{
    id: 1,
    type: 'Processor',
    list: [{
        id: 1,
        name: 'AMD RYZEN 5 3700X PROCESSOR',
        price: 250.00,
        image_url: AMDRyzen5_3700X,
    }, {
        id: 2,
        name: 'AMD RYZEN 5 5600X PROCESSOR',
        price: 300.00,
        image_url: AMDRyzen5_5600X,
    }, {
        id: 3,
        name: 'AMD RYZEN 9 5900X PROCESSOR',
        price: 450.00,
        image_url: AMDRyzen9_5900X,
    }, {
        id: 4,
        name: 'INTEL CORE I5-12600K 12TH GEN ',
        price: 400.00,
        image_url: IntelI5_12000K,
    }, {
        id: 5,
        name: 'INTEL CORE I9-12900KF ',
        price: 450.00,
        image_url: IntelI9_12900KF,
    }]
}, {
    id: 2,
    type: 'Motherboard',
    list: [{
        id: 1,
        name: 'ASROCK B550 PG VELOCITA ATX',
        price: 200.00,
        image_url: Asrock_B550_PG,
    }, {
        id: 2,
        name: 'Asrock B550 Steel Legend Motherboard',
        price: 150.00,
        image_url: Asrock_B550_Steel,
    }, {
        id: 3,
        name: 'ASUS PRIME B660M-A D4 INTEL ',
        price: 180.00,
        image_url: Asus_Prime_B660M,
    }, {
        id: 4,
        name: 'ASUS PRIME H670-PLUS',
        price: 400.00,
        image_url: Asus_Prime_H670,
    }, {
        id: 5,
        name: 'ASUS ROG STRIX B550-F',
        price: 450.00,
        image_url: Asus_ROG_Strix,
    }]
}, {
    id: 3,
    type: 'RAM',
    list: [{
        id: 1,
        name: 'GSKILL RGB 32GB DDR5 5600MHz',
        price: 300.00,
        image_url: GSkill,
    }, {
        id: 2,
        name: 'G.SKILL 16GB DDR4  3200MHZ',
        price: 150.00,
        image_url: GSkill,
    }, {
        id: 3,
        name: 'G.SKILL 16GB 3200 MHZ DDR4',
        price: 180.00,
        image_url: GSkill,
    }, {
        id: 4,
        name: 'GSKILL NEO 16GB DDR4 3600MhZ',
        price: 400.00,
        image_url: GSkill,
    }]
}, {
    id: 4,
    type: 'Storage',
    list: [{
        id: 1,
        name: 'CRUCIAL P1 1 TB M.2 NVMe',
        price: 100.00,
        image_url: Crucial_P1_1000GB,
    }, {
        id: 2,
        name: 'CRUCIAL P1 3D NAND 500 GB M.2',
        price: 50.00,
        image_url: Crucial_P1_NAND_500GB,
    }, {
        id: 3,
        name: 'CRUCIAL P2 1TB M.2 NVME INTERNAL SSD',
        price: 150.00,
        image_url: Crucial_P2_1TB,
    }, {
        id: 4,
        name: 'CRUCIAL P2 250GB M.2 NVMe',
        price: 50.00,
        image_url: Crucial_P2_250GB,
    }]
}, {
    id: 5,
    type: 'Cabinet',
    list: [{
        id: 1,
        name: 'NZXT H510 ELITE (Matte Black)',
        price: 100.00,
        image_url: Nzxt_H20_Matte_Black,
    }, {
        id: 2,
        name: 'NZXT CABINET H210 (Matte Black)',
        price: 70.00,
        image_url: Nzxt_H510_Elite_Matte_Black,
    }, {
        id: 3,
        name: 'NZXT CABINET H210i (Matte White)',
        price: 70.00,
        image_url: Nzxt_H210i_Matte_White,
    }, {
        id: 4,
        name: 'NZXT H510 FLOW COMPACT',
        price: 70.00,
        image_url: Nzxt_H510_Flow_Compact,
    }]
}, {
    id: 6,
    type: 'Graphics',
    list: [{
        id: 1,
        name: 'MSI GeForce RTX 3090 VENTUS',
        price: 1900.00,
        image_url: MSI_GeForce_RTX_3090,
    }, {
        id: 2,
        name: 'ASUS DUAL GEFORCE RTX 2060 EVO',
        price: 700.00,
        image_url: Asus_Dual_GeForce_RTX_2060,
    }, {
        id: 3,
        name: 'ASUS ROG STRIX RTX 3080 TI',
        price: 1200.00,
        image_url: Asus_Rog_Strix_RTX_3080ti,
    }, {
        id: 4,
        name: 'INNO3D GEFORCE RTX 3070',
        price: 900.00,
        image_url: INNO3D_GeForce_RTX_3070,
    }]
}]

export default components
