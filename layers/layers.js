ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([97.934111, 1.555388, 100.444015, 3.579799]);
var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Desa_Rawan_Banjir_Provinsi_Sumatera_Utara_KelurahanDesa_1 = new ol.format.GeoJSON();
var features_Desa_Rawan_Banjir_Provinsi_Sumatera_Utara_KelurahanDesa_1 = format_Desa_Rawan_Banjir_Provinsi_Sumatera_Utara_KelurahanDesa_1.readFeatures(json_Desa_Rawan_Banjir_Provinsi_Sumatera_Utara_KelurahanDesa_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Desa_Rawan_Banjir_Provinsi_Sumatera_Utara_KelurahanDesa_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Desa_Rawan_Banjir_Provinsi_Sumatera_Utara_KelurahanDesa_1.addFeatures(features_Desa_Rawan_Banjir_Provinsi_Sumatera_Utara_KelurahanDesa_1);
var lyr_Desa_Rawan_Banjir_Provinsi_Sumatera_Utara_KelurahanDesa_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Desa_Rawan_Banjir_Provinsi_Sumatera_Utara_KelurahanDesa_1, 
                style: style_Desa_Rawan_Banjir_Provinsi_Sumatera_Utara_KelurahanDesa_1,
                popuplayertitle: 'Desa_Rawan_Banjir_Provinsi_Sumatera_Utara_KelurahanDesa',
                interactive: true,
    title: 'Desa_Rawan_Banjir_Provinsi_Sumatera_Utara_KelurahanDesa<br />\
    <img src="styles/legend/Desa_Rawan_Banjir_Provinsi_Sumatera_Utara_KelurahanDesa_1_0.png" /> Asahan<br />\
    <img src="styles/legend/Desa_Rawan_Banjir_Provinsi_Sumatera_Utara_KelurahanDesa_1_1.png" /> Batu Bara<br />\
    <img src="styles/legend/Desa_Rawan_Banjir_Provinsi_Sumatera_Utara_KelurahanDesa_1_2.png" /> Dairi<br />\
    <img src="styles/legend/Desa_Rawan_Banjir_Provinsi_Sumatera_Utara_KelurahanDesa_1_3.png" /> Deli Serdang<br />\
    <img src="styles/legend/Desa_Rawan_Banjir_Provinsi_Sumatera_Utara_KelurahanDesa_1_4.png" /> Humbang Hasundutan<br />\
    <img src="styles/legend/Desa_Rawan_Banjir_Provinsi_Sumatera_Utara_KelurahanDesa_1_5.png" /> Karo<br />\
    <img src="styles/legend/Desa_Rawan_Banjir_Provinsi_Sumatera_Utara_KelurahanDesa_1_6.png" /> Kota Binjai<br />\
    <img src="styles/legend/Desa_Rawan_Banjir_Provinsi_Sumatera_Utara_KelurahanDesa_1_7.png" /> Kota Gunungsitoli<br />\
    <img src="styles/legend/Desa_Rawan_Banjir_Provinsi_Sumatera_Utara_KelurahanDesa_1_8.png" /> Kota Medan<br />\
    <img src="styles/legend/Desa_Rawan_Banjir_Provinsi_Sumatera_Utara_KelurahanDesa_1_9.png" /> Kota Padang Sidempuan<br />\
    <img src="styles/legend/Desa_Rawan_Banjir_Provinsi_Sumatera_Utara_KelurahanDesa_1_10.png" /> Kota Pematangsiantar<br />\
    <img src="styles/legend/Desa_Rawan_Banjir_Provinsi_Sumatera_Utara_KelurahanDesa_1_11.png" /> Kota Sibolga<br />\
    <img src="styles/legend/Desa_Rawan_Banjir_Provinsi_Sumatera_Utara_KelurahanDesa_1_12.png" /> Kota Tanjung Balai<br />\
    <img src="styles/legend/Desa_Rawan_Banjir_Provinsi_Sumatera_Utara_KelurahanDesa_1_13.png" /> Kota Tebing Tinggi<br />\
    <img src="styles/legend/Desa_Rawan_Banjir_Provinsi_Sumatera_Utara_KelurahanDesa_1_14.png" /> Labuhanbatu<br />\
    <img src="styles/legend/Desa_Rawan_Banjir_Provinsi_Sumatera_Utara_KelurahanDesa_1_15.png" /> Labuhanbatu Selatan<br />\
    <img src="styles/legend/Desa_Rawan_Banjir_Provinsi_Sumatera_Utara_KelurahanDesa_1_16.png" /> Labuhanbatu Utara<br />\
    <img src="styles/legend/Desa_Rawan_Banjir_Provinsi_Sumatera_Utara_KelurahanDesa_1_17.png" /> Langkat<br />\
    <img src="styles/legend/Desa_Rawan_Banjir_Provinsi_Sumatera_Utara_KelurahanDesa_1_18.png" /> Mandailing Natal<br />\
    <img src="styles/legend/Desa_Rawan_Banjir_Provinsi_Sumatera_Utara_KelurahanDesa_1_19.png" /> Nias<br />\
    <img src="styles/legend/Desa_Rawan_Banjir_Provinsi_Sumatera_Utara_KelurahanDesa_1_20.png" /> Nias Barat<br />\
    <img src="styles/legend/Desa_Rawan_Banjir_Provinsi_Sumatera_Utara_KelurahanDesa_1_21.png" /> Nias Selatan<br />\
    <img src="styles/legend/Desa_Rawan_Banjir_Provinsi_Sumatera_Utara_KelurahanDesa_1_22.png" /> Nias Utara<br />\
    <img src="styles/legend/Desa_Rawan_Banjir_Provinsi_Sumatera_Utara_KelurahanDesa_1_23.png" /> Padang Lawas<br />\
    <img src="styles/legend/Desa_Rawan_Banjir_Provinsi_Sumatera_Utara_KelurahanDesa_1_24.png" /> Padang Lawas Utara<br />\
    <img src="styles/legend/Desa_Rawan_Banjir_Provinsi_Sumatera_Utara_KelurahanDesa_1_25.png" /> Pakpak Bharat<br />\
    <img src="styles/legend/Desa_Rawan_Banjir_Provinsi_Sumatera_Utara_KelurahanDesa_1_26.png" /> Samosir<br />\
    <img src="styles/legend/Desa_Rawan_Banjir_Provinsi_Sumatera_Utara_KelurahanDesa_1_27.png" /> Serdang Bedagai<br />\
    <img src="styles/legend/Desa_Rawan_Banjir_Provinsi_Sumatera_Utara_KelurahanDesa_1_28.png" /> Simalungun<br />\
    <img src="styles/legend/Desa_Rawan_Banjir_Provinsi_Sumatera_Utara_KelurahanDesa_1_29.png" /> Tapanuli Selatan<br />\
    <img src="styles/legend/Desa_Rawan_Banjir_Provinsi_Sumatera_Utara_KelurahanDesa_1_30.png" /> Tapanuli Tengah<br />\
    <img src="styles/legend/Desa_Rawan_Banjir_Provinsi_Sumatera_Utara_KelurahanDesa_1_31.png" /> Tapanuli Utara<br />\
    <img src="styles/legend/Desa_Rawan_Banjir_Provinsi_Sumatera_Utara_KelurahanDesa_1_32.png" /> Toba<br />' });
