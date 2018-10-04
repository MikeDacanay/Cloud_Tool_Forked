
var a = new Vue({
  el: '#intro',
  data: {
		// global: '',
		region: '',  
		sector: [],
		revenue:'',
  },
  computed:{
		region_pic: function(){
		}
  }
});



var b = new Vue({
  el: '',
    data: {
				CL02: {
					a:'',
					b:'',
					c:'',
					d:'',
					e:'',
					f:'',
				},
  	},
  	computed:{
			summary_user: function(){
				var summary_user=(b.CL02.a/180)+(b.CL02.b/180)+(b.CL02.c/180)+(b.CL02.d/180)+(b.CL02.e/180)+(b.CL02.f/180);
				summary_user=(summary_user/6)/7;
				return summary_user;
			},

		}
});


var c = new Vue({
  el: '#resclo2',
  data: {
  	sector:'',
		doing:{
		// Retrieves all industries overall cloud journey position from datasets.js			
			a1:{
				all: clo2_migrating.currently.tot,
			},
			b1:{
				all: clo2_developing.currently.tot,
			},
			c1:{
				all: clo2_integrating.currently.tot,
			},
			d1:{
				all: clo2_storing.currently.tot,
			},
			e1:{
				all: clo2_security.currently.tot,
			},
			f1:{
				all: clo2_analysis.currently.tot,
			},															
		},
	},
	computed:{
		// Retrieves sector's overall cloud journey position from datasets.js
		d_migrate: function(){
			var x = a._data.sector;
			var sector_average = 0;
			var dial_path = 0;
			for(var i=0; i < x.length;i++){
				sector_average = sector_average + clo2_migrating.currently[x[i]];				
			};
			sector_average = sector_average/x.length;
			dial_path=(60*(sector_average/100))+120;

			return dial_path;			
		},
		d_dev: function(){
			var x = a._data.sector;

			var sector_average = 0;
			var dial_path = 0;
			for(var i=0; i < x.length;i++){
				sector_average = sector_average + clo2_developing.currently[x[i]];				
			};
			sector_average = sector_average/x.length;
			dial_path=(60*(sector_average/100))+120;

			return dial_path;		
		},
		d_int: function(){
			var x = a._data.sector;

			var sector_average = 0;
			var dial_path = 0;
			for(var i=0; i < x.length;i++){
				sector_average = sector_average + clo2_integrating.currently[x[i]];				
			};
			sector_average = sector_average/x.length;
			dial_path=(60*(sector_average/100))+120;
						
			return dial_path;		
		},
		d_stor: function(){
			var x = a._data.sector;

			var sector_average = 0;
			var dial_path = 0;
			for(var i=0; i < x.length;i++){
				sector_average = sector_average + clo2_storing.currently[x[i]];				
			};
			sector_average = sector_average/x.length;
			dial_path=(60*(sector_average/100))+120;
						
			return dial_path;			
		},
		d_sec: function(){
			var x = a._data.sector;

			var sector_average = 0;
			var dial_path = 0;
			for(var i=0; i < x.length;i++){
				sector_average = sector_average + clo2_security.currently[x[i]];				
			};
			sector_average = sector_average/x.length;
			dial_path=(60*(sector_average/100))+120;

			return dial_path;		
		},
		d_an: function(){
			var x = a._data.sector;

			var sector_average = 0;
			var dial_path = 0;
			for(var i=0; i < x.length;i++){
				sector_average = sector_average + clo2_analysis.currently[x[i]];				
			};
			sector_average = sector_average/x.length;
			dial_path=(60*(sector_average/100))+120;

			return dial_path;		
		},
		summary_peers: function(){
			return (((c.d_migrate/180)+(c.d_dev/180)+(c.d_int/180)+(c.d_stor/180)+(c.d_sec/180)+(c.d_an/180))/6)/7;
		},
		c_migrate: function(){
			var x = a._data.sector;
			return clo2_migrating.plan[x];		
		},
		c_dev: function(){
			var x = a._data.sector;
			return clo2_developing.plan[x];		
		},
		c_int: function(){
			var x = a._data.sector;
			return clo2_integrating.plan[x];		
		},
		c_stor: function(){
			var x = a._data.sector;
			return clo2_storing.plan[x];		
		},
		c_sec: function(){
			var x = a._data.sector;
			return clo2_security.plan[x];		
		},
		c_an: function(){
			var x = a._data.sector;
			return clo2_analysis.plan[x];		
		},		
		n_migrate: function(){
			var x = a._data.sector;
			return clo2_migrating.not[x];		
		},
		n_dev: function(){
			var x = a._data.sector;
			return clo2_developing.not[x];		
		},
		n_int: function(){
			var x = a._data.sector;
			return clo2_integrating.not[x];		
		},
		n_stor: function(){
			var x = a._data.sector;
			return clo2_storing.not[x];		
		},
		n_sec: function(){
			var x = a._data.sector;
			return clo2_security.not[x];		
		},
		n_an: function(){
			var x = a._data.sector;
			return clo2_analysis.not[x];		
		},						
		// Returns user's cloud journey position i.e. doing=1, planning=2, not doing=3
		d_a: function(){
			if(b._data.CL02.a==="1"){
				return b._data.CL02.a
			}else{
				return null;
			}
		},
		d_b: function(){
			if(b._data.CL02.b==="1"){
				return b._data.CL02.b
			}else{
				return null;
			}
		},
		d_c: function(){
			if(b._data.CL02.c==="1"){
				return b._data.CL02.c
			}else{
				return null;
			}
		},
		d_d: function(){
			if(b._data.CL02.d==="1"){
				return b._data.CL02.d
			}else{
				return null;
			}
		},
		d_e: function(){
			if(b._data.CL02.e==="1"){
				return b._data.CL02.e
			}else{
				return null;
			}
		},
		d_f: function(){
			if(b._data.CL02.f==="1"){
				return b._data.CL02.f
			}else{
				return null;
			}
		},
		c_a: function(){
			if(b._data.CL02.a==="2"){
				return b._data.CL02.a
			}else{
				return null;
			}
		},
		c_b: function(){
			if(b._data.CL02.b==="2"){
				return b._data.CL02.b
			}else{
				return null;
			}
		},
		c_c: function(){
			if(b._data.CL02.c==="2"){
				return b._data.CL02.c
			}else{
				return null;
			}
		},
		c_d: function(){
			if(b._data.CL02.d==="2"){
				return b._data.CL02.d
			}else{
				return null;
			}
		},
		c_e: function(){
			if(b._data.CL02.e==="2"){
				return b._data.CL02.e
			}else{
				return null;
			}
		},
		c_f: function(){
			if(b._data.CL02.f==="2"){
				return b._data.CL02.f
			}else{
				return null;
			}
		},		
		n_a: function(){
			if(b._data.CL02.a==="3"){
				return b._data.CL02.a
			}else{
				return null;
			}
		},
		n_b: function(){
			if(b._data.CL02.b==="3"){
				return b._data.CL02.b
			}else{
				return null;
			}
		},
		n_c: function(){
			if(b._data.CL02.c==="3"){
				return b._data.CL02.c
			}else{
				return null;
			}
		},
		n_d: function(){
			if(b._data.CL02.d==="3"){
				return b._data.CL02.d
			}else{
				return null;
			}
		},
		n_e: function(){
			if(b._data.CL02.e==="3"){
				return b._data.CL02.e
			}else{
				return null;
			}
		},
		n_f: function(){
			if(b._data.CL02.f==="3"){
				return b._data.CL02.f
			}else{
				return null;
			}
		},								
	}
});

