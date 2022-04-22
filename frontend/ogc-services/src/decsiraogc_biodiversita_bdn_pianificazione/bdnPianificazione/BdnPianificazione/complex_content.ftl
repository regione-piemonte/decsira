<table class="featureInfo">
  <caption class="featureInfo">Pianificazione e Normativa</caption>
  <#list features as feature>
    <tr>
          <th>Tipo di piano</th>
          <th>Tipo di area o sito</th>
          <th>Codice</th>
          <th>Nome</th>
          <th>Province</th>
          <th>Comuni</th>
    </tr>
    <tr>
          <td>${feature.descTipoPiano.value}</td>
          <td>${feature.tipoAreaSito.value}</td>
          <td>${feature.codiceSito.value}</td>
          <td>${feature.nomeSito.value}</td>
          <td>${feature.provinceIntereressate.value}</td>
          <td>${feature.comuniInteressati.value}</td>
    </tr>
  </#list>
</table>
