var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_TIMPA_TESIconfine_riserva_unico_1 = new ol.format.GeoJSON();
var features_TIMPA_TESIconfine_riserva_unico_1 = format_TIMPA_TESIconfine_riserva_unico_1.readFeatures(json_TIMPA_TESIconfine_riserva_unico_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TIMPA_TESIconfine_riserva_unico_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TIMPA_TESIconfine_riserva_unico_1.addFeatures(features_TIMPA_TESIconfine_riserva_unico_1);
var lyr_TIMPA_TESIconfine_riserva_unico_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TIMPA_TESIconfine_riserva_unico_1, 
                style: style_TIMPA_TESIconfine_riserva_unico_1,
                popuplayertitle: 'TIMPA_TESI — confine_riserva_unico',
                interactive: true,
                title: '<img src="styles/legend/TIMPA_TESIconfine_riserva_unico_1.png" /> TIMPA_TESI — confine_riserva_unico'
            });
var format_TIMPA_TESIzona_B_2 = new ol.format.GeoJSON();
var features_TIMPA_TESIzona_B_2 = format_TIMPA_TESIzona_B_2.readFeatures(json_TIMPA_TESIzona_B_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TIMPA_TESIzona_B_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TIMPA_TESIzona_B_2.addFeatures(features_TIMPA_TESIzona_B_2);
var lyr_TIMPA_TESIzona_B_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TIMPA_TESIzona_B_2, 
                style: style_TIMPA_TESIzona_B_2,
                popuplayertitle: 'TIMPA_TESI — zona_B',
                interactive: true,
                title: '<img src="styles/legend/TIMPA_TESIzona_B_2.png" /> TIMPA_TESI — zona_B'
            });
var format_TIMPA_TESIzona_A_3 = new ol.format.GeoJSON();
var features_TIMPA_TESIzona_A_3 = format_TIMPA_TESIzona_A_3.readFeatures(json_TIMPA_TESIzona_A_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TIMPA_TESIzona_A_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TIMPA_TESIzona_A_3.addFeatures(features_TIMPA_TESIzona_A_3);
var lyr_TIMPA_TESIzona_A_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TIMPA_TESIzona_A_3, 
                style: style_TIMPA_TESIzona_A_3,
                popuplayertitle: 'TIMPA_TESI — zona_A',
                interactive: true,
                title: '<img src="styles/legend/TIMPA_TESIzona_A_3.png" /> TIMPA_TESI — zona_A'
            });
var format_TIMPA_TESIzsc_ITA070004_4 = new ol.format.GeoJSON();
var features_TIMPA_TESIzsc_ITA070004_4 = format_TIMPA_TESIzsc_ITA070004_4.readFeatures(json_TIMPA_TESIzsc_ITA070004_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TIMPA_TESIzsc_ITA070004_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TIMPA_TESIzsc_ITA070004_4.addFeatures(features_TIMPA_TESIzsc_ITA070004_4);
var lyr_TIMPA_TESIzsc_ITA070004_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TIMPA_TESIzsc_ITA070004_4, 
                style: style_TIMPA_TESIzsc_ITA070004_4,
                popuplayertitle: 'TIMPA_TESI — zsc_ITA070004',
                interactive: true,
                title: '<img src="styles/legend/TIMPA_TESIzsc_ITA070004_4.png" /> TIMPA_TESI — zsc_ITA070004'
            });
var format_habitat_2026_digitalizzati_5 = new ol.format.GeoJSON();
var features_habitat_2026_digitalizzati_5 = format_habitat_2026_digitalizzati_5.readFeatures(json_habitat_2026_digitalizzati_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_habitat_2026_digitalizzati_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_habitat_2026_digitalizzati_5.addFeatures(features_habitat_2026_digitalizzati_5);
var lyr_habitat_2026_digitalizzati_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_habitat_2026_digitalizzati_5, 
                style: style_habitat_2026_digitalizzati_5,
                popuplayertitle: 'habitat_2026_digitalizzati',
                interactive: true,
    title: 'habitat_2026_digitalizzati<br />\
    <img src="styles/legend/habitat_2026_digitalizzati_5_0.png" /> 1240<br />\
    <img src="styles/legend/habitat_2026_digitalizzati_5_1.png" /> 5330<br />\
    <img src="styles/legend/habitat_2026_digitalizzati_5_2.png" /> 6220*<br />\
    <img src="styles/legend/habitat_2026_digitalizzati_5_3.png" /> 8210<br />\
    <img src="styles/legend/habitat_2026_digitalizzati_5_4.png" /> 91AA*<br />\
    <img src="styles/legend/habitat_2026_digitalizzati_5_5.png" /> 9340<br />' });