var d = new Vue({
  el: '#mig6',
  data: {
		mig6: {
			a:'',
			b:'',
			c:'',
			d:'',
			e:'',
		},
  },
  computed:{
		a_comp: function(){
			var x = a._data.sector;			
			var sector_average = 0;
			var dial_path = 0;
			for(var i=0; i < x.length;i++){
				sector_average = sector_average + mig6.a[x[i]];				
			};
			sector_average = sector_average/x.length;
			dial_path=180*(sector_average/7);

			return dial_path;			
		},  	
		b_comp: function(){
			var x = a._data.sector;			
			var sector_average = 0;
			var dial_path = 0;
			for(var i=0; i < x.length;i++){
				sector_average = sector_average + mig6.b[x[i]];				
			};
			sector_average = sector_average/x.length;
			dial_path=180*(sector_average/7);

			return dial_path;					
		},  
		c_comp: function(){
			var x = a._data.sector;			
			var sector_average = 0;
			var dial_path = 0;
			for(var i=0; i < x.length;i++){
				sector_average = sector_average + mig6.c[x[i]];				
			};
			sector_average = sector_average/x.length;
			dial_path=180*(sector_average/7);

			return dial_path;				
		},  
		d_comp: function(){
			var x = a._data.sector;			
			var sector_average = 0;
			var dial_path = 0;
			for(var i=0; i < x.length;i++){
				sector_average = sector_average + mig6.d[x[i]];				
			};
			sector_average = sector_average/x.length;
			dial_path=180*(sector_average/7);

			return dial_path;					
		},  
		e_comp: function(){
			var x = a._data.sector;			
			var sector_average = 0;
			var dial_path = 0;
			for(var i=0; i < x.length;i++){
				sector_average = sector_average + mig6.e[x[i]];				
			};
			sector_average = sector_average/x.length;
			dial_path=180*(sector_average/7);

			return dial_path;			
		},  
		summary_user: function(){
			return (((d.mig6.a/180)+(d.mig6.b/180)+(d.mig6.c/180)+(d.mig6.d/180)+(d.mig6.e/180))/5)/7;
		},
		summary_peers: function(){
			return (((d.a_comp/180)+(d.b_comp/180)+(d.c_comp/180)+(d.d_comp/180)+(d.e_comp/180))/5)/7;
		},									
	},
});

