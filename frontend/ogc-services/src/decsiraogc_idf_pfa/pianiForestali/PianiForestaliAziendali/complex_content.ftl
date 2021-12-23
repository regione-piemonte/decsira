<table class="featureInfo">
  <caption class="featureInfo">Piani Forestali Aziendali</caption>
  <#list features as feature>
    <tr>
	  <th>Denominazione</th>
	  <th>Provincia</th>
	  <th>Comuni interessati</th>
	  <th>Gestore</th>
	  <th>Proprietà</th>
	  <th>Fonte di finanziamento</th>
	  <th>Data inizio validità</th>
	  <th>Data fine validità</th>
    </tr>
    <tr>
	  <td>${feature.denominazione.value}</td>
	  <td>${feature.provincia.value}</td>
	  <td>${feature.comuniInteressati.value}</td>
	  <td>${feature.gestore.value}</td>
	  <td>${feature.descrProprieta.value}</td>
	  <td>${feature.fonteFinanziamento.value}</td>
	  <td>${feature.dataInizioValidita.value}</td>
	  <td>${feature.dataFineValidità.value}</td>
    </tr>
  </#list>
</table>