var format_idoneit_fauna_2026_6 = new ol.format.GeoJSON();
var features_idoneit_fauna_2026_6 = format_idoneit_fauna_2026_6.readFeatures(json_idoneit_fauna_2026_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_idoneit_fauna_2026_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_idoneit_fauna_2026_6.addFeatures(features_idoneit_fauna_2026_6);
var lyr_idoneit_fauna_2026_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_idoneit_fauna_2026_6, 
                style: style_idoneit_fauna_2026_6,
                popuplayertitle: 'idoneità_fauna_2026',
                interactive: true,
    title: 'idoneità_fauna_2026<br />\
    <img src="styles/legend/idoneit_fauna_2026_6_0.png" /> Massimo<br />\
    <img src="styles/legend/idoneit_fauna_2026_6_1.png" /> Molto alto<br />' });
var format_sentieri_esistenti_7 = new ol.format.GeoJSON();
var features_sentieri_esistenti_7 = format_sentieri_esistenti_7.readFeatures(json_sentieri_esistenti_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_sentieri_esistenti_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_sentieri_esistenti_7.addFeatures(features_sentieri_esistenti_7);
var lyr_sentieri_esistenti_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_sentieri_esistenti_7, 
                style: style_sentieri_esistenti_7,
                popuplayertitle: 'sentieri_esistenti',
                interactive: true,
    title: 'sentieri_esistenti<br />\
    <img src="styles/legend/sentieri_esistenti_7_0.png" /> Acquegrandi<br />\
    <img src="styles/legend/sentieri_esistenti_7_1.png" /> Chiazzette<br />\
    <img src="styles/legend/sentieri_esistenti_7_2.png" /> Gazzena<br />\
    <img src="styles/legend/sentieri_esistenti_7_3.png" /> Vecchio tracciato ferroviario<br />' });
var format_sentieri_progetto_8 = new ol.format.GeoJSON();
var features_sentieri_progetto_8 = format_sentieri_progetto_8.readFeatures(json_sentieri_progetto_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_sentieri_progetto_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_sentieri_progetto_8.addFeatures(features_sentieri_progetto_8);
var lyr_sentieri_progetto_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_sentieri_progetto_8, 
                style: style_sentieri_progetto_8,
                popuplayertitle: 'sentieri_progetto',
                interactive: true,
    title: 'sentieri_progetto<br />\
    <img src="styles/legend/sentieri_progetto_8_0.png" /> Acque del Ferro<br />\
    <img src="styles/legend/sentieri_progetto_8_1.png" /> Acquegrandi<br />\
    <img src="styles/legend/sentieri_progetto_8_2.png" /> Chiazzette<br />\
    <img src="styles/legend/sentieri_progetto_8_3.png" /> Dintorni di Santa Maria La Scala<br />\
    <img src="styles/legend/sentieri_progetto_8_4.png" /> Garitta<br />\
    <img src="styles/legend/sentieri_progetto_8_5.png" /> Gazzena<br />\
    <img src="styles/legend/sentieri_progetto_8_6.png" /> Saia Mastra<br />\
    <img src="styles/legend/sentieri_progetto_8_7.png" /> Saia Mastra - Consorzio<br />\
    <img src="styles/legend/sentieri_progetto_8_8.png" /> Santa Caterina<br />\
    <img src="styles/legend/sentieri_progetto_8_9.png" /> Scarpata Saia Mastra<br />\
    <img src="styles/legend/sentieri_progetto_8_10.png" /> Scogliera<br />\
    <img src="styles/legend/sentieri_progetto_8_11.png" /> Vecchio tracciato ferroviario<br />\
    <img src="styles/legend/sentieri_progetto_8_12.png" /> Via Grotta Corvo<br />' });
var format_POI_progetto_9 = new ol.format.GeoJSON();
var features_POI_progetto_9 = format_POI_progetto_9.readFeatures(json_POI_progetto_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_POI_progetto_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_POI_progetto_9.addFeatures(features_POI_progetto_9);
var lyr_POI_progetto_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_POI_progetto_9, 
                style: style_POI_progetto_9,
                popuplayertitle: 'POI_progetto',
                interactive: true,
    title: 'POI_progetto<br />\
    <img src="styles/legend/POI_progetto_9_0.png" /> Geologico<br />\
    <img src="styles/legend/POI_progetto_9_1.png" /> Paesaggistico<br />\
    <img src="styles/legend/POI_progetto_9_2.png" /> Storico-culturale<br />' });
