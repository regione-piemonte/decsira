<table class="featureInfo">
  <caption class="featureInfo">Serbatoi di accumulo</caption>
  <#list features as feature>
    <tr>
	  <th>Codice rilievo</th>
	  <th>Comune di localizzazione</th>
	  <th>Denominazione</th>
	  <th>Tipologia</th>
	  <th>Capacità di accumulo (m3)</th>
    </tr>
    <tr>
	  <td>${feature.codiceRilievoSerbatoio.value}</td>
	  <td>${feature.desComuneSerbatoio.value}</td>
	  <td>${feature.denominazioneSerbatoio.value}</td>
	  <td>${feature.desTipoSerbSerbatoio.value}</td>
	  <td>${feature.capacitaAccumuloSerbatoio.value}</td>
    </tr>
  </#list>
</table>