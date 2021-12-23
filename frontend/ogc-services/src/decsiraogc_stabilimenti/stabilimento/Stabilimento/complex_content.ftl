<table class="featureInfo">
  <caption class="featureInfo">Stabilimenti soggetti ad autorizzazione ambientale</caption>
  <#list features as feature>
    <tr>
	  <th>Denominazione stabilimento</th>
	  <th>Provincia</th>
	  <th>Comune</th>
	  <th>Codice Sira Stabilimento</th>
	  <th>Indirizzo</th>
	  <th>Ambito tematico</th>
    </tr>
    <tr>      
	  <td>${feature.nome.value}</td>
	  <td>${feature.desProvincia.value}</td>
	  <td>${feature.nomeComune.value}</td>
	  <td>${feature.codiceSira.value}</td>
	  <td>${feature.indirizzo.value}</td>
	  <td>${feature.tematica.value}</td>
    </tr>
  </#list>
</table>