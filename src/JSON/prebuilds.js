import StarterPC from "../assets/prebuilds/starter-pc.jpg";
import StarterPCPlus from "../assets/prebuilds/starter-pc-plus.jpg";
import StarterPCPro from "../assets/prebuilds/starter-pc-pro.jpg";
import FoundationPC from "../assets/prebuilds/foundation-pc.jpg";
import CreatorPC from "../assets/prebuilds/creator-pc.jpg";
import CreatorPCPlus from "../assets/prebuilds/creator-pc-plus.jpg";
import CreatorPCPro from "../assets/prebuilds/creator-pc-pro.jpg";


const prebuilds = [{
    id: 1,
    type: 'Gaming and Content Creation',
    list: [{
        id: 1,
        name: 'Creator PC',
        price: '$2,699.00',
        specs: [{
            id: 1,
            cpu: 'Intel Core i7-12700K 12-Core 3.60 GHz',
            gpu: 'GeForce RTX™ 3070 Ti',
            ram: '3200 MHz 32GB (2X16GB)',
            storage: 'NVMe M.2 SSD 1 TB',
        }],
        image_url: CreatorPC,
    }, {
        id: 2,
        name: 'Creator PC Plus',
        price: '$3,499.00',
        specs: [{
            id: 1,
            cpu: 'Intel Core i9-12900K 16-Core 3.20 GHz',
            gpu: 'GeForce RTX™ 3080 Ti',
            ram: '3200 MHz 32GB (2X16GB)',
            storage: 'NVMe M.2 SSD 1 TB',
        }],
        image_url: CreatorPCPlus,
    }, {
        id: 3,
        name: 'Creator PC Pro',
        price: '$3,999.00',
        specs: [{
            id: 1,
            cpu: 'Intel Core i9-12900K 16-Core 3.20 GHz',
            gpu: 'GeForce RTX™ 3090',
            ram: '3200 MHz 64GB (4X16GB)',
            storage: 'NVMe M.2 SSD 1 TB',
        }],
        image_url: CreatorPCPro,
    }]
},
    {
        id: 2,
        type: 'All-in-One',
        list: [{
            id: 1,
            name: 'Foundation PC - H510 Edition',
            price: '$799.00',
            specs: [{
                id: 1,
                cpu: 'AMD Ryzen 5 5600G',
                gpu: 'NVIDIA GeForce® RTX™ 1050ti',
                ram: '3000 MHz 16 GB (2 x 8 GB)',
                storage: 'NVMe M.2 SSD 500 GB',
            }],
            image_url: FoundationPC,
        }, {
            id: 2,
            name: 'Starter PC',
            price: '$1099.00',
            specs: [{
                id: 1,
                cpu: 'Intel Core i5-10400F 6-Core 2.9 GHz',
                gpu: 'NVIDIA GeForce® RTX™ 3050',
                ram: 'Team Force Vulcan 3200 MHz 16GB (2X8GB)',
                storage: '500GB SN550 M.2 SSD',
            }],
            image_url: StarterPC,
        }, {
            id: 3,
            name: 'Starter PC Plus',
            price: '$1199.00',
            specs: [{
                id: 1,
                cpu: 'Intel Core i5-10400F 6-Core 2.9 GHz',
                gpu: 'NVIDIA GeForce RTX™ 3060',
                ram: 'Team T-FORCE Vulcan Z 3000 MHz 16GB (2X8GB)',
                storage: '512GB Intel 660p M.2 SSD',
            }],
            image_url: StarterPCPlus,
        }]
    }, {
        id: 3,
        type: 'Office Work',
        list: [{
            id: 1,
            name: 'Foundation PC - H510 Edition',
            price: '$799.00',
            specs: [{
                id: 1,
                cpu: 'AMD Ryzen 5 5600G',
                gpu: 'NVIDIA GeForce® RTX™ 1050ti',
                ram: '3000 MHz 16 GB (2 x 8 GB)',
                storage: 'NVMe M.2 SSD 500 GB',
            }],
            image_url: FoundationPC,
        }]
    }, {
        id: 4,
        type: 'Cheap Pre-Built',
        list: [{
            id: 1,
            name: 'Starter PC',
            price: '$1099.00',
            specs: [{
                id: 1,
                cpu: 'Intel Core i5-10400F 6-Core 2.9 GHz',
                gpu: 'NVIDIA GeForce® RTX™ 3050',
                ram: 'Team Force Vulcan 3200 MHz 16GB (2X8GB)',
                storage: '500GB Western Digital SN550 M.2 SSD',
            }],
            image_url: StarterPC,
        }, {
            id: 2,
            name: 'Starter PC Plus',
            price: '$1199.00',
            specs: [{
                id: 1,
                cpu: 'Intel Core i5-10400F 6-Core 2.9 GHz',
                gpu: 'NVIDIA GeForce RTX™ 3060',
                ram: 'Team T-FORCE Vulcan Z 3000 MHz 16GB (2X8GB)',
                storage: '512GB Intel 660p M.2 SSD',
            }],
            image_url: StarterPCPlus,
        }, {
            id: 3,
            name: 'Starter PC Pro',
            price: '$1299.00',
            specs: [{
                id: 1,
                cpu: 'Intel Core i5-10400F 6-Core 2.9 GHz',
                gpu: 'NVIDIA GeForce RTX™ 3060 Ti',
                ram: 'Team T-FORCE Vulcan Z 3000 MHz 16GB (2X8GB)',
                storage: '1TB M.2 SSD'
            }],
            image_url: StarterPCPro,
        }]
    }]

export default prebuilds