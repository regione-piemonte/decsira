<table class="featureInfo">
  <caption class="featureInfo">Impianti Gestione Rifiuti: Recupero e Smaltimento (AIA o ex Art. 208 D.Lgs. 152/2006)</caption>
  <#list features as feature>
    <tr>
	  <th>Comune</th>
	  <th>Provincia</th>
	  <th>Codice Sira</th>
	  <th>Tipologia Impiantistica</th>
	  <th>Operazioni recupero</th>
	  <th>Operazioni smaltimento</th>
	  <th>Capacit&agrave; smaltimento (mc)</th>
	  <th>Capacit&agrave; smaltimento (t)</th>
    </tr>
    <tr>
	  <td>${feature.desComune.value}</td>
	  <td>${feature.desProvincia.value}</td>
	  <td>${feature.codiceSira.value}</td>
	  <td>${feature.elencoTipologiaImpiantisticaRifiuto.value}</td>
	  <td>${feature.elencoOperazioniRecupero.value}</td>
	  <td>${feature.elencoOperazioniSmaltimento.value}</td>
	  <td>${feature.capacitaSmaltMc.value}</td>
	  <td>${feature.capacitaSmaltT.value}</td>
    </tr>
  </#list>
</table>
