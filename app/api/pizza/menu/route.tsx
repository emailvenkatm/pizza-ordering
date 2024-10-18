import { NextRequest, NextResponse } from "next/server";

interface MenuCategory {
    id: number;
    name: string;
    description?: string;
    products: MenuItem[];
    hidden?: boolean
}

interface MenuItem {
    id: number;
    name: string;
    price: string;
    description?: string;
    image?: string;
    isFeatured?: boolean;
    code: string;
    productTypeIds: number[]
}


const menu: MenuCategory[] =  [{
        "id": 26345592,
        "name": "Pizza",
        "products": [{
            "id": 1,
            "name": "Cheese Pizza",
            "price": "$12.95",
            "description": "Classic cheese or create your own pizza.",
            "image": "https://slice-menu-assets-prod.imgix.net/47659/1609188623_48e1c4e87f",
            "code": "02dedab8fcf6406d20af6168c7510c8cdc573b94e0ea93e5edf2527ab6198827",
            "isFeatured": true,
            "productTypeIds": [17395366, 17395367, 17395368, 17395369, 17395371, 17395370]
        }]
    }, {
        "id": 26345593,
        "name": "Signature Pizza",
        "products": [{
            "id": 3,
            "name": "Margherita Pizza",
            "price": "$17.95",
            "description": "Plum tomato sauce, beefsteak, tomatoes, fresh garlic, fresh mozzarella, basil, topped with olive oil.",
            "image": "https://slice-menu-assets-prod.imgix.net/47659/1609188669_abe29407b0",
            "code": "c51130cfabd582e1225a9e8f5bc3feb97d263852e554de4206643edfd1150f20",
            "isFeatured": true,
            "productTypeIds": [17395377, 17395378, 17395379, 17395380, 17395381]
        }, {
            "id": 4,
            "name": "Hawaiian Pizza",
            "price": "$16.95",
            "description": "Plum tomato sauce, Canadian bacon, and pineapple.",
            "code": "55fd62568ecac7f4c7b248f4da21dd84359e13fcdb3920d99387dbe51b23b8ce",
            "productTypeIds": [17395382, 17395383, 17395384, 17395385, 17395386]
        }, {
            "id": 5,
            "name": "Alfredo Pizza",
            "price": "$16.95",
            "description": "Parmesan cream sauce, and fresh mozzarella.",
            "code": "90ee24f7bef436eaa606113d6a648c8ab8ceab1b851bca52ec8edfb22b0bf34c",
            "productTypeIds": [17395387, 17395388, 17395389, 17395390, 17395391]
        }, {
            "id": 14392646,
            "name": "Meat Lovers Pizza",
            "price": "$20.95",
            "description": "Plum tomato sauce, mozzarella cheese, pepperoni, hamburger, sausage, sliced canadian ham.",
            "image": "https://slice-menu-assets-prod.imgix.net/47659/1609188646_8071239f61",
            "code": "e3a56cf681c92e8b6f79db5115183e745dedb2d9407ee374fe9a633336a7ba5f",
            "isFeatured": true,
            "productTypeIds": [17395392, 17395393, 17395394, 17395395, 17395396]
        }, {
            "id": 14392651,
            "name": "Supreme Pizza",
            "price": "$20.95",
            "description": "Pepperoni, sausage, hamburger, Canadian bacon, onions, peppers, mushrooms, green and black olives, fresh tomatoes.",
            "image": "https://slice-menu-assets-prod.imgix.net/47659/1609188681_9b276da3c2",
            "code": "64308bcabdb29d96ecd59883997968ea0ef4862e53ca9fff4c963bb6faaedcd8",
            "isFeatured": true,
            "productTypeIds": [17395397, 17395398, 17395399, 17395400, 17395401]
        }, {
            "id": 14392656,
            "name": "Veggie Pizza",
            "price": "$15.95",
            "description": "Tomatoes, onions, mushrooms, green and black olives, and peppers.",
            "code": "497ecaae754b8278c617811744648e7c3b98e3cc8b5d7080508a2d4abba8d600",
            "productTypeIds": [17395402, 17395403, 17395404, 17395405, 17395406]
        }, {
            "id": 14392661,
            "name": "White Pizza",
            "price": "$16.95",
            "description": "Seasoned ricotta, and fresh mozzarella.",
            "code": "257a6f9e9f4b6820b184e2b638cfa2399492893af3d0d49a238556574ec72b58",
            "productTypeIds": [17395407, 17395408, 17395409, 17395410, 17395411]
        }, {
            "id": 14392666,
            "name": "Philly Steak Pizza",
            "price": "$20.95",
            "description": "With plum tomato sauce, mushrooms, onions, and peppers.",
            "code": "7d78ba7c91a1af9a148c4d07d173d8aaeaee17976738d82b3e5227220a6984fb",
            "productTypeIds": [17395412, 17395413, 17395414, 17395415, 17395416]
        }, {
            "id": 14392671,
            "name": "Chicken Philly Pizza",
            "price": "$20.95",
            "description": "With plum tomato sauce, mushrooms, onions, and peppers.",
            "code": "17200f3224d7d1f219ce745b6b9d8211dd666a07a4b13bc7c1755f9fdb0c1dd5",
            "productTypeIds": [17395417, 17395418, 17395419, 17395420, 17395421]
        }]
    }, {
        "id": 26345594,
        "name": "Pizza By The Slice",
        "products": [{
            "id": 14392676,
            "name": "Cheese Pizza Slice",
            "price": "$3.95",
            "code": "e6596af8af9db226e416f2528623ce26766f4687b2d0b6bead28a9feffe14431",
            "productTypeIds": [17395422]
        }, {
            "id": 14392677,
            "name": "Meat Lovers Pizza Slice",
            "price": "$4.95",
            "code": "ec2a448d4175472c28ab9a4bd545b0de4937c6bccc84f58f63d524b56e154942",
            "productTypeIds": [17395423]
        }, {
            "id": 14392678,
            "name": "Veggie Pizza Slice",
            "price": "$4.95",
            "code": "34bc06bd20b41c4b12f65e2187ec8c3e48c3460ba984413ee1b6109bf5b99526",
            "productTypeIds": [17395424]
        }, {
            "id": 14392679,
            "name": "Alfredo Pizza Slice",
            "price": "$3.95",
            "code": "7b1d5039f17215bd9239658eb101af902eb89554b71877e719a79c842ee4fd02",
            "productTypeIds": [17395425]
        }, {
            "id": 14392680,
            "name": "Supreme Pizza Slice",
            "price": "$4.95",
            "code": "a42cec0aa10a081f8f23dd6ba50fce1f7b0897bd8969846181e71d3a9ad49106",
            "productTypeIds": [17395426]
        }]
    }, {
        "id": 26345595,
        "name": "Appetizers",
        "products": [{
            "id": 14392681,
            "name": "Bruschetta",
            "price": "$11.95",
            "description": "Sliced flat bread topped with fresh diced tomatoes, basil, Italian seasoning, and balsamic dressing.",
            "code": "43dbf1c0465718a0fc9f15ce26dc4319387673adc70e16f1bbdc0068cd2f6e4e",
            "productTypeIds": [17395427]
        }, {
            "id": 14392682,
            "name": "Calamari Fritti",
            "price": "$14.95",
            "description": "Tender pieces fried to perfection with italian seasonings and served with marinara.",
            "image": "https://slice-menu-assets-prod.imgix.net/47659/1609188782_e1f6b3c4f1",
            "code": "186cc0e64100d015aa68d3056bf0266db81fc0df5b71a28a5bffda77ecd7ac5e",
            "isFeatured": true,
            "productTypeIds": [17395428]
        }, {
            "id": 14392683,
            "name": "Garlic Bread",
            "price": "$5.95",
            "description": "A tasty loaf of french bread cut in half, toasted with garlic butter, & served with marinara. Also available with baked cheese.",
            "code": "0240ac504d68f6dccd86ffb21c4f0a198711757b4e192fd21267eb86463a71c3",
            "productTypeIds": [17395429]
        }, {
            "id": 14392684,
            "name": "Garlic Bread with Cheese",
            "price": "$7.95",
            "image": "https://slice-menu-assets-prod.imgix.net/47659/1609188804_c94eed2824",
            "code": "d9b0d58ce2169ff4f326c84b1fde161807a74c62d35ea867e49de1a421ee146b",
            "productTypeIds": [17395430]
        }, {
            "id": 14392685,
            "name": "Garlic Knots",
            "price": "$5.95",
            "description": "House-made dough, buttered, sprinkled with spices and baked to perfection. Served with our freshly made marinara sauce. Available in half or full dozen.",
            "code": "3c103ff03d74fcad7566d34f8ba3d7b56669bf35912484e912960c78fdd21927",
            "productTypeIds": [17395431, 17395432]
        }, {
            "id": 14392687,
            "name": "Pepperoni Rolls",
            "price": "$3.95",
            "description": "House made dough stuffed with pepperoni and mozzerella cheese, baked, and served with fresh marinara.",
            "code": "85774fa70edcd648b0d51201fa6790a922eebad89c95b4d26a0521dfbaeaa69b",
            "productTypeIds": [17395433]
        }, {
            "id": 14392688,
            "name": "Cheese Sticks",
            "price": "$8.95",
            "description": "Half dozen mozzarella cheese sticks, battered and fried until melted inside, served with fresh marinara.",
            "code": "6dc46969a0839aea7b4648842fce6f25c756f208e6927093e552e0140ebcef63",
            "productTypeIds": [17395434]
        }, {
            "id": 14392689,
            "name": "Wings",
            "price": "$14.95",
            "description": "Traditional bone-in wings served with buffalo sauce.",
            "image": "https://slice-menu-assets-prod.imgix.net/47659/1609188743_9cf1b52924",
            "code": "adb28d23fdc3f60bd1ad8f276f670f97fbfc6313c1030a0b25eaf59dcd5aafbb",
            "isFeatured": true,
            "productTypeIds": [17395435, 17395436, 17395437]
        }]
    }, {
        "id": 26345596,
        "name": "Salads",
        "products": [{
            "id": 14392692,
            "name": "Caprese Salad",
            "price": "$10.95",
            "description": "Layered slices of tomato, fresh mozzarella, and basil and topped with balsamic dressing.",
            "image": "https://slice-menu-assets-prod.imgix.net/47659/1609188704_a9486ec6fa",
            "code": "7273d0f1e518b29885cca4d61f745beeed3c25580a7719f43127bf4cf8c0d7fb",
            "isFeatured": true,
            "productTypeIds": [17395438]
        }, {
            "id": 14392693,
            "name": "Tossed Salad",
            "price": "$5.95",
            "description": "Romaine lettuce, tomatoes, shredded carrots, onion, banana peppers, pepperoncini, cucumbers, kalamata olives, & house dressing. Available in small or large servings.",
            "code": "3530c1b2bffe0ff95ab71a515067d041dd49730768f8ce1ef91265e720528d4c",
            "productTypeIds": [17395439, 17395440]
        }, {
            "id": 14392695,
            "name": "Caesar Salad",
            "price": "$8.95",
            "description": "Romaine lettuce, croutons, parmesan cheese, with caesar dressing.",
            "code": "b65b7b3c3572e2aa611241fcf074ca1c2970c7d51ec8b6ee9b14386894b68713",
            "productTypeIds": [17395441]
        }, {
            "id": 14392696,
            "name": "Chicken Caesar Salad",
            "price": "$11.95",
            "description": "Romaine lettuce, croutons, parmesan cheese, and caesar dressing topped with diced grilled chicken.",
            "code": "e317e249d1046dcc3791c86f85cc06ef72fdb19f59b964a8aa8fb482fa151406",
            "productTypeIds": [17395442]
        }, {
            "id": 14392697,
            "name": "Jonny’s Signature Salad",
            "price": "$14.95",
            "description": "Romaine lettuce, capicola salami, ham, shredded mozzarella cheese, cucumbers, onions, tomatoes, olives, and banana peppers tossed in house dressing. (Add chicken or cheese.)",
            "code": "818e4a26e83f5badf981f51a8aee441bf495eca9f5d45a6c3ec773c3a23f8415",
            "productTypeIds": [17395443]
        }]
    }, {
        "id": 26345597,
        "name": "Sides",
        "products": [{
            "id": 14392698,
            "name": "Side of Ranch Dressing",
            "price": "$1.95",
            "code": "8180b7454ad6b4afb98f395049881147a81eb54cc5dfd2d792d0ea8f90c3d68d",
            "productTypeIds": [17395444]
        }, {
            "id": 14392699,
            "name": "Side of House Dressing",
            "price": "$1.95",
            "code": "bc982611950ed180a4e0b969930ce578a53ca70c082f8527e15922a41cf8f6d2",
            "productTypeIds": [17395445]
        }, {
            "id": 14392700,
            "name": "Dough",
            "price": "$3.95",
            "description": "Fresh house made dough available in a small and large size",
            "code": "7f425a340b35f226015a0a192b14b03d45f9d5cc0bc869706cc5446744a5ba6d",
            "productTypeIds": [17395446, 17395447]
        }, {
            "id": 14392702,
            "name": "Pizza Kit",
            "price": "$10.95",
            "code": "805804c8318258dd104dcbe2328c65c2083af079ebbc7ae5e69c79b59680ca0e",
            "productTypeIds": [17395448]
        }, {
            "id": 14392703,
            "name": "Side of Alfredo Sauce",
            "price": "$3.95",
            "code": "df4dfc133ee8ec9a634e4d4e8a186253cb3134755b470f0d1590958063ba2ec2",
            "productTypeIds": [17395449]
        }, {
            "id": 14392704,
            "name": "Side of Marinara Sauce",
            "price": "$3.95",
            "code": "980daa24d6ae937d7726cad46a3b1fc586ece2703a81a6e082998c32ab7dbb89",
            "productTypeIds": [17395450]
        }, {
            "id": 14392705,
            "name": "Side of Blue Cheese Dressing",
            "price": "$1.95",
            "code": "c15ca5771fbca0a284f137cc930cb90f7e903e6b4da0671ff68390ae0d9c1cef",
            "productTypeIds": [17395451]
        }, {
            "id": 14392706,
            "name": "Side of Grilled Chicken",
            "price": "$6.95",
            "code": "5af5841ce0c556c9b14c1cfd9b8e3db0348a5f4c8fade25e717864a7568a1d30",
            "productTypeIds": [17395452]
        }, {
            "id": 14392707,
            "name": "Side of Meatballs",
            "price": "$7.95",
            "description": "Half a dozen baked ground beef meatballs served in marinara sauce.",
            "code": "dfd05c37849d2e3cdd9a5bfcc17edceef1a78fc4845cb1296a63aeaad8cc4d52",
            "productTypeIds": [17395453]
        }, {
            "id": 14392708,
            "name": "Side of Sausage",
            "price": "$7.95",
            "description": "Sliced italian link sausage topped with marinara sauce.",
            "code": "d152060de3c8ec8b52a685f2bde1ba390b48cd9544fe6831aa41d38357e53537",
            "productTypeIds": [17395454]
        }]
    }, {
        "id": 26345598,
        "name": "Calzones & Strombolis",
        "products": [{
            "id": 14392709,
            "name": "Meat Stromboli",
            "price": "$14.95",
            "description": "Oven-baked dough stuffed with pepperoni, sausage, hamburger, Canadian bacon, bacon, and mozzarella cheese. Brushed with garlic butter and parmesan, served with marinara.",
            "code": "f403cf70127882b5f143c38bf96e6b7d87f49da48005c6a41da436ac40d5512e",
            "productTypeIds": [17395455]
        }, {
            "id": 14392710,
            "name": "Supreme Stromboli",
            "price": "$13.95",
            "description": "Oven-baked dough stuffed with pepperoni, sausage, hamburger, Canadian bacon, bacon, black olives, green olives, mushrooms, onions, green peppers, tomatoes, and mozzarella cheese. Brushed with garlic butter and parmesan, served with marinara.",
            "code": "ca3d0f83f6a5f0811a3782ce44e7e759a98b5f564fe8fe310e411f649f97da8a",
            "productTypeIds": [17395456]
        }, {
            "id": 14392711,
            "name": "Build Your Own Stromboli",
            "price": "$13.95",
            "description": "Oven-baked dough stuffed with your choice of toppings. Brushed with garlic butter and parmesan, served with marinara.",
            "image": "https://slice-menu-assets-prod.imgix.net/47659/1609188958_a62b09e221",
            "code": "80bae63b171573e106bc3f2b17c37dd3567905a36621e91e9471fdc9eb5cbf31",
            "productTypeIds": [17395457]
        }, {
            "id": 14392712,
            "name": "Cheese Calzone",
            "price": "$12.95",
            "description": "Oven-baked dough stuffed with ricotta and mozzarella cheese. Brushed with garlic butter and parmesan, and served with marinara.",
            "code": "e2df279178dfaa057193f5906a6a15e1fd263bc48b4ec70768fac316d6f44531",
            "productTypeIds": [17395458]
        }, {
            "id": 14392713,
            "name": "Build Your Own Calzone",
            "price": "$13.95",
            "description": "Oven-baked dough stuffed with your choice of toppings. Brushed with garlic butter and parmesan, and served with marinara.",
            "image": "https://slice-menu-assets-prod.imgix.net/47659/1609188726_67f51f7fee",
            "code": "d22b3faa5c6c04e6f170d36c8eeff0f282e3e23a5db1d1798552ad8c54d4cbbc",
            "isFeatured": true,
            "productTypeIds": [17395459]
        }]
    }, {
        "id": 26345599,
        "name": "Subs",
        "products": [{
            "id": 14392714,
            "name": "Meatball Parmesan Sub",
            "price": "$9.95",
            "description": "Baked footlong loaf of bread filled with freshly made beef meatballs, topped with marinara, parmesan, provolone.",
            "code": "97f28f20643784d51d781be4264d1ef432c2d89496fbffe9f18d17a8e7b4b756",
            "productTypeIds": [17395460]
        }, {
            "id": 14392715,
            "name": "Chicken Parmesan Sub",
            "price": "$10.95",
            "description": "Baked footlong loaf of bread filled with breaded chicken topped with Italian seasonings, marinara, parmesan, and provolone.",
            "code": "5398d81d0749d46d6d55c16af5e2f84791b13fd2fad255ac9239f467278aa865",
            "productTypeIds": [17395461]
        }, {
            "id": 14392716,
            "name": "Philly Cheese Steak Sub",
            "price": "$10.95",
            "description": "Baked footlong loaf of bread filled with Philly steak, sauteed green peppers, mushrooms, onions and topped with provolone cheese.",
            "code": "3946bf9db6df849cbccf6f68920647f441b38fdbe1654fa6b691860776c69787",
            "productTypeIds": [17395462]
        }, {
            "id": 14392717,
            "name": "Sausage, Pepper & Onion Sub",
            "price": "$10.95",
            "description": "Baked footlong loaf of bread filled with sliced Italian sausage, sauteed green peppers, and onions, topped with marinara and provolone.",
            "code": "032070421cbf7082c4d97dde68e7835677c57f7eaf54e581b00c12c4c228a6c8",
            "productTypeIds": [17395463]
        }]
    }, {
        "id": 26345600,
        "name": "Pasta",
        "products": [{
            "id": 14392718,
            "name": "Carbonara Pomodoro Pasta",
            "price": "$15.95",
            "description": "Penne pasta, tomatoes, bacon, garlic, basil, and chicken served in our creamy alfredo tomato sauce.",
            "code": "b5face8b3832ace8c163079ff4c7eb607d7a7c4b6d826817d6b6bfdb8af8d2c7",
            "productTypeIds": [17395464]
        }, {
            "id": 14392719,
            "name": "Baked Lasagna",
            "price": "$14.95",
            "description": "Layers of pasta, ricotta cheese, mozzarella cheese, ground beef, and marinara baked in a dish and topped with mozzarella cheese.",
            "code": "1b17ac35e6b9c611d92bec3c84a5ea4ceaa734971b8016063e13b3c2016ac5ed",
            "productTypeIds": [17395465]
        }, {
            "id": 14392720,
            "name": "Fettuccine Alfredo",
            "price": "$14.95",
            "description": "Fettuccine noodles tossed in a creamy white alfredo sauce. Available with chicken or shrimp.",
            "code": "553831eff77207a4dbd605c070a158f8460b1bbe3c3720f73fbb1990646eb953",
            "productTypeIds": [17395466]
        }, {
            "id": 14392721,
            "name": "Fettuccine Alfredo with Chicken",
            "price": "$17.95",
            "code": "27a888aba7d203827d3e9529303d95894ce33b60487ddf63bea2799e858ab648",
            "productTypeIds": [17395467]
        }, {
            "id": 14392722,
            "name": "Fettuccine Alfredo with Shrimp",
            "price": "$17.95",
            "code": "a71306fbd67d86f8dda9f28c96e5ea4aa6c9afbe669d6baa316277b8fdc61b29",
            "productTypeIds": [17395468]
        }, {
            "id": 14392723,
            "name": "Spaghetti with Butter Sauce",
            "price": "$11.95",
            "code": "eba89a18041f540297432f5a285e54a02e8c8da798e1fd6bae214c95436bf92f",
            "productTypeIds": [17395469]
        }, {
            "id": 14392724,
            "name": "Spaghetti with Meat Sauce",
            "price": "$15.95",
            "description": "Spaghetti with beefy, juicy sauce.",
            "code": "29bc65a2d14f2eabf5097b10d5452d3474f9fd72ea36c0f223eb14d0593ce388",
            "productTypeIds": [17395470]
        }, {
            "id": 14392725,
            "name": "Spaghetti with Meatballs",
            "price": "$15.95",
            "description": "Spaghetti topped in our homemade meatballs.",
            "code": "eb7c4699667319d40571a795be6225415df2872c12566167e0aa65a996ddef1f",
            "productTypeIds": [17395471]
        }, {
            "id": 14392726,
            "name": "Chicken Parmigiana With Spaghetti",
            "price": "$15.95",
            "description": "Baked breaded chicken with Italian seasonings topped with marinara and mozzarella cheese. Served with a side of spaghetti with marinara.",
            "code": "77df230d0d02340e51d9c535174ed1fde3f1dacba596986793f51e4a56900aeb",
            "productTypeIds": [17395472]
        }, {
            "id": 14392727,
            "name": "Cheese Tortellini",
            "price": "$15.95",
            "description": "Tortellini pasta stuffed with ricotta cheese, topped with your choice of tomato or alfredo sauce.",
            "code": "9041a3f3cd926541ad83172d5539b0e7c140db82f19325eb100d39f122a959e9",
            "productTypeIds": [17395473]
        }, {
            "id": 14392728,
            "name": "Cheese Ravioli",
            "price": "$15.95",
            "description": "Ravioli stuffed with ricotta cheese with choice of tomato or alfredo sauce. Topped with mozzarella cheese & baked.",
            "code": "28a81400ca508670ae5e089cffe9f3c357eeec096e3212e1db11dceae936ac71",
            "productTypeIds": [17395474]
        }]
    }, {
        "id": 26345601,
        "name": "Kids Menu",
        "products": [{
            "id": 14392729,
            "name": "Kid's Chicken Tenders",
            "price": "$9.95",
            "description": "Delicious chicken tenders.",
            "code": "d21a6fa527a409a48a9e9caa24824dd9730c1c06368ffaad3b1bffb881a1b8cb",
            "productTypeIds": [17395475]
        }, {
            "id": 14392730,
            "name": "Kid's Pizza",
            "price": "$12.95",
            "description": "Mini cheese pizza.",
            "code": "c3ac7b6920e873d53821fd4dd5a943da173fd72c005746db8a732f0b7550e147",
            "productTypeIds": [17395476]
        }, {
            "id": 14392731,
            "name": "Kid's French Fries",
            "price": "$5.95",
            "code": "740844bab6f24915ced0f0f2882620904b6322b3df54a271ca8acabd889535d3",
            "productTypeIds": [17395477]
        }, {
            "id": 14392732,
            "name": "Kid's Pasta with Butter Sauce",
            "price": "$9.95",
            "code": "36ce45a3df56652e1deaa519f2c30aa5ff67db056edbfe6f0037a1f566d24276",
            "productTypeIds": [17395478]
        }, {
            "id": 14392733,
            "name": "Kid's Pasta with Tomato Sauce",
            "price": "$9.95",
            "code": "ea26a1d12baa9bb3181c345929ab2b88d66b4a590eddc10f711406655550edec",
            "productTypeIds": [17395479]
        }, {
            "id": 14392734,
            "name": "Kid's Pasta with Meat Sauce",
            "price": "$9.95",
            "code": "3a33d43eb37298b9e23a777e7d943092fc0285bfcb8e139540f79c94c77e3737",
            "productTypeIds": [17395480]
        }, {
            "id": 14392735,
            "name": "Kid's Pasta with Meatballs",
            "price": "$9.95",
            "code": "6a0d0c0108dcd61fb4ce0718bc3f25a9596e2d6649981360a640c6ddfaab43d6",
            "productTypeIds": [17395481]
        }, {
            "id": 16565898,
            "name": "Kid's Ravioli",
            "price": "$9.95",
            "code": "466ce5ab5175c00c6b750f5c3e0147f21ca4de53797a0f8c0b407b61bb24e321",
            "productTypeIds": [19583557]
        }]
    }, {
        "id": 26345602,
        "name": "Desserts",
        "products": [{
            "id": 14392736,
            "name": "New York Style Cheesecake",
            "price": "$7.95",
            "description": "Creamy New York-style cheesecake with a graham cracker crust.",
            "code": "8ba9d0c9cfb70f0571b0fb27a5f8c795ff7a5f3241281307b4f4b2a02779368d",
            "productTypeIds": [17395482]
        }, {
            "id": 14392737,
            "name": "Strawberry Cheesecake",
            "price": "$7.95",
            "description": "style",
            "code": "09249c7ddd5e84c67b58e74234b5f3f36ef249a2996f62caa68b99ed0a2884ea",
            "productTypeIds": [17395483]
        }, {
            "id": 14392738,
            "name": "Mocha Cheese Cake",
            "price": "$7.95",
            "description": "A triple-layered chocolate cheesecake, mocha chocolate cake, and chocolate mousse, topped with whip cream.",
            "code": "52cb2eaf197a7a64c1a4f4eb3e9078bc33126eadd43de6d3605573f78d4ce615",
            "productTypeIds": [17395484]
        }, {
            "id": 14392739,
            "name": "Tiramisu",
            "price": "$7.95",
            "description": "Ladyfingers dipped in espresso liqueur, layered with sweet mascarpone, and dusted chocolate espresso powder.",
            "code": "f8e67f0124d488377de3766c7ef3a4d41f95e40f75a229225e3df4d73fcf8073",
            "productTypeIds": [17395485]
        }, {
            "id": 14392740,
            "name": "Zeppole",
            "price": "$4.95",
            "description": "Fried Italian donut with powdered sugar, and choice of dipping sauces available in half dozen or full dozen order.",
            "code": "8158605aed96bb1f0dc2cebee5c3af50554a3dae4e8f5a28a7197df337e0a776",
            "productTypeIds": [17395486, 17395487]
        }, {
            "id": 14392742,
            "name": "Cannoli",
            "price": "$7.95",
            "description": "Cinnamon shell pastry stuffed with sweet ricotta cheese cream & chocolate chunks. Dusted with powdered sugar and drizzled with caramel, chocolate, and strawberry sauce.",
            "image": "https://slice-menu-assets-prod.imgix.net/47659/1609188845_d94964cb9f",
            "code": "1566d71edea435b03beb1355643797a9e814e4abd5bf03593d5859ea2d66cb2b",
            "isFeatured": true,
            "productTypeIds": [17395488]
        }]
    }, {
        "id": 26345603,
        "name": "Beverages",
        "products": [{
            "id": 14392743,
            "name": "Soda",
            "price": "$2.95",
            "code": "11b6f1a5b0e45ce766f077e5a8803277b9233cb115c9b44f31fb68a01e4af524",
            "productTypeIds": [17395489, 19583701]
        }]
    }, {
        "id": 26345604,
        "name": "Non Display Products",
        "description": "These products will not display on a shop menu. This area is for products that will be used in Bundle coupons and other features where they will not appear on a menu.",
        "hidden": true,
        "products": [{
            "id": 16566033,
            "name": "Cheese Pizza",
            "price": "$16.95",
            "description": "Classic cheese or create your own pizza.",
            "image": "https://slice-menu-assets-prod.imgix.net/47659/1609188623_48e1c4e87f",
            "code": "174086694b3cb6e1bd33180ba2633dc03e3884fd1bc735d95e6f938923bacc41",
            "productTypeIds": [19583692]
        }]
    }];

export async function GET(request: NextRequest) {
        await new Promise(resolve => setTimeout(resolve, 1000));
        return NextResponse.json({result: menu}, {status: 200})
}