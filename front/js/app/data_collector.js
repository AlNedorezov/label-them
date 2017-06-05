/**
 * Created by Alexey Merzlikin on 08.04.2017.
 */

function DataCollector() {
    this.dataEntities = {};

    this.activeEntity = null;
}

class DataEntityToBeExported {
    constructor(entity) {
        /*global polygonId*/
        /*eslint no-undef: "error"*/
        this.points = polygons[entity.polygonId].pointsList;
        this.parameters = entity.parameters;
    }
    toString() {
        return JSON.stringify(this);
    }
}

DataCollector.prototype.addEntity = function (entity, id) {
    this.dataEntities[id] = entity;
};

DataCollector.prototype.selectEntity = function (id) {
    this.activeEntity = this.dataEntities[id];
};

DataCollector.prototype.getActiveEntity = function () {
    return this.activeEntity;
};


function DataEntity(polygonId) {
    /*global polygonId*/
    /*eslint no-undef: "error"*/
    this.polygonId = polygonId;
    this.parameters = {};
}

DataEntity.prototype.setParams = function (data) {
    this.parameters = Object.assign(this.parameters, data);
};

DataCollector.prototype.getJSON = function () {
    let dataEntities = [];
    /*global polygonId*/
    /*eslint no-undef: "error"*/
    for (let i = 0; i < polygonId; i++) {
        dataEntities.push(new DataEntityToBeExported(this.dataEntities[i]));
    }
    let json = JSON.stringify(dataEntities);
    window.thisTask.setSolutionOutputValue("result", json);
    return json;
};