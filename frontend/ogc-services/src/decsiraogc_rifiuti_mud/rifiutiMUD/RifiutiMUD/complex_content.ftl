<table class="featureInfo">
  <caption class="featureInfo">Rifiuti - Modello Unico Dichiarazione ambientale (MUD)</caption>
  <#list features as feature>
    <tr>
      <th>Anno MUD</th>
	  <th>Tipologia Operazione</th>
	  <th>Descrizione Operazione di Gestione</th>
	  <th>Codice EER</th>
	  <th>Descrizione EER</th>
	  <th>Pericolosità</th>
	  <th>Tipologia impiantistica</th>
	  <th>Quantità Prodotta (t)</th>
	  <th>Quantità Ricevuta (t)</th>
	  <th>Quantità Consegnata (t)</th>
	  <th>Quantità Gestita (t)</th>
    </tr>
    <tr>
      <td>${feature.annoanno.value}</td>
	  <td>${feature.tipoOperazione.value}</td>
	  <td>${feature.tipoGestione.value}</td>
	  <td>${feature.codiceCER.value}</td>
	  <td>${feature.desCER.value}</td>
	  <td>${feature.pericolosita.value}</td>
	  <td>${feature.elencoTipologiaImpRifiuto.value}</td>
	  <td>${feature.qtaProdotta.value}</td>
	  <td>${feature.qtaRicevuta.value}</td>
	  <td>${feature.qtaConsegnata.value}</td>
	  <td>${feature.qtaGestita.value}</td>
    </tr>
  </#list>
</table>