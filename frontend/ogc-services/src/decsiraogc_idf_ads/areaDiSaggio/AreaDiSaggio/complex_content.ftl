<table class="featureInfo">
  <caption class="featureInfo">Aree di Saggio</caption>
  <#list features as feature>
    <tr>
	  <th>Codice ADS</th>
	  <th>Tipologia di ADS</th>
	  <th>Ambito di rilievo</th>
	  <th>Dettaglio Ambito</th>
	  <th>Provincia</th>
	  <th>Comune</th>
	  <th>UTM est</th>
	  <th>UTM Nord</th>
	  <th>Proprietà</th>
	  <th>Esposizione</th>
	  <th>Quota (m)</th>
	  <th>Inclinazione in gradi</th>
	  <th>Categoria forestale</th>
	  <th>Tipo forestale</th>
    </tr>
    <tr>
	  <td>${feature.codiceAds.value}</td>
	  <td>${feature.descrTipoAds.value}</td>
	  <td>${feature.descrAmbito.value}</td>
	  <td>${feature.ambitoSpecifico.value}</td>
	  <td>${feature.denominazioneProvincia.value}</td>
	  <td>${feature.denominazioneComune.value}</td>
	  <td>${feature.utmEst.value}</td>
	  <td>${feature.utmNord.value}</td>
	  <td>${feature.descProprieta.value}</td>
	  <td>${feature.descEsposizione.value}</td>
	  <td>${feature.quota.value}</td>
	  <td>${feature.inclinazione.value}</td>
	  <td>${feature.descrCategoriaForestale.value}</td>
	  <td>${feature.descrTipoForestale.value}</td>
    </tr>
  </#list>
</table>
