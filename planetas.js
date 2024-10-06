const exoplanets = [
    {
        name: "Proxima Centauri b",
        distance: "4.24 años luz",
        description: "Un exoplaneta que orbita la estrella más cercana al Sol. Podría tener condiciones para albergar vida.",
        image: "proxima_centauri_b.jpg" // Asegúrate de tener esta imagen en la carpeta adecuada
    },
    {
        name: "TRAPPIST-1e",
        distance: "39.6 años luz",
        description: "Uno de los siete planetas que orbitan la estrella enana TRAPPIST-1, en la zona habitable.",
        image: "trappist_1e.jpg"
    },
    {
        name: "Kepler-186f",
        distance: "500 años luz",
        description: "El primer exoplaneta descubierto que es similar en tamaño a la Tierra y se encuentra en la zona habitable de su estrella.",
        image: "kepler_186f.jpg"
    },
    {
        name: "LHS 1140 b",
        distance: "40 años luz",
        description: "Un exoplaneta que es un 1.4 veces más grande que la Tierra, situado en la zona habitable de su estrella.",
        image: "lhs_1140b.jpg"
    },
    {
        name: "K2-18b",
        distance: "124 años luz",
        description: "Un exoplaneta en la zona habitable donde se ha detectado agua en su atmósfera.",
        image: "k2_18b.jpg"
    },
    {
        name: "HD 209458 b",
        distance: "159 años luz",
        description: "Un exoplaneta del tipo 'Júpiter caliente', conocido por su atmósfera que se evapora.",
        image: "hd_209458b.jpg"
    },
    {
        name: "55 Cancri e",
        distance: "41 años luz",
        description: "Un exoplaneta rocoso, dos veces más grande que la Tierra, que podría estar cubierto de lava.",
        image: "55_cancri_e.jpg"
    },
    {
        name: "Wolf 1061 c",
        distance: "14.1 años luz",
        description: "Un exoplaneta que podría tener condiciones para albergar agua líquida.",
        image: "wolf_1061c.jpg"
    },
    {
        name: "GJ 667Cc",
        distance: "22 años luz",
        description: "Un exoplaneta en la zona habitable de su estrella, similar en tamaño a la Tierra.",
        image: "gj_667cc.jpg"
    },
    {
        name: "Ross 128 b",
        distance: "11 años luz",
        description: "Un exoplaneta en la zona habitable que podría ser un nuevo candidato para la búsqueda de vida.",
        image: "ross_128b.jpg"
    },
    {
        name: "K2-72e",
        distance: "245 años luz",
        description: "Un exoplaneta en la zona habitable con un tamaño similar a la Tierra.",
        image: "k2_72e.jpg"
    },
    {
        name: "GJ 273b",
        distance: "12.2 años luz",
        description: "Un exoplaneta que podría tener condiciones adecuadas para la vida.",
        image: "gj_273b.jpg"
    },
    {
        name: "TOI 700 d",
        distance: "100 años luz",
        description: "Un exoplaneta rocoso que se encuentra en la zona habitable de su estrella.",
        image: "toi_700d.jpg"
    },
    {
        name: "K2-72d",
        distance: "245 años luz",
        description: "Un exoplaneta en la zona habitable que puede tener un clima adecuado para la vida.",
        image: "k2_72d.jpg"
    },
    {
        name: "HD 40307 g",
        distance: "42 años luz",
        description: "Un exoplaneta en la zona habitable, podría ser rocoso y tener agua en su superficie.",
        image: "hd_40307g.jpg"
    },
    {
        name: "TRAPPIST-1f",
        distance: "39.6 años luz",
        description: "Un exoplaneta que orbita en la zona habitable de TRAPPIST-1, con potencial para albergar agua.",
        image: "trappist_1f.jpg"
    },
    {
        name: "K2-138 f",
        distance: "220 años luz",
        description: "Un exoplaneta que se encuentra en un sistema con múltiples planetas, potencialmente en la zona habitable.",
        image: "k2_138f.jpg"
    },
    {
        name: "K2-138 d",
        distance: "220 años luz",
        description: "Otro exoplaneta en el sistema K2-138, también en la zona habitable.",
        image: "k2_138d.jpg"
    },
    {
        name: "K2-138 c",
        distance: "220 años luz",
        description: "Un exoplaneta en el mismo sistema que K2-138 f y d, en la zona habitable.",
        image: "k2_138c.jpg"
    },
    {
        name: "LHS 3844 b",
        distance: "48 años luz",
        description: "Un exoplaneta rocoso que presenta un lado permanentemente expuesto a su estrella.",
        image: "lhs_3844b.jpg"
    },
    {
        name: "LHS 475 b",
        distance: "41 años luz",
        description: "Un exoplaneta que es prácticamente el gemelo de la Tierra, pero con un clima diferente.",
        image: "lhs_475b.jpg"
    },
    {
        name: "WASP-121 b",
        distance: "850 años luz",
        description: "Un exoplaneta extremadamente caliente, con una atmósfera que se evapora en el espacio.",
        image: "wasp_121b.jpg"
    },
    {
        name: "WASP-76 b",
        distance: "390 años luz",
        description: "Un exoplaneta que tiene condiciones extremadamente calientes durante el día y frías por la noche.",
        image: "wasp_76b.jpg"
    },
    {
        name: "HD 189733 b",
        distance: "64 años luz",
        description: "Un exoplaneta con un clima violento y con lluvias de cristal debido a sus altas temperaturas.",
        image: "hd_189733b.jpg"
    },
    {
        name: "WASP-33 b",
        distance: "260 años luz",
        description: "Un exoplaneta que orbita muy cerca de su estrella, con temperaturas muy altas.",
        image: "wasp_33b.jpg"
    },
    {
        name: "KELT-9 b",
        distance: "670 años luz",
        description: "Uno de los exoplanetas más calientes conocidos, con temperaturas que superan los 4000 °C.",
        image: "kelt_9b.jpg"
    },
    {
        name: "HAT-P-7 b",
        distance: "1040 años luz",
        description: "Un exoplaneta muy grande y caliente, que orbita su estrella en menos de tres días.",
        image: "hat_p_7b.jpg"
    },
    {
        name: "WASP-121 b",
        distance: "850 años luz",
        description: "Un exoplaneta extremadamente caliente con atmósferas de vapor de metal.",
        image: "wasp_121b.jpg"
    },
    {
        name: "WASP-69 b",
        distance: "250 años luz",
        description: "Un exoplaneta que presenta un gran contraste entre el día y la noche.",
        image: "wasp_69b.jpg"
    },
    {
        name: "K2-25 b",
        distance: "149 años luz",
        description: "Un exoplaneta que presenta características similares a los planetas gaseosos en nuestro sistema solar.",
        image: "k2_25b.jpg"
    },
    {
        name: "K2-22 b",
        distance: "165 años luz",
        description: "Un exoplaneta con condiciones que podrían ser adecuadas para albergar vida.",
        image: "k2_22b.jpg"
    },
    {
        name: "WASP-127 b",
        distance: "240 años luz",
        description: "Un exoplaneta que es más grande que Júpiter y tiene una atmósfera densa.",
        image: "wasp_127b.jpg"
    },
    {
        name: "WASP-136 b",
        distance: "600 años luz",
        description: "Un exoplaneta con características únicas que lo diferencian de otros conocidos.",
        image: "wasp_136b.jpg"
    },
    {
        name: "WASP-80 b",
        distance: "100 años luz",
        description: "Un exoplaneta muy interesante por su gran tamaño y cercanía a su estrella.",
        image: "wasp_80b.jpg"
    },
    {
        name: "HAT-P-11 b",
        distance: "124 años luz",
        description: "Un exoplaneta que presenta una atmósfera rica en vapor de agua.",
        image: "hat_p_11b.jpg"
    },
    {
        name: "WASP-101 b",
        distance: "300 años luz",
        description: "Un exoplaneta con un tamaño y masa mayor que Júpiter, en un sistema diferente.",
        image: "wasp_101b.jpg"
    },
    {
        name: "HD 187123 b",
        distance: "200 años luz",
        description: "Un exoplaneta interesante en términos de composición y características atmosféricas.",
        image: "hd_187123b.jpg"
    },
    {
        name: "WASP-31 b",
        distance: "345 años luz",
        description: "Un exoplaneta que presenta un gran contraste entre las temperaturas diurnas y nocturnas.",
        image: "wasp_31b.jpg"
    },
    {
        name: "HAT-P-14 b",
        distance: "30 años luz",
        description: "Un exoplaneta que tiene una atmósfera muy densa y características especiales.",
        image: "hat_p_14b.jpg"
    },
    {
        name: "K2-116 b",
        distance: "60 años luz",
        description: "Un exoplaneta que es más pequeño que Júpiter, pero presenta características interesantes.",
        image: "k2_116b.jpg"
    }
];

// Exporta el arreglo para que puedas usarlo en otros archivos JS
export default exoplanets;