var format_Grafik_Lighnest_Data_Banjir_Sumut_KabKota_2 = new ol.format.GeoJSON();
var features_Grafik_Lighnest_Data_Banjir_Sumut_KabKota_2 = format_Grafik_Lighnest_Data_Banjir_Sumut_KabKota_2.readFeatures(json_Grafik_Lighnest_Data_Banjir_Sumut_KabKota_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Grafik_Lighnest_Data_Banjir_Sumut_KabKota_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Grafik_Lighnest_Data_Banjir_Sumut_KabKota_2.addFeatures(features_Grafik_Lighnest_Data_Banjir_Sumut_KabKota_2);
var lyr_Grafik_Lighnest_Data_Banjir_Sumut_KabKota_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Grafik_Lighnest_Data_Banjir_Sumut_KabKota_2, 
                style: style_Grafik_Lighnest_Data_Banjir_Sumut_KabKota_2,
                popuplayertitle: 'Grafik_Lighnest_Data_Banjir_Sumut_Kab-Kota',
                interactive: true,
    title: 'Grafik_Lighnest_Data_Banjir_Sumut_Kab-Kota<br />\
    <img src="styles/legend/Grafik_Lighnest_Data_Banjir_Sumut_KabKota_2_0.png" /> Sangat Jarang<br />\
    <img src="styles/legend/Grafik_Lighnest_Data_Banjir_Sumut_KabKota_2_1.png" /> Jarang<br />\
    <img src="styles/legend/Grafik_Lighnest_Data_Banjir_Sumut_KabKota_2_2.png" /> Cukup Jarang<br />\
    <img src="styles/legend/Grafik_Lighnest_Data_Banjir_Sumut_KabKota_2_3.png" /> Sering<br />\
    <img src="styles/legend/Grafik_Lighnest_Data_Banjir_Sumut_KabKota_2_4.png" /> Sangat Sering<br />' });