var e = new Vue({
  el: '#dev2',
  data: {
		dev2: {
			a:0,
			b:0,
			c:0,
			d:0,
			e:0,
		},
		tot: {
			a:5,                        
			b:4.7,
			c:5,
			d:4.9,
			e:4.8,
		},
  },
  computed:{
  	a1: function(){
			var x = a._data.sector;
			var sector_average = 0;
			var thermo_degree = 0;
			for(var i=0; i < x.length;i++){
				sector_average = sector_average + dev2.a[x[i]];	
			};
			sector_average=sector_average/x.length;
			thermo_degree=sector_average/7;
			thermo_degree=81-(69*thermo_degree);
  		return (thermo_degree + '%');
  	},
  	b1: function(){
			var x = a._data.sector;
			var sector_average = 0;
			var thermo_degree = 0;
			for(var i=0; i < x.length;i++){
				sector_average = sector_average + dev2.b[x[i]];	
			};
			sector_average=sector_average/x.length;
			thermo_degree=sector_average/7;
			thermo_degree=81-(69*thermo_degree);
  		return (thermo_degree + '%');
  	},
  	c1: function(){
			var x = a._data.sector;
			var sector_average = 0;
			var thermo_degree = 0;
			for(var i=0; i < x.length;i++){
				sector_average = sector_average + dev2.c[x[i]];	
			};
			sector_average=sector_average/x.length;
			thermo_degree=sector_average/7;
			thermo_degree=81-(69*thermo_degree);
  		return (thermo_degree + '%');
  	},
  	d1: function(){
			var x = a._data.sector;
			var sector_average = 0;
			var thermo_degree = 0;
			for(var i=0; i < x.length;i++){
				sector_average = sector_average + dev2.d[x[i]];	
			};
			sector_average=sector_average/x.length;
			thermo_degree=sector_average/7;
			thermo_degree=81-(69*thermo_degree);
  		return (thermo_degree + '%');  	
  	},
  	e1: function(){
			var x = a._data.sector;
			var sector_average = 0;
			var thermo_degree = 0;
			for(var i=0; i < x.length;i++){
				sector_average = sector_average + dev2.e[x[i]];	
			};
			sector_average=sector_average/x.length;
			thermo_degree=sector_average/7;
			thermo_degree=81-(69*thermo_degree);
  		return (thermo_degree + '%');
  	},
  	summary_user: function(){
  		return (((e.dev2.a/7)+(e.dev2.b/7)+(e.dev2.c/7)+(e.dev2.d/7)+(e.dev2.e/7))/5)/7;
  	},
  	summary_peers: function(){
  		var a_peers = Number((e.a1.replace("%","")));
			var b_peers = Number((e.b1.replace("%","")));
			var c_peers = Number((e.c1.replace("%","")));
			var d_peers = Number((e.d1.replace("%","")));
			var e_peers = Number((e.e1.replace("%","")));

			a_peers = (((a_peers-81)*7)/-69)/7;
			b_peers = (((b_peers-81)*7)/-69)/7;
			c_peers = (((c_peers-81)*7)/-69)/7;
			d_peers = (((d_peers-81)*7)/-69)/7;
			e_peers = (((e_peers-81)*7)/-69)/7;

			return (1/7)*(a_peers+b_peers+c_peers+d_peers+e_peers)/5;
  	}
	},
});

