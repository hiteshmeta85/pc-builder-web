import StarterPC from "../assets/prebuilds/starter-pc.jpg";
import StarterPCPlus from "../assets/prebuilds/starter-pc-plus.jpg";
import StarterPCPro from "../assets/prebuilds/starter-pc-pro.jpg";
import FoundationPC from "../assets/prebuilds/foundation-pc.jpg";
import CreatorPC from "../assets/prebuilds/creator-pc.jpg";
import CreatorPCPlus from "../assets/prebuilds/creator-pc-plus.jpg";
import CreatorPCPro from "../assets/prebuilds/creator-pc-pro.jpg";

const prebuilds = [
  {
    id: 1,
    type: 'Gaming and Content Creation',
    list: [{
      id: 1,
      name: 'Creator PC',
      price: '$2,699.00',
      specs: [{
        id: 1,
        Processor: 'Intel Core i7-12700K 12-Core 3.60 GHz',
        Graphics: 'GeForce RTX™ 3070 Ti',
        RAM: '3200 MHz 32GB (2X16GB)',
        Storage: 'NVMe M.2 SSD 1 TB',
        Cabinet: 'NZXT H510 ELITE (Matte Black)',
        Motherboard: 'ASROCK B550 PG VELOCITA ATX'
      }],
      image_url: CreatorPC,
    }, {
      id: 2,
      name: 'Creator PC Plus',
      price: '$3,499.00',
      specs: [{
        id: 1,
        Processor: 'Intel Core i9-12900K 16-Core 3.20 GHz',
        Graphics: 'GeForce RTX™ 3080 Ti',
        RAM: '3200 MHz 32GB (2X16GB)',
        Storage: 'NVMe M.2 SSD 1 TB',
        Cabinet: 'NZXT CABINET H210 (Matte Black)',
        Motherboard: 'ASUS PRIME H670-PLUS'
      }],
      image_url: CreatorPCPlus,
    }, {
      id: 3,
      name: 'Creator PC Pro',
      price: '$3,999.00',
      specs: [{
        id: 1,
        Processor: 'Intel Core i9-12900K 16-Core 3.20 GHz',
        Graphics: 'GeForce RTX™ 3090',
        RAM: '3200 MHz 64GB (4X16GB)',
        Storage: 'NVMe M.2 SSD 1 TB',
        Cabinet: 'NZXT CABINET H210i (Matte White)',
        Motherboard: 'Asrock B550 Steel Legend Motherboard'
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
        Processor: 'AMD Ryzen 5 5600G',
        Graphics: 'NVIDIA GeForce® RTX™ 1050ti',
        RAM: '3000 MHz 16 GB (2 x 8 GB)',
        Storage: 'NVMe M.2 SSD 500 GB',
        Cabinet: 'NZXT H510 FLOW COMPACT',
        Motherboard: 'ASUS ROG STRIX B550-F'
      }],
      image_url: FoundationPC,
    }, {
      id: 2,
      name: 'Starter PC',
      price: '$1099.00',
      specs: [{
        id: 1,
        Processor: 'Intel Core i5-10400F 6-Core 2.9 GHz',
        Graphics: 'NVIDIA GeForce® RTX™ 3050',
        RAM: 'Team Force Vulcan 3200 MHz 16GB (2X8GB)',
        Storage: '500GB SN550 M.2 SSD',
        Cabinet: 'NZXT H510 ELITE (Matte Black)',
        Motherboard: 'Asrock B550 Steel Legend Motherboard'
      }],
      image_url: StarterPC,
    }, {
      id: 3,
      name: 'Starter PC Plus',
      price: '$1199.00',
      specs: [{
        id: 1,
        Processor: 'Intel Core i5-10400F 6-Core 2.9 GHz',
        Graphics: 'NVIDIA GeForce RTX™ 3060',
        RAM: 'Team T-FORCE Vulcan Z 3000 MHz 16GB (2X8GB)',
        Storage: '512GB Intel 660p M.2 SSD',
        Cabinet: 'NZXT CABINET H210i (Matte White)',
        Motherboard: 'ASROCK B550 PG VELOCITA ATX'
      }],
      image_url: StarterPCPlus,
    }]
  },
  {
    id: 3,
    type: 'Office Work',
    list: [{
      id: 1,
      name: 'Foundation PC - H510 Edition',
      price: '$799.00',
      specs: [{
        id: 1,
        Processor: 'AMD Ryzen 5 5600G',
        Graphics: 'NVIDIA GeForce® RTX™ 1050ti',
        RAM: '3000 MHz 16 GB (2 x 8 GB)',
        Storage: 'NVMe M.2 SSD 500 GB',
        Cabinet: 'NZXT H510 FLOW COMPACT',
        Motherboard: 'ASROCK B550 PG VELOCITA ATX'
      }],
      image_url: FoundationPC,
    }]
  },
  {
    id: 4,
    type: 'Cheap Pre-Built',
    list: [{
      id: 1,
      name: 'Starter PC',
      price: '$1099.00',
      specs: [{
        id: 1,
        Processor: 'Intel Core i5-10400F 6-Core 2.9 GHz',
        Graphics: 'NVIDIA GeForce® RTX™ 3050',
        RAM: 'Team Force Vulcan 3200 MHz 16GB (2X8GB)',
        Storage: '500GB Western Digital SN550 M.2 SSD',
        Cabinet: 'NZXT H510 ELITE (Matte Black)',
        Motherboard: 'Asrock B550 Steel Legend Motherboard'
      }],
      image_url: StarterPC,
    }, {
      id: 2,
      name: 'Starter PC Plus',
      price: '$1199.00',
      specs: [{
        id: 1,
        Processor: 'Intel Core i5-10400F 6-Core 2.9 GHz',
        Graphics: 'NVIDIA GeForce RTX™ 3060',
        RAM: 'Team T-FORCE Vulcan Z 3000 MHz 16GB (2X8GB)',
        Storage: '512GB Intel 660p M.2 SSD',
        Cabinet: 'NZXT CABINET H210i (Matte White)',
        Motherboard: 'ASROCK B550 PG VELOCITA ATX'
      }],
      image_url: StarterPCPlus,
    }, {
      id: 3,
      name: 'Starter PC Pro',
      price: '$1299.00',
      specs: [{
        id: 1,
        Processor: 'Intel Core i5-10400F 6-Core 2.9 GHz',
        Graphics: 'NVIDIA GeForce RTX™ 3060 Ti',
        RAM: 'Team T-FORCE Vulcan Z 3000 MHz 16GB (2X8GB)',
        Storage: '1TB M.2 SSD',
        Cabinet: 'NZXT H510 FLOW COMPACT',
        Motherboard: 'ASUS ROG STRIX B550-F'
      }],
      image_url: StarterPCPro,
    }]
  }
]

export default prebuilds