using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using BlogApp.Models;

namespace server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BlogAppController : ControllerBase
    {
        private readonly BlogAppContext _context;

        public BlogAppController(BlogAppContext context)
        {
            _context = context;
        }

        // GET: api/BlogApp
        [HttpGet]
        public async Task<ActionResult<IEnumerable<BlogAppItems>>> GetBlogAppItems()
        {
          if (_context.BlogAppItems == null)
          {
              return NotFound();
          }
            return await _context.BlogAppItems.ToListAsync();
        }

        // GET: api/BlogApp/5
        [HttpGet("{id}")]
        public async Task<ActionResult<BlogAppItems>> GetBlogAppItems(long id)
        {
          if (_context.BlogAppItems == null)
          {
              return NotFound();
          }
            var blogAppItems = await _context.BlogAppItems.FindAsync(id);

            if (blogAppItems == null)
            {
                return NotFound();
            }

            return blogAppItems;
        }

        // PUT: api/BlogApp/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutBlogAppItems(long id, BlogAppItems blogAppItems)
        {
            if (id != blogAppItems.Id)
            {
                return BadRequest();
            }

            _context.Entry(blogAppItems).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!BlogAppItemsExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/BlogApp
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<BlogAppItems>> PostBlogAppItems(BlogAppItems blogAppItems)
        {
          if (_context.BlogAppItems == null)
          {
              return Problem("Entity set 'BlogAppContext.BlogAppItems'  is null.");
          }
            _context.BlogAppItems.Add(blogAppItems);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetBlogAppItems", new { id = blogAppItems.Id }, blogAppItems);
        }

        // DELETE: api/BlogApp/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteBlogAppItems(long id)
        {
            if (_context.BlogAppItems == null)
            {
                return NotFound();
            }
            var blogAppItems = await _context.BlogAppItems.FindAsync(id);
            if (blogAppItems == null)
            {
                return NotFound();
            }

            _context.BlogAppItems.Remove(blogAppItems);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool BlogAppItemsExists(long id)
        {
            return (_context.BlogAppItems?.Any(e => e.Id == id)).GetValueOrDefault();
        }
    }
}