var format_accessi_sentieri_10 = new ol.format.GeoJSON();
var features_accessi_sentieri_10 = format_accessi_sentieri_10.readFeatures(json_accessi_sentieri_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_accessi_sentieri_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_accessi_sentieri_10.addFeatures(features_accessi_sentieri_10);
var lyr_accessi_sentieri_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_accessi_sentieri_10, 
                style: style_accessi_sentieri_10,
                popuplayertitle: 'accessi_sentieri',
                interactive: true,
    title: 'accessi_sentieri<br />\
    <img src="styles/legend/accessi_sentieri_10_0.png" /> Accessibile<br />\
    <img src="styles/legend/accessi_sentieri_10_1.png" /> Chiuso<br />\
    <img src="styles/legend/accessi_sentieri_10_2.png" /> Da verificare<br />' });

lyr_GoogleHybrid_0.setVisible(true);lyr_TIMPA_TESIconfine_riserva_unico_1.setVisible(true);lyr_TIMPA_TESIzona_B_2.setVisible(true);lyr_TIMPA_TESIzona_A_3.setVisible(true);lyr_TIMPA_TESIzsc_ITA070004_4.setVisible(true);lyr_habitat_2026_digitalizzati_5.setVisible(true);lyr_idoneit_fauna_2026_6.setVisible(true);lyr_sentieri_esistenti_7.setVisible(true);lyr_sentieri_progetto_8.setVisible(true);lyr_POI_progetto_9.setVisible(true);lyr_accessi_sentieri_10.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_TIMPA_TESIconfine_riserva_unico_1,lyr_TIMPA_TESIzona_B_2,lyr_TIMPA_TESIzona_A_3,lyr_TIMPA_TESIzsc_ITA070004_4,lyr_habitat_2026_digitalizzati_5,lyr_idoneit_fauna_2026_6,lyr_sentieri_esistenti_7,lyr_sentieri_progetto_8,lyr_POI_progetto_9,lyr_accessi_sentieri_10];
lyr_TIMPA_TESIconfine_riserva_unico_1.set('fieldAliases', {'fid': 'fid', 'COD_REG': 'COD_REG', 'TIPOLOGIA': 'TIPOLOGIA', 'ZONA': 'ZONA', 'PERIMETRAZ': 'PERIMETRAZ', 'DENOMINAZI': 'DENOMINAZI', 'RIF_LEGGE': 'RIF_LEGGE', 'ISTITUZION': 'ISTITUZION', 'GESTORE': 'GESTORE', 'COD_WDPA': 'COD_WDPA', 'COD_EUAP': 'COD_EUAP', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_TIMPA_TESIzona_B_2.set('fieldAliases', {'fid': 'fid', 'COD_REG': 'COD_REG', 'TIPOLOGIA': 'TIPOLOGIA', 'ZONA': 'ZONA', 'PERIMETRAZ': 'PERIMETRAZ', 'DENOMINAZI': 'DENOMINAZI', 'RIF_LEGGE': 'RIF_LEGGE', 'ISTITUZION': 'ISTITUZION', 'GESTORE': 'GESTORE', 'COD_WDPA': 'COD_WDPA', 'COD_EUAP': 'COD_EUAP', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_TIMPA_TESIzona_A_3.set('fieldAliases', {'fid': 'fid', 'COD_REG': 'COD_REG', 'TIPOLOGIA': 'TIPOLOGIA', 'ZONA': 'ZONA', 'PERIMETRAZ': 'PERIMETRAZ', 'DENOMINAZI': 'DENOMINAZI', 'RIF_LEGGE': 'RIF_LEGGE', 'ISTITUZION': 'ISTITUZION', 'GESTORE': 'GESTORE', 'COD_WDPA': 'COD_WDPA', 'COD_EUAP': 'COD_EUAP', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_TIMPA_TESIzsc_ITA070004_4.set('fieldAliases', {'fid': 'fid', 'codice': 'codice', 'tipo_sito': 'tipo_sito', 'denominazi': 'denominazi', 'reg_biog': 'reg_biog', 'regione': 'regione', 'aggiorn': 'aggiorn', 'fuso': 'fuso', 'hectares': 'hectares', 'nowprint': 'nowprint', 'sic_zsc': 'sic_zsc', 'zps': 'zps', 'sic_zsc_ma': 'sic_zsc_ma', 'sic_zsc_fo': 'sic_zsc_fo', 'zps_mappa': 'zps_mappa', 'zps_formul': 'zps_formul', 'st_area_sh': 'st_area_sh', 'st_length_': 'st_length_', });
lyr_habitat_2026_digitalizzati_5.set('fieldAliases', {'fid': 'fid', 'Codice': 'Codice', 'Habitat': 'Habitat', 'Prioritario': 'Prioritario', 'Fonte': 'Fonte', });
lyr_idoneit_fauna_2026_6.set('fieldAliases', {'fid': 'fid', 'Classe': 'Classe', 'Livello': 'Livello', 'Fonte': 'Fonte', });
lyr_sentieri_esistenti_7.set('fieldAliases', {'fid': 'fid', 'Nome': 'Nome', 'Lunghezza': 'Lunghezza', 'Difficoltà': 'Difficoltà', 'Durata': 'Durata', 'Fonte': 'Fonte', 'Stato': 'Stato', });
lyr_sentieri_progetto_8.set('fieldAliases', {'fid': 'fid', 'Id': 'Id', 'Nome': 'Nome', 'Durata': 'Durata', 'Difficoltà': 'Difficoltà', 'Dislivello': 'Dislivello', 'Lunghezza': 'Lunghezza', 'Pendenza': 'Pendenza', });
lyr_POI_progetto_9.set('fieldAliases', {'fid': 'fid', 'Id': 'Id', 'Nome': 'Nome', 'Categoria': 'Categoria', 'Sentiero': 'Sentiero', 'Fonte': 'Fonte', });
lyr_accessi_sentieri_10.set('fieldAliases', {'fid': 'fid', 'Nome': 'Nome', 'Sentiero': 'Sentiero', 'Stato': 'Stato', });
lyr_TIMPA_TESIconfine_riserva_unico_1.set('fieldImages', {'fid': 'TextEdit', 'COD_REG': 'TextEdit', 'TIPOLOGIA': 'TextEdit', 'ZONA': 'TextEdit', 'PERIMETRAZ': 'TextEdit', 'DENOMINAZI': 'TextEdit', 'RIF_LEGGE': 'TextEdit', 'ISTITUZION': 'TextEdit', 'GESTORE': 'TextEdit', 'COD_WDPA': 'TextEdit', 'COD_EUAP': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_TIMPA_TESIzona_B_2.set('fieldImages', {'fid': 'TextEdit', 'COD_REG': 'TextEdit', 'TIPOLOGIA': 'TextEdit', 'ZONA': 'TextEdit', 'PERIMETRAZ': 'TextEdit', 'DENOMINAZI': 'TextEdit', 'RIF_LEGGE': 'TextEdit', 'ISTITUZION': 'TextEdit', 'GESTORE': 'TextEdit', 'COD_WDPA': 'TextEdit', 'COD_EUAP': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_TIMPA_TESIzona_A_3.set('fieldImages', {'fid': 'TextEdit', 'COD_REG': 'TextEdit', 'TIPOLOGIA': 'TextEdit', 'ZONA': 'TextEdit', 'PERIMETRAZ': 'TextEdit', 'DENOMINAZI': 'TextEdit', 'RIF_LEGGE': 'TextEdit', 'ISTITUZION': 'TextEdit', 'GESTORE': 'TextEdit', 'COD_WDPA': 'TextEdit', 'COD_EUAP': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_TIMPA_TESIzsc_ITA070004_4.set('fieldImages', {'fid': 'TextEdit', 'codice': 'TextEdit', 'tipo_sito': 'TextEdit', 'denominazi': 'TextEdit', 'reg_biog': 'TextEdit', 'regione': 'TextEdit', 'aggiorn': 'TextEdit', 'fuso': 'TextEdit', 'hectares': 'TextEdit', 'nowprint': 'TextEdit', 'sic_zsc': 'TextEdit', 'zps': 'TextEdit', 'sic_zsc_ma': 'TextEdit', 'sic_zsc_fo': 'TextEdit', 'zps_mappa': 'TextEdit', 'zps_formul': 'TextEdit', 'st_area_sh': 'TextEdit', 'st_length_': 'TextEdit', });
lyr_habitat_2026_digitalizzati_5.set('fieldImages', {'fid': 'TextEdit', 'Codice': 'TextEdit', 'Habitat': 'TextEdit', 'Prioritario': 'CheckBox', 'Fonte': 'TextEdit', });
lyr_idoneit_fauna_2026_6.set('fieldImages', {'fid': 'TextEdit', 'Classe': 'TextEdit', 'Livello': 'TextEdit', 'Fonte': 'TextEdit', });
lyr_sentieri_esistenti_7.set('fieldImages', {'fid': 'TextEdit', 'Nome': 'TextEdit', 'Lunghezza': 'TextEdit', 'Difficoltà': 'TextEdit', 'Durata': 'TextEdit', 'Fonte': 'TextEdit', 'Stato': 'TextEdit', });
lyr_sentieri_progetto_8.set('fieldImages', {'fid': 'TextEdit', 'Id': 'Range', 'Nome': 'TextEdit', 'Durata': 'TextEdit', 'Difficoltà': 'TextEdit', 'Dislivello': 'TextEdit', 'Lunghezza': 'TextEdit', 'Pendenza': 'TextEdit', });
lyr_POI_progetto_9.set('fieldImages', {'fid': 'TextEdit', 'Id': 'Range', 'Nome': 'TextEdit', 'Categoria': 'TextEdit', 'Sentiero': 'TextEdit', 'Fonte': 'TextEdit', });
lyr_accessi_sentieri_10.set('fieldImages', {'fid': 'TextEdit', 'Nome': 'TextEdit', 'Sentiero': 'TextEdit', 'Stato': 'TextEdit', });
lyr_TIMPA_TESIconfine_riserva_unico_1.set('fieldLabels', {'fid': 'hidden field', 'COD_REG': 'hidden field', 'TIPOLOGIA': 'hidden field', 'ZONA': 'hidden field', 'PERIMETRAZ': 'hidden field', 'DENOMINAZI': 'hidden field', 'RIF_LEGGE': 'hidden field', 'ISTITUZION': 'hidden field', 'GESTORE': 'hidden field', 'COD_WDPA': 'hidden field', 'COD_EUAP': 'hidden field', 'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_TIMPA_TESIzona_B_2.set('fieldLabels', {'fid': 'no label', 'COD_REG': 'no label', 'TIPOLOGIA': 'no label', 'ZONA': 'no label', 'PERIMETRAZ': 'no label', 'DENOMINAZI': 'no label', 'RIF_LEGGE': 'no label', 'ISTITUZION': 'no label', 'GESTORE': 'no label', 'COD_WDPA': 'no label', 'COD_EUAP': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_TIMPA_TESIzona_A_3.set('fieldLabels', {'fid': 'no label', 'COD_REG': 'no label', 'TIPOLOGIA': 'no label', 'ZONA': 'no label', 'PERIMETRAZ': 'no label', 'DENOMINAZI': 'no label', 'RIF_LEGGE': 'no label', 'ISTITUZION': 'no label', 'GESTORE': 'no label', 'COD_WDPA': 'no label', 'COD_EUAP': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_TIMPA_TESIzsc_ITA070004_4.set('fieldLabels', {'fid': 'no label', 'codice': 'no label', 'tipo_sito': 'no label', 'denominazi': 'no label', 'reg_biog': 'no label', 'regione': 'no label', 'aggiorn': 'no label', 'fuso': 'no label', 'hectares': 'no label', 'nowprint': 'no label', 'sic_zsc': 'no label', 'zps': 'no label', 'sic_zsc_ma': 'no label', 'sic_zsc_fo': 'no label', 'zps_mappa': 'no label', 'zps_formul': 'no label', 'st_area_sh': 'no label', 'st_length_': 'no label', });
lyr_habitat_2026_digitalizzati_5.set('fieldLabels', {'fid': 'no label', 'Codice': 'no label', 'Habitat': 'no label', 'Prioritario': 'no label', 'Fonte': 'no label', });
lyr_idoneit_fauna_2026_6.set('fieldLabels', {'fid': 'no label', 'Classe': 'no label', 'Livello': 'no label', 'Fonte': 'no label', });
lyr_sentieri_esistenti_7.set('fieldLabels', {'fid': 'no label', 'Nome': 'no label', 'Lunghezza': 'no label', 'Difficoltà': 'no label', 'Durata': 'no label', 'Fonte': 'no label', 'Stato': 'no label', });
lyr_sentieri_progetto_8.set('fieldLabels', {'fid': 'hidden field', 'Id': 'hidden field', 'Nome': 'header label - visible with data', 'Durata': 'inline label - visible with data', 'Difficoltà': 'inline label - visible with data', 'Dislivello': 'inline label - visible with data', 'Lunghezza': 'inline label - visible with data', 'Pendenza': 'inline label - visible with data', });
lyr_POI_progetto_9.set('fieldLabels', {'fid': 'hidden field', 'Id': 'hidden field', 'Nome': 'header label - visible with data', 'Categoria': 'inline label - visible with data', 'Sentiero': 'inline label - visible with data', 'Fonte': 'inline label - visible with data', });
lyr_accessi_sentieri_10.set('fieldLabels', {'fid': 'hidden field', 'Nome': 'inline label - visible with data', 'Sentiero': 'header label - visible with data', 'Stato': 'inline label - visible with data', });
lyr_accessi_sentieri_10.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});