var l = new Vue({
  el: '#dev1',
  data: {
		dev1: {
			a:0,
			b:0,
		}
  },
  computed:{
		a1: function(){
			var x = a._data.sector;
			var sector_average = 0;
			var thermo_degree = 0;
			for(var i=0; i < x.length;i++){
				sector_average = sector_average + dev1.a[x[i]];	
			};
			sector_average=sector_average/x.length;

			sector_average=(sector_average-5.8)/3.8;

			sector_average=(544+(sector_average*170))/20;
			// sector_average=(544+(sector_average*170));			
  		return sector_average;
		},
		b1: function(){
			var x = a._data.sector;
			var sector_average = 0;
			var thermo_degree = 0;
			for(var i=0; i < x.length;i++){
				sector_average = sector_average + dev1.b[x[i]];	
			};
			sector_average=sector_average/x.length;

			sector_average=(sector_average-5.8)/3.8;

			sector_average=(489+(sector_average*170))/20;
			// sector_average=(489+(sector_average*170));			
  		return sector_average;
		},
		summary_user: function(){
			var x;
			if(l.dev1.a===0||l.dev1.b===0){
				return 0;
			}
			return (1/7)*((((24-l.dev1.a)/24)+((24-l.dev1.b)/24))/2);
		},
		summary_peers: function(){
			var a_peers = (
				function(){
					x = a._data.sector;
					sector_average=0;	
					for(var i=0; i < x.length;i++){
						sector_average = sector_average + dev1.a[x[i]];								
					};
					sector_average=sector_average/x.length;
					return sector_average;
				}
			)();

			var b_peers = (
				function(){
					x = a._data.sector;
					sector_average=0;	
					for(var i=0; i < x.length;i++){
						sector_average = sector_average + dev1.b[x[i]];								
					};
					sector_average=sector_average/x.length;
					return sector_average;
				}
			)();										
			return (1/7)*((((24-a_peers)/24)+((24-b_peers)/24))/2);
		},
	}
});

