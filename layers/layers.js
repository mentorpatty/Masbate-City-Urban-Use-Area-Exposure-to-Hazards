var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Masbate_StormSurge_SSA4copy_1 = new ol.format.GeoJSON();
var features_Masbate_StormSurge_SSA4copy_1 = format_Masbate_StormSurge_SSA4copy_1.readFeatures(json_Masbate_StormSurge_SSA4copy_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Masbate_StormSurge_SSA4copy_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Masbate_StormSurge_SSA4copy_1.addFeatures(features_Masbate_StormSurge_SSA4copy_1);
var lyr_Masbate_StormSurge_SSA4copy_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Masbate_StormSurge_SSA4copy_1, 
                style: style_Masbate_StormSurge_SSA4copy_1,
                popuplayertitle: 'Masbate_StormSurge_SSA4 copy',
                interactive: true,
                title: '<img src="styles/legend/Masbate_StormSurge_SSA4copy_1.png" /> Masbate_StormSurge_SSA4 copy'
            });
var format_RoadnetworkforLLU_2 = new ol.format.GeoJSON();
var features_RoadnetworkforLLU_2 = format_RoadnetworkforLLU_2.readFeatures(json_RoadnetworkforLLU_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RoadnetworkforLLU_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RoadnetworkforLLU_2.addFeatures(features_RoadnetworkforLLU_2);
var lyr_RoadnetworkforLLU_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RoadnetworkforLLU_2, 
                style: style_RoadnetworkforLLU_2,
                popuplayertitle: 'Road network for LLU',
                interactive: true,
    title: 'Road network for LLU<br />\
    <img src="styles/legend/RoadnetworkforLLU_2_0.png" /> Barangay Road<br />\
    <img src="styles/legend/RoadnetworkforLLU_2_1.png" /> City Road<br />\
    <img src="styles/legend/RoadnetworkforLLU_2_2.png" /> National Road<br />\
    <img src="styles/legend/RoadnetworkforLLU_2_3.png" /> Provincial Road<br />\
    <img src="styles/legend/RoadnetworkforLLU_2_4.png" /> <br />' });
var format_UrbanUseAreas_2021copycopycopy_3 = new ol.format.GeoJSON();
var features_UrbanUseAreas_2021copycopycopy_3 = format_UrbanUseAreas_2021copycopycopy_3.readFeatures(json_UrbanUseAreas_2021copycopycopy_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_UrbanUseAreas_2021copycopycopy_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UrbanUseAreas_2021copycopycopy_3.addFeatures(features_UrbanUseAreas_2021copycopycopy_3);
var lyr_UrbanUseAreas_2021copycopycopy_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UrbanUseAreas_2021copycopycopy_3, 
                style: style_UrbanUseAreas_2021copycopycopy_3,
                popuplayertitle: 'Urban Use Areas_2021 copy copy copy',
                interactive: true,
                title: '<img src="styles/legend/UrbanUseAreas_2021copycopycopy_3.png" /> Urban Use Areas_2021 copy copy copy'
            });
var format_Masbate_StormSurge_SSA4_4 = new ol.format.GeoJSON();
var features_Masbate_StormSurge_SSA4_4 = format_Masbate_StormSurge_SSA4_4.readFeatures(json_Masbate_StormSurge_SSA4_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Masbate_StormSurge_SSA4_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Masbate_StormSurge_SSA4_4.addFeatures(features_Masbate_StormSurge_SSA4_4);
var lyr_Masbate_StormSurge_SSA4_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Masbate_StormSurge_SSA4_4, 
                style: style_Masbate_StormSurge_SSA4_4,
                popuplayertitle: 'Masbate_StormSurge_SSA4',
                interactive: true,
                title: '<img src="styles/legend/Masbate_StormSurge_SSA4_4.png" /> Masbate_StormSurge_SSA4'
            });
var format_RiversandCreeks_5 = new ol.format.GeoJSON();
var features_RiversandCreeks_5 = format_RiversandCreeks_5.readFeatures(json_RiversandCreeks_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RiversandCreeks_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RiversandCreeks_5.addFeatures(features_RiversandCreeks_5);
var lyr_RiversandCreeks_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RiversandCreeks_5, 
                style: style_RiversandCreeks_5,
                popuplayertitle: 'Rivers and Creeks',
                interactive: true,
                title: '<img src="styles/legend/RiversandCreeks_5.png" /> Rivers and Creeks'
            });
var format_MasbateCityMunibdry_strokeonly_6 = new ol.format.GeoJSON();
var features_MasbateCityMunibdry_strokeonly_6 = format_MasbateCityMunibdry_strokeonly_6.readFeatures(json_MasbateCityMunibdry_strokeonly_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MasbateCityMunibdry_strokeonly_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MasbateCityMunibdry_strokeonly_6.addFeatures(features_MasbateCityMunibdry_strokeonly_6);
var lyr_MasbateCityMunibdry_strokeonly_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MasbateCityMunibdry_strokeonly_6, 
                style: style_MasbateCityMunibdry_strokeonly_6,
                popuplayertitle: 'Masbate City Muni bdry_stroke only',
                interactive: true,
                title: '<img src="styles/legend/MasbateCityMunibdry_strokeonly_6.png" /> Masbate City Muni bdry_stroke only'
            });
var format_Barangayboundary_7 = new ol.format.GeoJSON();
var features_Barangayboundary_7 = format_Barangayboundary_7.readFeatures(json_Barangayboundary_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Barangayboundary_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Barangayboundary_7.addFeatures(features_Barangayboundary_7);
var lyr_Barangayboundary_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Barangayboundary_7, 
                style: style_Barangayboundary_7,
                popuplayertitle: 'Barangay boundary',
                interactive: true,
                title: '<img src="styles/legend/Barangayboundary_7.png" /> Barangay boundary'
            });
