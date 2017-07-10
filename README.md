# SimplePaging
SimplePaging is  a <i>simple</i> paging component designed to efficiently implement list paging in Angular2.

# How to Implement

## Parent Component

Add a reference to the pager component and pass in an object of Paging...

```
app-paging [paging]='pager' (pagerToList)='pageNavigate($event)'></app-paging>
```

```
// Paging
  pager: Paging;

  constructor() { 
     // Configure the pager
    this.pager = new Paging();
    this.pager.pageSize = 2000;
    this.pager.pageNumber = 1;
  }

  // Receives an object of Paging to submit a new offset request to the API
  pageNavigate(pager: Paging) {
    this.pager = pager;
    this.callToApi();
  }
```  
  
## Web API Paged Query example

  ```
  [HttpGet]
    [Route("api/items/paged/{offset}/{limit}")]
    public IEnumerable<MODEL> GetOutlookItems([FromRoute] int offset, [FromRoute] int limit)
    {
        return _context.DBSETOFCONTEXTMODEL.ToList()
        .Skip(offset)
        .Take(limit);
        //.OrderByDescending(i => i.Id);
    }
    
   ```
  