var f = new Vue({
  el: '#dev5',
  data: {
  	one:'',
  	two:'',
  	three:'',
  },
  computed:{
  	total: function(){
  		return dev5[a._data.sector];
  	}
  },
  methods:{
  	setRank_dev5: function(x, y){
  		for(i in this._data){  			  	
  			if(y === this._data[i]){
  				this._data[i] = '';
  			}
  		}
  		this[x]=y;
  	}
  },  
});
var int4 = new Vue({
	el: '#int4',
  data: {
  	a:[],
  },
  computed:{
  	a1: function(){
  		var x = a._data.sector[0];
  		var features=[];
  		
  		for(var i=0; i<3;i++){  	
  			features.push(int[x][i]);		
  		}

  		return features;
  	}
  },
  methods:{
  	// setRank_int4: function(x, y){
  	// 	for(i in this._data){  			  	
  	// 		if(y === this._data[i]){
  	// 			this._data[i] = '';
  	// 		}
  	// 	}
  	// 	this[x]=y;
  	// }
  },  
});
var j = new Vue({
	el: '#dat3',
  data: {
  	a:'',
  	b:'',
  	c:'',
  	d:'',
  	e:'',  	
  },
  computed:{
  	a1: function(){
			var x = a._data.sector;
			var sector_average = 0;
			var dial_path = 0;
			for(var i=0; i < x.length;i++){
				sector_average = sector_average + dat3.a[x[i]];				
			};
			sector_average = sector_average/x.length;
			dial_path=180*(sector_average/7);

			return dial_path;		
  	},
		b1: function(){
			var x = a._data.sector;
			var sector_average = 0;
			var dial_path = 0;
			for(var i=0; i < x.length;i++){
				sector_average = sector_average + dat3.b[x[i]];				
			};
			sector_average = sector_average/x.length;
			dial_path=180*(sector_average/7);

			return dial_path;		
  	},
  	c1: function(){
			var x = a._data.sector;
			var sector_average = 0;
			var dial_path = 0;
			for(var i=0; i < x.length;i++){
				sector_average = sector_average + dat3.c[x[i]];				
			};
			sector_average = sector_average/x.length;
			dial_path=180*(sector_average/7);

			return dial_path;		
  	},
  	d1: function(){
			var x = a._data.sector;
			var sector_average = 0;
			var dial_path = 0;
			for(var i=0; i < x.length;i++){
				sector_average = sector_average + dat3.d[x[i]];				
			};
			sector_average = sector_average/x.length;
			dial_path=180*(sector_average/7);

			return dial_path;		
  	},
  	e1: function(){
			var x = a._data.sector;
			var sector_average = 0;
			var dial_path = 0;
			for(var i=0; i < x.length;i++){
				sector_average = sector_average + dat3.e[x[i]];				
			};
			sector_average = sector_average/x.length;
			dial_path=180*(sector_average/7);

			return dial_path;		
  	},  
		summary_user: function(){
			var summary_user=(j.a/180)+(j.b/180)+(j.c/180)+(j.d/180)+(j.e/180);
			summary_user=(summary_user/5)/7;
			return summary_user;
		},
		summary_peers: function(){
			return (((j.a1/180)+(j.b1/180)+(j.c1/180)+(j.d1/180)+(j.e1/180))/5)/7;
		},	
  },
  methods:{
  	setRank_int4: function(x, y){
  		for(i in this._data){  			  	
  			if(y === this._data[i]){
  				this._data[i] = '';
  			}
  		}
  		this[x]=y;
  	}
  },  
});

