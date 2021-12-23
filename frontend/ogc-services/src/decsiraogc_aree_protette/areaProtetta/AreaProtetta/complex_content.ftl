<table class="featureInfo">
  <caption class="featureInfo">Aree protette e altre aree tutelate</caption>
  <#list features as feature>
    <tr>
	  <th>Codice L.r. 19/09</th>
	  <th>Nome area protetta</th>
	  <th>Tipo area protetta</th>
	  <th>Province interessate</th>
	  <th>Comuni interessati</th>
	  <th>Localita'</th>
	  <th>Superficie amministrativa (m²)</th>
	  <th>Perimetro amministrativo (m)</th>
	  <th>Ente gestore</th>
	  <th>Tipo ente</th>
	  <th>Tipo patrimonialita'</th>
	  <th>Codice INSPIRE</th>
	  <th>Codice EUAP</th>
	  <th>Legge istitutiva</th>
	  <th>Data istituzione</th>
	  <th>Data aggiornamento</th>
	  <th>Link legge istitutiva</th>
	  <th>Link normativa</th>
	  <th>Link piano</th>
	  <th>Link metadato</th>
	  <th>Link allegato</th>
    </tr>
    <tr>
	  <td>${feature.codiceAmministrativo.value}</td>
	  <td>${feature.nomeAreaProtetta.value}</td>
	  <td>${feature.descrTipoAreaProtetta.value}</td>
	  <td>${feature.provincia.value}</td>
	  <td>${feature.comuniInteressati.value}</td>
	  <td>${feature.descrizioneLocalita.value}</td>
	  <td>${feature.superficieAmministrativa.value}</td>
	  <td>${feature.perimetroAmministrativo.value}</td>
	  <td>${feature.descrEnteGestore.value}</td>
	  <td>${feature.descrTipoEnte.value}</td>
	  <td>${feature.descrTipoPatrimonialita.value}</td>
	  <td>${feature.idInspire.value}</td>
	  <td>${feature.codiceEuap.value}</td>
	  <td>${feature.leggeIstitutiva.value}</td>
	  <td>${feature.dataIstituzione.value}</td>
	  <td>${feature.dataAggiornIstituzionale.value}</td>
	  <td>${feature.urlLeggeIstitutiva.value}</td>
	  <td>${feature.urlNormativa.value}</td>
	  <td>${feature.urlPiano.value}</td>
	  <td>${feature.urlMetadato.value}</td>
	  <td>${feature.urlAllegato.value}</td>
    </tr>
  </#list>
</table>