var format_TitikCentroidDataBanjirSumutkabkota_3 = new ol.format.GeoJSON();
var features_TitikCentroidDataBanjirSumutkabkota_3 = format_TitikCentroidDataBanjirSumutkabkota_3.readFeatures(json_TitikCentroidDataBanjirSumutkabkota_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_TitikCentroidDataBanjirSumutkabkota_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TitikCentroidDataBanjirSumutkabkota_3.addFeatures(features_TitikCentroidDataBanjirSumutkabkota_3);
cluster_TitikCentroidDataBanjirSumutkabkota_3 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_TitikCentroidDataBanjirSumutkabkota_3
});
var lyr_TitikCentroidDataBanjirSumutkabkota_3 = new ol.layer.Vector({
                declutter: false,
                source:cluster_TitikCentroidDataBanjirSumutkabkota_3, 
                style: style_TitikCentroidDataBanjirSumutkabkota_3,
                popuplayertitle: 'Titik Centroid Data Banjir Sumut kab-kota',
                interactive: true,
    title: 'Titik Centroid Data Banjir Sumut kab-kota<br />\
    <img src="styles/legend/TitikCentroidDataBanjirSumutkabkota_3_0.png" /> Sangat Jarang<br />\
    <img src="styles/legend/TitikCentroidDataBanjirSumutkabkota_3_1.png" /> Jarang<br />\
    <img src="styles/legend/TitikCentroidDataBanjirSumutkabkota_3_2.png" /> Cukup Sering<br />\
    <img src="styles/legend/TitikCentroidDataBanjirSumutkabkota_3_3.png" /> Sering<br />\
    <img src="styles/legend/TitikCentroidDataBanjirSumutkabkota_3_4.png" /> Sangat Sering<br />' });
var format_Peta_Desa_Rawan_Bencana_Alam_Banjir_Sumatera_Utara_4 = new ol.format.GeoJSON();
var features_Peta_Desa_Rawan_Bencana_Alam_Banjir_Sumatera_Utara_4 = format_Peta_Desa_Rawan_Bencana_Alam_Banjir_Sumatera_Utara_4.readFeatures(json_Peta_Desa_Rawan_Bencana_Alam_Banjir_Sumatera_Utara_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Peta_Desa_Rawan_Bencana_Alam_Banjir_Sumatera_Utara_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Peta_Desa_Rawan_Bencana_Alam_Banjir_Sumatera_Utara_4.addFeatures(features_Peta_Desa_Rawan_Bencana_Alam_Banjir_Sumatera_Utara_4);
cluster_Peta_Desa_Rawan_Bencana_Alam_Banjir_Sumatera_Utara_4 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_Peta_Desa_Rawan_Bencana_Alam_Banjir_Sumatera_Utara_4
});
var lyr_Peta_Desa_Rawan_Bencana_Alam_Banjir_Sumatera_Utara_4 = new ol.layer.Vector({
                declutter: false,
                source:cluster_Peta_Desa_Rawan_Bencana_Alam_Banjir_Sumatera_Utara_4, 
                style: style_Peta_Desa_Rawan_Bencana_Alam_Banjir_Sumatera_Utara_4,
                popuplayertitle: 'Peta_Desa_Rawan_Bencana_Alam_Banjir_Sumatera_Utara',
                interactive: true,
                title: '<img src="styles/legend/Peta_Desa_Rawan_Bencana_Alam_Banjir_Sumatera_Utara_4.png" /> Peta_Desa_Rawan_Bencana_Alam_Banjir_Sumatera_Utara'
            });

