// Image resourses

import wert_primer_img from '../images/LQ_Wert PrimerSF.jpg';
import primer_pu_img from '../images/LQ_Primer PU + Solvente.jpg';
import wert_pur_img from '../images/LQ_WertPUR.jpg';
import wert_2k_img from '../images/LQ_Wert2k.jpg';
import ibc102c_img from '../images/LQ_10-2c.jpg';
import ibc102c_eco_img from '../images/LQ_10-2c-eco.jpg';
import recoll25k_img from '../images/LQ_Recoll25_2k_new.jpg';
import silanblok_img from '../images/LQ_silanblok.jpg';
import titanium_img from '../images/LQ_Titanium.jpg';
import parquet56_img from '../images/LQ_t56.jpg';
import superfond_img from '../images/LQ_superfond.jpg';
import acqualux_img from '../images/LQ_acqualuxh2.jpg';
import legastucco_img from '../images/LQ_legastucco.jpg';

// Doc resourses

import primer_pu_pdf from '../files/primer-pu-rus_web.pdf';
import wert_pur_pdf from '../files/wert pur & wert plus.pdf';
import ibc_pdf from '../files/parquet-0160-eco-rus_web.pdf';
import ibc_green_pdf from '../files/parquet-0160-gren-line-rus_web.pdf';
import recoll25k_pdf from '../files/recoll-252k-new-rus_web.pdf';
import silanblok_pdf from '../files/recoll-252k-new-rus_web.pdf';
import titanium_pdf from '../files/RECOLL TITATINUM 2K RUS_web.pdf';
import parquet56_pdf from '../files/parquet-t56-rus_web.pdf';
import superfond_pdf from '../files/superfond-rus_web.pdf';
import acqualux_pdf from '../files/acqualux-h2-rus_web.pdf';
import legastucco_pdf from '../files/rasafond-rus_web.pdf';

const Preparation = [
    {
        id: "prep01",
        name: "WERT PRIMER SF",
        image: wert_primer_img,
        description: "Однокомпонентный полиуретановый состав. В силу высокого уровня сухого остатка, низкой вязкости и высокой проникающей способности применяется в качестве грунтовочного или праймирующего состава по бетону или прочим минеральным основаниям.",
        specs: "",
    },
    {
        id: "prep02",
        name: "PRIMER PU + SOLVENTE 124/S",
        image: primer_pu_img,
        description: "Фиксирующая полиуретановая смола для цементных пылящих стяжек, обработки влажных полов и стен против остаточной влаги, при добавлении мелкого песка получаются синтетические строительные растворы для шпаклевки или быстрого ремонта.",
        specs: primer_pu_pdf,
    }
];

const Glue = [
    {
        id: "gl01",
        name: "WERT PUR",
        image: wert_pur_img,
        description: "Двухкомпонентный полиуретановый клей с укрепленным клеевым швом для паркета. Применяется для приклеивания различных видов паркета и любых напольных покрытий на основе дерева, рулонных резиновых покрытий, ПВХ и резиновой плитки, любого линолеума, текстильных покрытий, нетканых материалов на бетонные и различные деревянные основания (фанера, ДВП, ДСП, OSB).",
        specs: wert_pur_pdf,
    },
    {
        id: "gl02",
        name: "WERT PLUS 2K",
        image: wert_2k_img,
        description: "Двухкомпонентный полиуретановый клей для паркета. Применяется для приклеивания различных видов паркета и любых напольных покрытий на основе дерева, рулонных резиновых покрытий, ПВХ и резиновой плитки, любого линолеума, текстильных покрытий, нетканых материалов на бетонные и различные деревянные основания (фанера, ДВП, ДСП, OSB).",
        specs: wert_pur_pdf,
    },
    {
        id: "gl03",
        name: "IBC 10-2C",
        image: ibc102c_img,
        description: "Двухкомпонентный клей для деревянных полов без растворителей. Двухкомпонентный эпоксиполиуретановый безводный клей для наклеивания деревянных полов на цементную стяжку или на уже существующие неабсорбирующие половые покрытия (мрамор, плитка, мозаичные полы, деревянные основы)",
        specs: ibc_pdf,
    },
    {
        id: "gl04",
        name: "IBC 10-2C Green Line",
        image: ibc102c_eco_img,
        description: 'Серия "Green Line" соответствует повышенным экологическим требованиям. Двухкомпонентный эпоксиполиуретановый безводный клей для наклеивания деревянных полов на цементную стяжку или на уже существующие неабсорбирующие половые покрытия (мрамор, плитка, мозаичные полы, деревянные основы)',
        specs: ibc_green_pdf,
    },
    {
        id: "gl05",
        name: "RECOLL 25-2K NEW",
        image: recoll25k_img,
        description: "Двухкомпонентный эпоксиполиуретановый безводный клей с новой формулой 9 кг на 1 кг был разработан по случаю празднования 25-летия деятельности фирмы Recoll. Клей, гарантирующий хорошую сцепляемость, предназначен для наклеивания любых деревянных полов на цементную стяжку или на уже существующие неабсорбирующие половые покрытия (мрамор, плитка, мозаичные полы, деревянные основы)",
        specs: recoll25k_pdf,
    },
    {
        id: "gl06",
        name: "SILANBLOK",
        image: silanblok_img,
        description: "Однокомпонентный модифицированный силановый клей. SILANBLOK SM не относится к опасным продуктам. Сертификат EC1 R PLUS гарантирует очень низкое выделение органических летучих соединений, как во время использования, так и после ввода в эксплуатацию. SILANBLOK SM обладает отличной адгезией на всех поверхностях и постоянной гибкостью, необходимой для приклеивания готового многослойного паркета.",
        specs: silanblok_pdf,
    },
    {
        id: "gl07",
        name: "TITANIUM",
        image: titanium_img,
        description: "Двухкомпонентный клей для деревянных полов с низким воздействием на окружающую среду. Двухкомпонентный эпоксидно-полиуретановый клей, не содержащий воды и растворителей, специально для приклеивания всех типов деревянных полов к бетонным основам или неабсорбирующим существующим напольным покрытиям (таким как мрамор, плитка, мозаичные полы и деревянные основания).",
        specs: titanium_pdf,
    },
    {
        id: "gl08",
        name: "PARQUET T/56",
        image: parquet56_img,
        description: "Двухкомпонентный полиуретановый безводный клей для приклеивания деревянных полов любого типа на цементное основание.",
        specs: parquet56_pdf,
    },
];

const Cover = [
    {
        id: "cov01",
        name: "SUPERFOND SK1",
        image: superfond_img,
        description: "Грунтовка полиуретановая двухкомпонентная, с большой площадью покрытия, быстро высыхает и отлично шлифуется, предназначена для качественной и быстрой обработки покрытия.",
        specs: superfond_pdf,
    },
    {
        id: "cov02",
        name: "ACQUALUX H2",
        image: acqualux_img,
        description: "Двухкомпонентный полиуретановый лак на водной основе, который придает деревянному полу теплую тональность. Легко наносится. Характеризуется повышенной прочностью и эластичностью, высокой устойчивостью к следам, оставленным резиновой подошвой. Поставляется в глянцевом, полуматовом или матовом вариантах",
        specs: acqualux_pdf,
    },
    {
        id: "cov03",
        name: "LEGASTUCCO",
        image: legastucco_img,
        description: "Связующая смола для штукатурки деревянных полов (биндер) на основе растворителя для штукатурки и шпаклевки деревянных покрытий; быстро высыхает; смешивается с древесной пылью, полученной при тонкой шлифовке.",
        specs: legastucco_pdf,
    },
];

export {Preparation, Glue, Cover};