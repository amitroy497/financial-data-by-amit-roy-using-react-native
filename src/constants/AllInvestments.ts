import { Codes } from './Codes';
import { Colors } from './Colors';

const CanaraImage = require('../images/Canara.png');
const HdfcImage = require('../images/HDFC.png');
const IciciImage = require('../images/ICICI.png');
const NIMFImage = require('../images/Nippon.png');
const ParagImage = require('../images/Parag.png');
const SbiImage = require('../images/SBI.png');
const TataImage = require('../images/TATA.png');
const UtiImage = require('../images/UTI.png');

export const AllInvestments = [
	{
		mutualFund: [
			{
				code: Codes.canaraMutualFund,
				image: CanaraImage,
				gradient: Colors.gradient14,
			},
			{
				code: Codes.hdfcMutualFund,
				image: HdfcImage,
				gradient: Colors.gradient12,
			},
			{
				code: Codes.iciciMutualFund,
				image: IciciImage,
				gradient: Colors.gradient11,
			},
			{
				code: Codes.nipponIndiaMutualFund,
				image: NIMFImage,
				gradient: Colors.gradient10,
			},
			{
				code: Codes.paragMutualFund,
				image: ParagImage,
				gradient: Colors.gradient9,
			},
			{
				code: Codes.sbiMutualFund,
				image: SbiImage,
				gradient: Colors.gradient8,
			},
			{
				code: Codes.tataMutualFund,
				image: TataImage,
				gradient: Colors.gradient7,
			},
			{
				code: Codes.utiMutualFund,
				image: UtiImage,
				gradient: Colors.gradient6,
			},
		],
	},
];