var group_ExposureUnits = new ol.layer.Group({
                                layers: [lyr_RoadnetworkforLLU_2,lyr_UrbanUseAreas_2021copycopycopy_3,],
                                fold: 'open',
                                title: 'Exposure Units'});

lyr_GoogleSatellite_0.setVisible(true);lyr_Masbate_StormSurge_SSA4copy_1.setVisible(true);lyr_RoadnetworkforLLU_2.setVisible(true);lyr_UrbanUseAreas_2021copycopycopy_3.setVisible(true);lyr_Masbate_StormSurge_SSA4_4.setVisible(true);lyr_RiversandCreeks_5.setVisible(true);lyr_MasbateCityMunibdry_strokeonly_6.setVisible(true);lyr_Barangayboundary_7.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_Masbate_StormSurge_SSA4copy_1,group_ExposureUnits,lyr_Masbate_StormSurge_SSA4_4,lyr_RiversandCreeks_5,lyr_MasbateCityMunibdry_strokeonly_6,lyr_Barangayboundary_7];
lyr_Masbate_StormSurge_SSA4copy_1.set('fieldAliases', {'HAZ': 'HAZ', });
lyr_RoadnetworkforLLU_2.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'R_Class': 'R_Class', 'R_Type': 'R_Type', 'R_Imp': 'R_Imp', 'R_Con': 'R_Con', 'R_Width': 'R_Width', 'City_Mun': 'City_Mun', 'Brgy_Name': 'Brgy_Name', 'Remarks': 'Remarks', 'R_ID': 'R_ID', 'R_LengthM': 'R_LengthM', });
lyr_UrbanUseAreas_2021copycopycopy_3.set('fieldAliases', {'province': 'province', 'city_mun': 'city_mun', 'index_melu': 'index_melu', 'main_elu': 'main_elu', 'code_melu': 'code_melu', 'sub_elu': 'sub_elu', 'code_selu': 'code_selu', 'name_desc': 'name_desc', 'area_ha': 'area_ha', 'area_sqm': 'area_sqm', 'remarks': 'remarks', });
lyr_Masbate_StormSurge_SSA4_4.set('fieldAliases', {'HAZ': 'HAZ', });
lyr_RiversandCreeks_5.set('fieldAliases', {'fid': 'fid', 'id': 'id', });
lyr_MasbateCityMunibdry_strokeonly_6.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'Brgy_Name': 'Brgy_Name', 'Area_has': 'Area_has', });
lyr_Barangayboundary_7.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'Brgy_Name': 'Brgy_Name', 'Area_has': 'Area_has', });
lyr_Masbate_StormSurge_SSA4copy_1.set('fieldImages', {'HAZ': '', });
lyr_RoadnetworkforLLU_2.set('fieldImages', {'fid': '', 'Name': '', 'R_Class': '', 'R_Type': '', 'R_Imp': '', 'R_Con': '', 'R_Width': '', 'City_Mun': '', 'Brgy_Name': '', 'Remarks': '', 'R_ID': '', 'R_LengthM': '', });
lyr_UrbanUseAreas_2021copycopycopy_3.set('fieldImages', {'province': '', 'city_mun': '', 'index_melu': '', 'main_elu': '', 'code_melu': '', 'sub_elu': '', 'code_selu': '', 'name_desc': '', 'area_ha': '', 'area_sqm': '', 'remarks': '', });
lyr_Masbate_StormSurge_SSA4_4.set('fieldImages', {'HAZ': '', });
lyr_RiversandCreeks_5.set('fieldImages', {'fid': '', 'id': '', });
lyr_MasbateCityMunibdry_strokeonly_6.set('fieldImages', {'fid': '', 'ID': '', 'Brgy_Name': '', 'Area_has': '', });
lyr_Barangayboundary_7.set('fieldImages', {'fid': 'TextEdit', 'ID': 'TextEdit', 'Brgy_Name': 'TextEdit', 'Area_has': 'TextEdit', });
lyr_Masbate_StormSurge_SSA4copy_1.set('fieldLabels', {'HAZ': 'no label', });
lyr_RoadnetworkforLLU_2.set('fieldLabels', {'fid': 'no label', 'Name': 'no label', 'R_Class': 'no label', 'R_Type': 'no label', 'R_Imp': 'no label', 'R_Con': 'no label', 'R_Width': 'no label', 'City_Mun': 'no label', 'Brgy_Name': 'no label', 'Remarks': 'no label', 'R_ID': 'no label', 'R_LengthM': 'no label', });
lyr_UrbanUseAreas_2021copycopycopy_3.set('fieldLabels', {'province': 'no label', 'city_mun': 'inline label - always visible', 'index_melu': 'no label', 'main_elu': 'no label', 'code_melu': 'no label', 'sub_elu': 'no label', 'code_selu': 'no label', 'name_desc': 'no label', 'area_ha': 'no label', 'area_sqm': 'no label', 'remarks': 'no label', });
lyr_Masbate_StormSurge_SSA4_4.set('fieldLabels', {'HAZ': 'no label', });
lyr_RiversandCreeks_5.set('fieldLabels', {'fid': 'hidden field', 'id': 'no label', });
lyr_MasbateCityMunibdry_strokeonly_6.set('fieldLabels', {'fid': 'no label', 'ID': 'no label', 'Brgy_Name': 'no label', 'Area_has': 'no label', });
lyr_Barangayboundary_7.set('fieldLabels', {'fid': 'no label', 'ID': 'no label', 'Brgy_Name': 'header label - always visible', 'Area_has': 'no label', });
lyr_Barangayboundary_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});