lyr_OSMStandard_0.setVisible(true);lyr_Desa_Rawan_Banjir_Provinsi_Sumatera_Utara_KelurahanDesa_1.setVisible(true);lyr_Grafik_Lighnest_Data_Banjir_Sumut_KabKota_2.setVisible(true);lyr_TitikCentroidDataBanjirSumutkabkota_3.setVisible(true);lyr_Peta_Desa_Rawan_Bencana_Alam_Banjir_Sumatera_Utara_4.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Desa_Rawan_Banjir_Provinsi_Sumatera_Utara_KelurahanDesa_1,lyr_Grafik_Lighnest_Data_Banjir_Sumut_KabKota_2,lyr_TitikCentroidDataBanjirSumutkabkota_3,lyr_Peta_Desa_Rawan_Bencana_Alam_Banjir_Sumatera_Utara_4];
lyr_Desa_Rawan_Banjir_Provinsi_Sumatera_Utara_KelurahanDesa_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Nama_Desa': 'Nama_Desa', 'FCODE': 'FCODE', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'KDCPUM': 'KDCPUM', 'KDEPUM': 'KDEPUM', 'KDPKAB': 'KDPKAB', 'KDPPUM': 'KDPPUM', 'TIPADM': 'TIPADM', 'Kecamatan': 'Kecamatan', 'Kelurahan_': 'Kelurahan_', 'Kabupaten': 'Kabupaten', 'Provinsi': 'Provinsi', 'UUPP': 'UUPP', 'LUAS': 'LUAS', 'Desa_Banjir_Sumut_LATITUDE': 'Desa_Banjir_Sumut_LATITUDE', 'Desa_Banjir_Sumut_LONGITUDE': 'Desa_Banjir_Sumut_LONGITUDE', 'Desa_Banjir_Sumut_KATERGOTY BANJIR': 'Desa_Banjir_Sumut_KATERGOTY BANJIR', 'Desa_Banjir_Sumut_JUMLAH_PENDUDUK': 'Desa_Banjir_Sumut_JUMLAH_PENDUDUK', 'Desa_Banjir_Sumut_TINGKAT KERAWANAN': 'Desa_Banjir_Sumut_TINGKAT KERAWANAN', 'Desa_Banjir_Sumut_JUMLAH KORBAN': 'Desa_Banjir_Sumut_JUMLAH KORBAN', 'Desa_Banjir_Sumut_BANJIR 2016 - 2022': 'Desa_Banjir_Sumut_BANJIR 2016 - 2022', 'Desa_Banjir_Sumut_BANJIR 2023': 'Desa_Banjir_Sumut_BANJIR 2023', 'Desa_Banjir_Sumut_BANJIR 2024': 'Desa_Banjir_Sumut_BANJIR 2024', 'Desa_Banjir_Sumut_BANJIR 2025': 'Desa_Banjir_Sumut_BANJIR 2025', 'Desa_Banjir_Sumut_KEPALA DESA': 'Desa_Banjir_Sumut_KEPALA DESA', 'Desa_Banjir_Sumut_KODE POS': 'Desa_Banjir_Sumut_KODE POS', 'Desa_Banjir_Sumut_TINGGI DPL': 'Desa_Banjir_Sumut_TINGGI DPL', 'Desa_Banjir_Sumut_PHOTO/GAMBAR': 'Desa_Banjir_Sumut_PHOTO/GAMBAR', });
lyr_Grafik_Lighnest_Data_Banjir_Sumut_KabKota_2.set('fieldAliases', {'Kabupaten_': 'Kabupaten_', 'FCODE': 'FCODE', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'KDPKAB': 'KDPKAB', 'KDPPUM': 'KDPPUM', 'LUASWH': 'LUASWH', 'TIPADM': 'TIPADM', 'Kabupaten': 'Kabupaten', 'Provinsi': 'Provinsi', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'ID': 'ID', 'BANJIR2022': 'BANJIR2022', 'BANJIR2023': 'BANJIR2023', 'BANJIR2024': 'BANJIR2024', 'Sumber_202': 'Sumber_202', 'Sumber-202': 'Sumber-202', 'Sumber_202_1': 'Sumber_202_1', });
lyr_TitikCentroidDataBanjirSumutkabkota_3.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'KDPKAB': 'KDPKAB', 'KDPPUM': 'KDPPUM', 'LUASWH': 'LUASWH', 'TIPADM': 'TIPADM', 'Kabupaten': 'Kabupaten', 'Provinsi': 'Provinsi', 'WIADKK': 'WIADKK', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'ID': 'ID', '"Data-Banj': '"Data-Banj', '"Data_Banj': '"Data_Banj', '"Data-Banj_1': '"Data-Banj_1', '"Sumber-22': '"Sumber-22', '"Sumber_23': '"Sumber_23', '"Sumber-24': '"Sumber-24', });
lyr_Peta_Desa_Rawan_Bencana_Alam_Banjir_Sumatera_Utara_4.set('fieldAliases', {'NO': 'NO', 'ID': 'ID', 'NAMA DESA': 'NAMA DESA', 'KECAMATAN': 'KECAMATAN', 'KABUPATEN': 'KABUPATEN', 'PROVINSI': 'PROVINSI', 'LATITUDE': 'LATITUDE', 'LONGITUDE': 'LONGITUDE', 'KATERGOTY': 'KATERGOTY', 'JUMLAH_PEN': 'JUMLAH_PEN', 'TINGKAT KE': 'TINGKAT KE', 'JUMLAH KOR': 'JUMLAH KOR', 'BANJIR-21\'': 'BANJIR-21\'', 'BANJIR_22': 'BANJIR_22', 'BANJIR-23': 'BANJIR-23', 'BANJIR_24': 'BANJIR_24', 'KEPALA DES': 'KEPALA DES', 'KODE POS': 'KODE POS', 'TINGGI DPL': 'TINGGI DPL', 'PHOTO/GAMB': 'PHOTO/GAMB', 'Gambar': 'Gambar', 'FOTO': 'FOTO', });
lyr_Desa_Rawan_Banjir_Provinsi_Sumatera_Utara_KelurahanDesa_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'Nama_Desa': 'TextEdit', 'FCODE': 'TextEdit', 'METADATA': 'TextEdit', 'SRS_ID': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDPKAB': 'TextEdit', 'KDPPUM': 'TextEdit', 'TIPADM': 'TextEdit', 'Kecamatan': 'TextEdit', 'Kelurahan_': 'TextEdit', 'Kabupaten': 'TextEdit', 'Provinsi': 'TextEdit', 'UUPP': 'TextEdit', 'LUAS': 'TextEdit', 'Desa_Banjir_Sumut_LATITUDE': 'TextEdit', 'Desa_Banjir_Sumut_LONGITUDE': 'TextEdit', 'Desa_Banjir_Sumut_KATERGOTY BANJIR': 'TextEdit', 'Desa_Banjir_Sumut_JUMLAH_PENDUDUK': 'TextEdit', 'Desa_Banjir_Sumut_TINGKAT KERAWANAN': 'TextEdit', 'Desa_Banjir_Sumut_JUMLAH KORBAN': 'TextEdit', 'Desa_Banjir_Sumut_BANJIR 2016 - 2022': 'TextEdit', 'Desa_Banjir_Sumut_BANJIR 2023': 'TextEdit', 'Desa_Banjir_Sumut_BANJIR 2024': 'TextEdit', 'Desa_Banjir_Sumut_BANJIR 2025': 'TextEdit', 'Desa_Banjir_Sumut_KEPALA DESA': 'TextEdit', 'Desa_Banjir_Sumut_KODE POS': 'TextEdit', 'Desa_Banjir_Sumut_TINGGI DPL': 'TextEdit', 'Desa_Banjir_Sumut_PHOTO/GAMBAR': 'TextEdit', });
lyr_Grafik_Lighnest_Data_Banjir_Sumut_KabKota_2.set('fieldImages', {'Kabupaten_': 'TextEdit', 'FCODE': 'TextEdit', 'METADATA': 'TextEdit', 'SRS_ID': 'TextEdit', 'KDPKAB': 'TextEdit', 'KDPPUM': 'TextEdit', 'LUASWH': 'TextEdit', 'TIPADM': 'TextEdit', 'Kabupaten': 'TextEdit', 'Provinsi': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', 'ID': 'TextEdit', 'BANJIR2022': 'TextEdit', 'BANJIR2023': 'TextEdit', 'BANJIR2024': 'TextEdit', 'Sumber_202': '', 'Sumber-202': '', 'Sumber_202_1': '', });
lyr_TitikCentroidDataBanjirSumutkabkota_3.set('fieldImages', {'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'METADATA': 'TextEdit', 'SRS_ID': 'TextEdit', 'KDPKAB': 'TextEdit', 'KDPPUM': 'TextEdit', 'LUASWH': 'TextEdit', 'TIPADM': 'TextEdit', 'Kabupaten': 'TextEdit', 'Provinsi': 'TextEdit', 'WIADKK': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', 'ID': 'TextEdit', '"Data-Banj': 'TextEdit', '"Data_Banj': 'TextEdit', '"Data-Banj_1': 'TextEdit', '"Sumber-22': 'TextEdit', '"Sumber_23': 'TextEdit', '"Sumber-24': 'TextEdit', });
lyr_Peta_Desa_Rawan_Bencana_Alam_Banjir_Sumatera_Utara_4.set('fieldImages', {'NO': 'TextEdit', 'ID': 'TextEdit', 'NAMA DESA': 'TextEdit', 'KECAMATAN': 'TextEdit', 'KABUPATEN': 'TextEdit', 'PROVINSI': 'TextEdit', 'LATITUDE': 'TextEdit', 'LONGITUDE': 'TextEdit', 'KATERGOTY': 'TextEdit', 'JUMLAH_PEN': 'TextEdit', 'TINGKAT KE': 'TextEdit', 'JUMLAH KOR': 'TextEdit', 'BANJIR-21\'': 'TextEdit', 'BANJIR_22': 'TextEdit', 'BANJIR-23': 'TextEdit', 'BANJIR_24': 'TextEdit', 'KEPALA DES': 'TextEdit', 'KODE POS': 'TextEdit', 'TINGGI DPL': 'TextEdit', 'PHOTO/GAMB': 'TextEdit', 'Gambar': 'ExternalResource', 'FOTO': 'ExternalResource', });
lyr_Desa_Rawan_Banjir_Provinsi_Sumatera_Utara_KelurahanDesa_1.set('fieldLabels', {'OBJECTID': 'no label', 'Nama_Desa': 'header label - visible with data', 'FCODE': 'hidden field', 'METADATA': 'hidden field', 'SRS_ID': 'hidden field', 'KDCPUM': 'hidden field', 'KDEPUM': 'hidden field', 'KDPKAB': 'hidden field', 'KDPPUM': 'hidden field', 'TIPADM': 'hidden field', 'Kecamatan': 'inline label - always visible', 'Kelurahan_': 'inline label - always visible', 'Kabupaten': 'inline label - always visible', 'Provinsi': 'inline label - always visible', 'UUPP': 'no label', 'LUAS': 'no label', 'Desa_Banjir_Sumut_LATITUDE': 'no label', 'Desa_Banjir_Sumut_LONGITUDE': 'no label', 'Desa_Banjir_Sumut_KATERGOTY BANJIR': 'inline label - always visible', 'Desa_Banjir_Sumut_JUMLAH_PENDUDUK': 'inline label - always visible', 'Desa_Banjir_Sumut_TINGKAT KERAWANAN': 'inline label - always visible', 'Desa_Banjir_Sumut_JUMLAH KORBAN': 'inline label - always visible', 'Desa_Banjir_Sumut_BANJIR 2016 - 2022': 'inline label - always visible', 'Desa_Banjir_Sumut_BANJIR 2023': 'inline label - always visible', 'Desa_Banjir_Sumut_BANJIR 2024': 'inline label - always visible', 'Desa_Banjir_Sumut_BANJIR 2025': 'inline label - always visible', 'Desa_Banjir_Sumut_KEPALA DESA': 'inline label - always visible', 'Desa_Banjir_Sumut_KODE POS': 'inline label - always visible', 'Desa_Banjir_Sumut_TINGGI DPL': 'inline label - always visible', 'Desa_Banjir_Sumut_PHOTO/GAMBAR': 'inline label - always visible', });
lyr_Grafik_Lighnest_Data_Banjir_Sumut_KabKota_2.set('fieldLabels', {'Kabupaten_': 'inline label - always visible', 'FCODE': 'no label', 'METADATA': 'no label', 'SRS_ID': 'no label', 'KDPKAB': 'no label', 'KDPPUM': 'no label', 'LUASWH': 'no label', 'TIPADM': 'no label', 'Kabupaten': 'inline label - always visible', 'Provinsi': 'inline label - always visible', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', 'ID': 'no label', 'BANJIR2022': 'inline label - always visible', 'BANJIR2023': 'inline label - always visible', 'BANJIR2024': 'inline label - always visible', 'Sumber_202': 'no label', 'Sumber-202': 'no label', 'Sumber_202_1': 'no label', });
lyr_TitikCentroidDataBanjirSumutkabkota_3.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'no label', 'METADATA': 'no label', 'SRS_ID': 'no label', 'KDPKAB': 'no label', 'KDPPUM': 'no label', 'LUASWH': 'no label', 'TIPADM': 'no label', 'Kabupaten': 'no label', 'Provinsi': 'no label', 'WIADKK': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', 'ID': 'no label', '"Data-Banj': 'no label', '"Data_Banj': 'no label', '"Data-Banj_1': 'inline label - always visible', '"Sumber-22': 'no label', '"Sumber_23': 'no label', '"Sumber-24': 'no label', });
lyr_Peta_Desa_Rawan_Bencana_Alam_Banjir_Sumatera_Utara_4.set('fieldLabels', {'NO': 'inline label - always visible', 'ID': 'hidden field', 'NAMA DESA': 'header label - always visible', 'KECAMATAN': 'inline label - always visible', 'KABUPATEN': 'inline label - always visible', 'PROVINSI': 'inline label - always visible', 'LATITUDE': 'inline label - always visible', 'LONGITUDE': 'inline label - always visible', 'KATERGOTY': 'inline label - always visible', 'JUMLAH_PEN': 'inline label - always visible', 'TINGKAT KE': 'inline label - always visible', 'JUMLAH KOR': 'inline label - always visible', 'BANJIR-21\'': 'inline label - always visible', 'BANJIR_22': 'inline label - always visible', 'BANJIR-23': 'inline label - always visible', 'BANJIR_24': 'inline label - always visible', 'KEPALA DES': 'inline label - always visible', 'KODE POS': 'inline label - always visible', 'TINGGI DPL': 'inline label - always visible', 'PHOTO/GAMB': 'inline label - always visible', 'Gambar': 'hidden field', 'FOTO': 'inline label - always visible', });
lyr_Peta_Desa_Rawan_Bencana_Alam_Banjir_Sumatera_Utara_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});