var g = new Vue({
  el: '#sec3',
  data: {
		sec3: {
			a:'',
			b:'',
			c:'',
			d:'',
		},
		tot: {
			a:5.1,                        
			b:5,
			c:5,
			d:4.8,
		},
  },
  computed:{
  	a1: function(){
			var x = a._data.sector;
			var sector_average = 0;
			var thermo_degree = 0;
			for(var i=0; i < x.length;i++){
				sector_average = sector_average + sec3.a[x[i]];	
			};
			sector_average=sector_average/x.length;
			thermo_degree=sector_average/7;
			thermo_degree=81-(69*thermo_degree);
  		return (thermo_degree + '%');
  	},
  	b1: function(){
			var x = a._data.sector;
			var sector_average = 0;
			var thermo_degree = 0;
			for(var i=0; i < x.length;i++){
				sector_average = sector_average + sec3.b[x[i]];	
			};
			sector_average=sector_average/x.length;
			thermo_degree=sector_average/7;
			thermo_degree=81-(69*thermo_degree);
  		return (thermo_degree + '%');
  	},
  	c1: function(){
			var x = a._data.sector;
			var sector_average = 0;
			var thermo_degree = 0;
			for(var i=0; i < x.length;i++){
				sector_average = sector_average + sec3.c[x[i]];	
			};
			sector_average=sector_average/x.length;
			thermo_degree=sector_average/7;
			thermo_degree=81-(69*thermo_degree);
  		return (thermo_degree + '%');
  	},
  	d1: function(){
			var x = a._data.sector;
			var sector_average = 0;
			var thermo_degree = 0;
			for(var i=0; i < x.length;i++){
				sector_average = sector_average + sec3.d[x[i]];	
			};
			sector_average=sector_average/x.length;
			thermo_degree=sector_average/7;
			thermo_degree=81-(69*thermo_degree);
  		return (thermo_degree + '%');
  	},
  	summary_user: function(){
  		return (((g.sec3.a/7)+(g.sec3.b/7)+(g.sec3.c/7)+(g.sec3.d/7))/4)/7;
  	},
  	summary_peers: function(){
  		var a_peers = Number((g.a1.replace("%","")));
			var b_peers = Number((g.b1.replace("%","")));
			var c_peers = Number((g.c1.replace("%","")));
			var d_peers = Number((g.d1.replace("%","")));

			a_peers = (((a_peers-81)*7)/-69)/7;
			b_peers = (((b_peers-81)*7)/-69)/7;
			c_peers = (((c_peers-81)*7)/-69)/7;
			d_peers = (((d_peers-81)*7)/-69)/7;

			return (1/7)*(a_peers+b_peers+c_peers+d_peers)/4;
  	},  	
	},
});
var h = new Vue({
  el: '#ana2',
  data: {
		ana: {
			a:0,
			b:0,
			c:0,
			d:0,
			e:0,
			f:0,
		},
		tot: {
			a:5.2,                        
			b:5.2,
			c:4.9,
			d:5,
			e:5,
			f:5,
		},
  },
  computed:{
  	a1: function(){
			var x = a._data.sector;
			var sector_average = 0;
			var thermo_degree = 0;
			for(var i=0; i < x.length;i++){
				sector_average = sector_average + ana.a[x[i]];	
			};
			sector_average=sector_average/x.length;
			thermo_degree=sector_average/7;
			thermo_degree=81-(69*thermo_degree);
  		return (thermo_degree + '%');
  	},
  	b1: function(){
			var x = a._data.sector;
			var sector_average = 0;
			var thermo_degree = 0;
			for(var i=0; i < x.length;i++){
				sector_average = sector_average + ana.b[x[i]];	
			};
			sector_average=sector_average/x.length;
			thermo_degree=sector_average/7;
			thermo_degree=81-(69*thermo_degree);
  		return (thermo_degree + '%');
  	},
  	c1: function(){
			var x = a._data.sector;
			var sector_average = 0;
			var thermo_degree = 0;
			for(var i=0; i < x.length;i++){
				sector_average = sector_average + ana.c[x[i]];	
			};
			sector_average=sector_average/x.length;
			thermo_degree=sector_average/7;
			thermo_degree=81-(69*thermo_degree);
  		return (thermo_degree + '%');
  	},
  	d1: function(){
			var x = a._data.sector;
			var sector_average = 0;
			var thermo_degree = 0;
			for(var i=0; i < x.length;i++){
				sector_average = sector_average + ana.d[x[i]];	
			};
			sector_average=sector_average/x.length;
			thermo_degree=sector_average/7;
			thermo_degree=81-(69*thermo_degree);
  		return (thermo_degree + '%');
  	},
  	e1: function(){
			var x = a._data.sector;
			var sector_average = 0;
			var thermo_degree = 0;
			for(var i=0; i < x.length;i++){
				sector_average = sector_average + ana.e[x[i]];	
			};
			sector_average=sector_average/x.length;
			thermo_degree=sector_average/7;
			thermo_degree=81-(69*thermo_degree);
  		return (thermo_degree + '%');
  	},
  	f1: function(){
			var x = a._data.sector;
			var sector_average = 0;
			var thermo_degree = 0;
			for(var i=0; i < x.length;i++){
				sector_average = sector_average + ana.f[x[i]];	
			};
			sector_average=sector_average/x.length;
			thermo_degree=sector_average/7;
			thermo_degree=81-(69*thermo_degree);
  		return (thermo_degree + '%');
  	},
  	summary_user: function(){
  		return (((h.ana.a/7)+(h.ana.b/7)+(h.ana.c/7)+(h.ana.d/7)+(h.ana.e/7)+(h.ana.f/7))/6)/7;
  	},
  	summary_peers: function(){
  		var a_peers = Number((h.a1.replace("%","")));
			var b_peers = Number((h.b1.replace("%","")));
			var c_peers = Number((h.c1.replace("%","")));
			var d_peers = Number((h.d1.replace("%","")));
			var e_peers = Number((h.e1.replace("%","")));
			var f_peers = Number((h.f1.replace("%","")));						

			a_peers = (((a_peers-81)*7)/-69)/7;
			b_peers = (((b_peers-81)*7)/-69)/7;
			c_peers = (((c_peers-81)*7)/-69)/7;
			d_peers = (((d_peers-81)*7)/-69)/7;
			e_peers = (((e_peers-81)*7)/-69)/7;
			f_peers = (((f_peers-81)*7)/-69)/7;

			return (1/7)*(a_peers+b_peers+c_peers+d_peers+e_peers+f_peers)/6;
  	}    	
	},
});
var summary = new Vue({
  el: '#summary',
  data: {
  	sector:"",
  },
  computed:{
		user: function(){
			var aggregate_user_score;
			aggregate_user_score = 
				// Number(sessionStorage.user_b)+
				// Number(sessionStorage.user_d)+
				// Number(sessionStorage.user_e)+
				// Number(sessionStorage.user_l)+
				// Number(sessionStorage.user_j)+
				// Number(sessionStorage.user_g)+
				// Number(sessionStorage.user_h);
         	b.summary_user
        + d.summary_user
        + e.summary_user
        + l.summary_user
        + j.summary_user
        + g.summary_user
        + h.summary_user;

			return (isNaN(aggregate_user_score)?0:(aggregate_user_score*100).toFixed(0));
		},
		peers: function(){
			var aggregate_user_score;
			aggregate_user_score = 
				// Number(sessionStorage.peers_c)+
				// Number(sessionStorage.peers_d)+
				// Number(sessionStorage.peers_e)+
				// Number(sessionStorage.peers_l)+
				// Number(sessionStorage.peers_j)+
				// Number(sessionStorage.peers_g)+
				// Number(sessionStorage.peers_h);

        c.summary_peers+
        d.summary_peers+
        e.summary_peers+
        l.summary_peers+
        j.summary_peers+
        g.summary_peers+
        h.summary_peers;         				

			return (isNaN(aggregate_user_score)?0:(aggregate_user_score*100).toFixed(0));
		},
		uservpeer: function(){    				
			var text;
			if(this.user && this.peers){
				if(Number(summary.user) > Number(summary.peers)){
					text = 'Congratulations! Your score indicates that you are ';
				}
				if(Number(summary.user) < Number(summary.peers)){
					text = 'Your score indicates that you are ';
				}
				if(Number(summary.user) === Number(summary.peers)){
					text = 'Your score indicates that you are ';
				}
				return text;
			}else{
				return '';
			}			
		},		
		uservpeer1: function(){    				
			var text;
			if(this.user && this.peers){
				if(Number(summary.user) > Number(summary.peers)){
					text = 'ahead of your peers';
				}
				if(Number(summary.user) < Number(summary.peers)){
					text = 'behind your peers';
				}
				if(Number(summary.user) === Number(summary.peers)){
					text = 'on par with your peers';
				}
				return text;
			}else{
				return '';
			}			
		},
		uservpeer2: function(){    				
			var text;
			if(this.user && this.peers){
				if(Number(summary.user) > Number(summary.peers)){
					text = ' with cloud confidence and cloud adoption.  Your company understands the promise of lower costs, greater topline growth, and easier access to innovation and is well positioned to benefit and evolve with emerging technologies well into the future.';
				}
				if(Number(summary.user) < Number(summary.peers)){
					text = ' with cloud confidence and cloud adoption.  To remain competitive, your company should actively pursue the promise of lower costs, greater topline growth, and easier access to innovation that come with cloud adoption.';
				}
				if(Number(summary.user) === Number(summary.peers)){
					text = ' with cloud confidence and cloud adoption.  To remain competitive, your company should actively pursue the promise of lower costs, greater topline growth, and easier access to innovation that come with cloud adoption.';
				}
				return text;
			}else{
				return '';
			}			
		},				
	},
});