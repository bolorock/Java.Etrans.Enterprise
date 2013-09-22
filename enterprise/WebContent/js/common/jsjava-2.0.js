/**
 *  Copyright (C) 2006-2008 zhangbo (freeeob@gmail.com)
 *
 *  This product is free software; you can redistribute it and/or modify
 *  it under the terms of the GNU Lesser General Public License as published by
 *  the Free Software Foundation; either version 2.1 of the License, or
 *  (at your option) any later version.
 * 
 *  This product is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *  GNU Lesser General Public License for more details.
 * 
 *  You should have received a copy of the GNU Lesser General Public License
 *  along with this library; if not, write to the Free Software
 *  Foundation, Inc., 59 Temple Place, Suite 330, Boston, MA  02111-1307  USA.
 *
 *  JsJava team email:jsjava@gmail.com
 */
function Collection(){
	this.jsjava_class="jsjava.util.Collection";
}
Collection.CONSTANT_ILLEGAL_INVOCATION="This is an interface method and you should use the concrete method";
Collection.prototype.recapacity=function (){
	throw new IllegalStateException(IllegalStateException.ERROR,Collection.CONSTANT_ILLEGAL_INVOCATION);
};
Collection.prototype.add=function (pvalue){
    throw new IllegalStateException(IllegalStateException.ERROR,Collection.CONSTANT_ILLEGAL_INVOCATION); 
};
Collection.prototype.addAll=function (c){
    throw new IllegalStateException(IllegalStateException.ERROR,Collection.CONSTANT_ILLEGAL_INVOCATION); 
};
Collection.prototype.clear=function (){
    throw new IllegalStateException(IllegalStateException.ERROR,Collection.CONSTANT_ILLEGAL_INVOCATION);
};
Collection.prototype.contains=function (pvalue){
    throw new IllegalStateException(IllegalStateException.ERROR,Collection.CONSTANT_ILLEGAL_INVOCATION);
};
Collection.prototype.containsAll=function (c){
    throw new IllegalStateException(IllegalStateException.ERROR,Collection.CONSTANT_ILLEGAL_INVOCATION);
};
Collection.prototype.get=function (index){
    throw new IllegalStateException(IllegalStateException.ERROR,Collection.CONSTANT_ILLEGAL_INVOCATION);
};
Collection.prototype.isEmpty=function (){
    throw new IllegalStateException(IllegalStateException.ERROR,Collection.CONSTANT_ILLEGAL_INVOCATION);
};
Collection.prototype.iterator=function (){
    throw new IllegalStateException(IllegalStateException.ERROR,Collection.CONSTANT_ILLEGAL_INVOCATION);
};
Collection.prototype.remove=function (pvalue){
    throw new IllegalStateException(IllegalStateException.ERROR,Collection.CONSTANT_ILLEGAL_INVOCATION);
};
Collection.prototype.removeAll=function (c){
    throw new IllegalStateException(IllegalStateException.ERROR,Collection.CONSTANT_ILLEGAL_INVOCATION);
};
Collection.prototype.retainAll=function (c){
    throw new IllegalStateException(IllegalStateException.ERROR,Collection.CONSTANT_ILLEGAL_INVOCATION);
};
Collection.prototype.getSize=function (){
    throw new IllegalStateException(IllegalStateException.ERROR,Collection.CONSTANT_ILLEGAL_INVOCATION);
};
Collection.prototype.size=function (){
    throw new IllegalStateException(IllegalStateException.ERROR,Collection.CONSTANT_ILLEGAL_INVOCATION);
};
Collection.prototype.toArray=function (){
    throw new IllegalStateException(IllegalStateException.ERROR,Collection.CONSTANT_ILLEGAL_INVOCATION);
};
function List(){
	this.jsjava_class="jsjava.util.List";
}
List.prototype=new Collection();
List.prototype.constructor=List;
List.CONSTANT_ILLEGAL_INVOCATION="This is an interface method and you should use the concrete method";
List.prototype.recapacity=function (){
	throw new IllegalStateException(IllegalStateException.ERROR,List.CONSTANT_ILLEGAL_INVOCATION);
};
List.prototype.add=function (pvalue){
    throw new IllegalStateException(IllegalStateException.ERROR,List.CONSTANT_ILLEGAL_INVOCATION); 
};
List.prototype.addIndexOf=function (index,pvalue){
    throw new IllegalStateException(IllegalStateException.ERROR,List.CONSTANT_ILLEGAL_INVOCATION);
};
List.prototype.addAll=function (c){
    throw new IllegalStateException(IllegalStateException.ERROR,List.CONSTANT_ILLEGAL_INVOCATION); 
};
List.prototype.addAllIndexOf=function (index,c){
    throw new IllegalStateException(IllegalStateException.ERROR,List.CONSTANT_ILLEGAL_INVOCATION);
};
List.prototype.clear=function (){
    throw new IllegalStateException(IllegalStateException.ERROR,List.CONSTANT_ILLEGAL_INVOCATION);
};
List.prototype.contains=function (pvalue){
    throw new IllegalStateException(IllegalStateException.ERROR,List.CONSTANT_ILLEGAL_INVOCATION);
};
List.prototype.containsAll=function (c){
    throw new IllegalStateException(IllegalStateException.ERROR,List.CONSTANT_ILLEGAL_INVOCATION);
};
List.prototype.get=function (index){
    throw new IllegalStateException(IllegalStateException.ERROR,List.CONSTANT_ILLEGAL_INVOCATION);
};
List.prototype.indexOf=function (pvalue){
    throw new IllegalStateException(IllegalStateException.ERROR,List.CONSTANT_ILLEGAL_INVOCATION);
};
List.prototype.isEmpty=function (){
    throw new IllegalStateException(IllegalStateException.ERROR,List.CONSTANT_ILLEGAL_INVOCATION);
};
List.prototype.iterator=function (){
    throw new IllegalStateException(IllegalStateException.ERROR,List.CONSTANT_ILLEGAL_INVOCATION);
};
List.prototype.lastIndexOf=function (pvalue){
    throw new IllegalStateException(IllegalStateException.ERROR,List.CONSTANT_ILLEGAL_INVOCATION);
};
List.prototype.listIterator=function (index){
    throw new IllegalStateException(IllegalStateException.ERROR,List.CONSTANT_ILLEGAL_INVOCATION);
};
List.prototype.removeIndexOf=function (index){
    throw new IllegalStateException(IllegalStateException.ERROR,List.CONSTANT_ILLEGAL_INVOCATION);
};
List.prototype.remove=function (pvalue){
    throw new IllegalStateException(IllegalStateException.ERROR,List.CONSTANT_ILLEGAL_INVOCATION);
};
List.prototype.removeAll=function (c){
    throw new IllegalStateException(IllegalStateException.ERROR,Collection.CONSTANT_ILLEGAL_INVOCATION);
};
List.prototype.retainAll=function (c){
    throw new IllegalStateException(IllegalStateException.ERROR,Collection.CONSTANT_ILLEGAL_INVOCATION);
};
List.prototype.set=function (index,pvalue){
    throw new IllegalStateException(IllegalStateException.ERROR,List.CONSTANT_ILLEGAL_INVOCATION);
};
List.prototype.subList=function (index1,index2){
    throw new IllegalStateException(IllegalStateException.ERROR,List.CONSTANT_ILLEGAL_INVOCATION);
};
List.prototype.getSize=function (){
    throw new IllegalStateException(IllegalStateException.ERROR,List.CONSTANT_ILLEGAL_INVOCATION);
};
List.prototype.size=function (){
    throw new IllegalStateException(IllegalStateException.ERROR,List.CONSTANT_ILLEGAL_INVOCATION);
};
List.prototype.toArray=function (){
    throw new IllegalStateException(IllegalStateException.ERROR,List.CONSTANT_ILLEGAL_INVOCATION);

};
function AbstractList(){
	this.jsjava_class="jsjava.util.AbstractList";    
}
AbstractList.prototype=new List();
AbstractList.prototype.constructor=AbstractList;
AbstractList.CONSTANT_ILLEGAL_INVOCATION="This is an abstract method and you should use the concrete method";
AbstractList.prototype.recapacity=function (){
    if(this.capacity-this._size<10){
     this.capacity+=this.span;
     var oldElements=this._elements;
        this._elements=new Array(this.capacity); 
        for(var i=0;i<this._size;i++){
            this._elements[i]=oldElements[i]; 
        }
    }
};
AbstractList.prototype.add=function (pvalue){
    this.recapacity();
    this._elements[this._size++]=pvalue; 
};
AbstractList.prototype.addIndexOf=function (index,pvalue){
    this.recapacity();
    if(index>=this._size){
        this._elements[this._size++]=pvalue;
        return; 
    }
    this._size++;      
    for(var i=this._size-1;i>index;i--){
     this._elements[i]=this._elements[i-1];
    } 
    this._elements[index]=pvalue;
};
AbstractList.prototype.addAll=function (c){
    if(!(c instanceof Collection)){
    	return;
    }
    var size=c.size();
    for(var i=0;i<size;i++){
    	this.add(c.get(i));
    }
};
AbstractList.prototype.addAllIndexOf=function (index,c){
    if(!(c instanceof Collection)){
    	return;
    }
    var size=c.size();
    for(var i=0;i<size;i++){
    	this.addIndexOf(index++,c.get(i));
    }
};
AbstractList.prototype.clear=function (){
    this._elements=new Array(this.capacity); 
};
AbstractList.prototype.contains=function (pvalue){
    for(var i=0;i<this._size;i++){
     var elem=this._elements[i];
        if(elem.equals(pvalue)){
            return true; 
        } 
    } 
    return false;
};
AbstractList.prototype.containsAll=function (c){
    if(!(c instanceof Collection)){
    	return false;
    }
    var size=c.size();
    for(var i=0;i<size;i++){
    	var elem=c.get(i);
    	if(!this.contains(elem)){
    		return false;
    	}
    }
    return true;
};
AbstractList.prototype.get=function (index){
    return this._elements[index];
};
AbstractList.prototype.indexOf=function (pvalue){
    for(var i=0;i<this._size;i++){
     var elem=this._elements[i];
        if(elem.equals(pvalue)){
            return i; 
        } 
    } 
    return -1;
};
AbstractList.prototype.isEmpty=function (){
    return this._size==0;
};
AbstractList.prototype.iterator=function (){
	function Iterator(list){		
	    this.list=list;
	    this.nextIndex=0;
	    this.size=list.getSize();
	}
	Iterator.prototype.hasNext=function(){
	    return this.nextIndex<this.size;
	};
	Iterator.prototype.next=function(){
	    var nextObj;
	    if(this.nextIndex<this.size){
	        nextObj=this.list.get(this.nextIndex);
	        this.nextIndex++;
	        return nextObj;
	    }
	    return null;
	};
	Iterator.prototype.moveTo=function(index){
	    this.nextIndex=index;	
	};
    return new Iterator(this);
};
AbstractList.prototype.lastIndexOf=function (pvalue){
    for(var i=this._size-1;i>=0;i--){
     var elem=this._elements[i];
        if(elem.equals(pvalue)){
            return i; 
        } 
    } 
    return -1;
};
AbstractList.prototype.listIterator=function (index){
    function _ListIterator(list){
		this.list=list;		
	    this.size=list.getSize();
	    if(isNaN(index)||index<0){
	    	index=0;
	    }else if(index>this.size){
	    	index = this.size;
	    }
	    this.nextIndex=index;
	}	
	_ListIterator.prototype=new ListIterator();
	_ListIterator.prototype.constructor=_ListIterator;
	_ListIterator.prototype.add=function(o){
	    this.list.add(this.nextIndex++)=o;
	};
	_ListIterator.prototype.hasNext=function(){
	    return this.nextIndex<this.size;
	};
	_ListIterator.prototype.hasPrevious=function(){
	    return this.nextIndex>0;
	};
	_ListIterator.prototype.next=function(){
	    var nextObj;
	    if(this.nextIndex<this.size){
	        nextObj=this.list.get(this.nextIndex);
	        this.nextIndex++;
	        return nextObj;
	    }
	    return null;
	};
	_ListIterator.prototype.nextIndex=function(){
	    return this.nextIndex;
	};
	_ListIterator.prototype.previous=function(){
	    var preObj;
	    if(this.nextIndex>0){
	        preObj=this.list.get(--this.nextIndex);
	        return preObj;
	    }
	    return null;
	};
	_ListIterator.prototype.previousIndex=function(){
	    return this.nextIndex;
	};
	_ListIterator.prototype.remove=function(){
	    return;
	};
	_ListIterator.prototype.set=function(o){
	    return;
	};
	return new _ListIterator(this);
};
AbstractList.prototype.removeIndexOf=function (index){
    if(index>-1&&index<this._size){
     var oldElems=this._elements;
     this._elements=new Array(this.capacity);
     this._size--;
     for(var i=0;i<this._size;i++){
         if(i<index){
             this._elements[i]=oldElems[i]; 
         }else{
             this._elements[i]=oldElems[i+1];
         } 
     }
    }
};
AbstractList.prototype.remove=function (pvalue){
    this.removeIndexOf(this.indexOf(pvalue));
};
AbstractList.prototype.removeAll=function (c){
    if(!(c instanceof Collection)){
    	return;
    }
    var size=c.size();
    for(var i=0;i<size;i++){
    	var elem=c.get(i);
    	this.remove(elem);
    }
};
AbstractList.prototype.retainAll=function (c){
    if(!(c instanceof Collection)){
    	return;
    }
    for(var i=0;i<this._size;i++){
    	var elem=this.get(i);
    	if(!c.contains(elem)){
    		this.remove(elem);
    	}
    }
};
AbstractList.prototype.set=function (index,pvalue){
    this._elements[index]=pvalue;
};
AbstractList.prototype.subList=function (index1,index2){
    var l=new AbstractList();
    for(var i=index1;i<index2;i++){
        l.add(this._elements[i]); 
    }
    return l;
};
AbstractList.prototype.getSize=function (){
    return this._size;
};
AbstractList.prototype.size=function (){
    return this._size;
};
AbstractList.prototype.toArray=function (){
    var arr=new Array(this._size);
    for(var i=0;i<this._size;i++){
        arr[i]=this._elements[i]; 
    } 
    return arr;
};
AbstractList.prototype.toString=function (){
    return this.toArray().toString(); 
};
function ArrayList(){
	this.jsjava_class="jsjava.util.ArrayList";
	this.capacity=50;
    this._size=0;
    this.span=10;
    this._elements=new Array(this.capacity);
}
ArrayList.prototype=new AbstractList();
ArrayList.prototype.constructor=ArrayList;
function Vector(){
	this.jsjava_class="jsjava.util.Vector";
	this.capacity=50;
    this._size=0;
    this.span=10;
    this._elements=new Array(this.capacity);
}
Vector.prototype=new AbstractList();
Vector.prototype.constructor=Vector;
Vector.prototype.addElement=function (pvalue){
    this.recapacity();
    this._elements[this._size++]=pvalue; 
};
Vector.prototype.elementAt=function (index){
    return this._elements[index];
};
Vector.prototype.elements=function (){
    function _Enumeration(list){
    	if(list==undefined){
			list=new Vector();
		}
		this.list=list;
	    this.nextIndex=0;
	    this.size=list.getSize();
    }
    _Enumeration.prototype=new Enumeration();
    _Enumeration.prototype.constructor=_Enumeration;
    _Enumeration.prototype.hasMoreElements=function(){
	    return this.nextIndex<this.size;
	};	
	_Enumeration.prototype.nextElement=function(){
	    var nextObj;
	    if(this.nextIndex<this.size){
	        nextObj=this.list.get(this.nextIndex);
	        this.nextIndex++;
	        return nextObj;
	    }
	    throw new NoSuchElementException(NoSuchElementException,"Vector Enumeration");
	};
	return new _Enumeration(this);    
};
Vector.prototype.insertElementAt=function (pvalue,index){
    this.addIndexOf(index,pvalue);
};
Vector.prototype.lastElement=function (){
    return this.get(this._size-1);
};
Vector.prototype.removeElementAt=function (index){
    return this.removeIndexOf(index);
};
Vector.prototype.removeElement=function (pvalue){
    this.remove(pvalue);
};
Vector.prototype.removeAllElements=function (){
    this.capacity=50;
    this._size=0;
    this.span=10;
    this._elements=new Array(this.capacity);
};
Vector.prototype.setElementAt=function (pvalue,index){
    this.set(index,pvalue);

};
function Stack(){
	this.jsjava_class="jsjava.util.Stack";
	this.capacity=50;
    this.size=0;
    this.span=10;
    this.elements=new Array(this.capacity);
}
Stack.prototype=new Vector();
Stack.prototype.constructor=Stack;
Stack.MESSAGE_NOTFOUND=-1;
Stack.prototype.recapacity=function (){
    if(this.capacity-this.size<10){
     this.capacity+=this.span;
     var oldElements=this.elements;
        this.elements=new Array(this.capacity); 
        for(var i=0;i<this.size;i++){
            this.elements[i]=oldElements[i]; 
        }
    }
};
Stack.prototype.push=function(obj){
	this.recapacity();
	this.elements[this.size++]=obj;
};
Stack.prototype.pop=function(){
	if(this.empty()){
		throw new EmptyStackException(EmptyStackException.ERROR,"Stack has been empty!");
	}
    var oldElems=this.elements;
	this.elements=new Array(this.capacity);
	for(var i=0;i<this.size-1;i++){
	    this.elements[i]=oldElems[i];
	}
	this.size--;
	return oldElems[this.size];
};
Stack.prototype.peek=function(){
    return this.elements[this.size-1];
};
Stack.prototype.empty=function(){
	return this.size==0;
};
Stack.prototype.search=function(obj){
	for(var i=0;i<this.size;i++){
	    if(this.elements[i].equals(obj)){
	        return i+1;
	    }
	}
	return Stack.MESSAGE_NOTFOUND;

};
function Set(){
	this.jsjava_class="jsjava.util.Set";
}
Set.prototype=new Collection();
Set.prototype.constructor=Set;
Set.CONSTANT_ILLEGAL_INVOCATION="This is an interface method and you should use the concrete method";
Set.prototype.recapacity=function (){
    throw new IllegalStateException(IllegalStateException.ERROR,Set.CONSTANT_ILLEGAL_INVOCATION);
};
Set.prototype.add=function (pvalue){
    throw new IllegalStateException(IllegalStateException.ERROR,Set.CONSTANT_ILLEGAL_INVOCATION);    
};
Set.prototype.addAll=function (c){
    throw new IllegalStateException(IllegalStateException.ERROR,Set.CONSTANT_ILLEGAL_INVOCATION);    
};
Set.prototype.clear=function (){
    throw new IllegalStateException(IllegalStateException.ERROR,Set.CONSTANT_ILLEGAL_INVOCATION);
};
Set.prototype.contains=function (pvalue){
    throw new IllegalStateException(IllegalStateException.ERROR,Set.CONSTANT_ILLEGAL_INVOCATION);
};
Set.prototype.containsAll=function (c){
    throw new IllegalStateException(IllegalStateException.ERROR,Set.CONSTANT_ILLEGAL_INVOCATION);
};
Set.prototype.isEmpty=function (){
    throw new IllegalStateException(IllegalStateException.ERROR,Set.CONSTANT_ILLEGAL_INVOCATION);
};
Set.prototype.iterator=function (){
    throw new IllegalStateException(IllegalStateException.ERROR,Set.CONSTANT_ILLEGAL_INVOCATION);
};
Set.prototype.remove=function (pvalue){
    throw new IllegalStateException(IllegalStateException.ERROR,Set.CONSTANT_ILLEGAL_INVOCATION);
};
Set.prototype.removeAll=function (c){
    throw new IllegalStateException(IllegalStateException.ERROR,Set.CONSTANT_ILLEGAL_INVOCATION);
};
Set.prototype.retainAll=function (c){
    throw new IllegalStateException(IllegalStateException.ERROR,Set.CONSTANT_ILLEGAL_INVOCATION);
};
Set.prototype.getSize=function (){
    throw new IllegalStateException(IllegalStateException.ERROR,Set.CONSTANT_ILLEGAL_INVOCATION);
};
Set.prototype.size=function (){
    throw new IllegalStateException(IllegalStateException.ERROR,Set.CONSTANT_ILLEGAL_INVOCATION);
};
Set.prototype.toArray=function (){
    throw new IllegalStateException(IllegalStateException.ERROR,Set.CONSTANT_ILLEGAL_INVOCATION);
};
Set.prototype.toString=function (){
    throw new IllegalStateException(IllegalStateException.ERROR,Set.CONSTANT_ILLEGAL_INVOCATION); 
};
function AbstractSet(){
	this.jsjava_class="jsjava.util.AbstractSet";
}
AbstractSet.prototype=new Set();
AbstractSet.prototype.constructor=AbstractSet;
AbstractSet.prototype.recapacity=function (){
    if(this.capacity-this._size<10){
     this.capacity+=this.span;
     var oldElements=this.elements;
        this.elements=new Array(this.capacity); 
        for(var i=0;i<this._size;i++){
            this.elements[i]=oldElements[i]; 
        }
    }
};
AbstractSet.prototype.add=function (pvalue){
    if(this.contains(pvalue)){
    	return;
    }
    this.recapacity();
    this.elements[this._size++]=pvalue;    
};
AbstractSet.prototype.addAll=function (c){
    if(!(c instanceof Collection)){
    	return;
    }
    var size=c.size();
    for(var i=0;i<size;i++){
    	this.add(c.get(i));
    }
};
AbstractSet.prototype.clear=function (){
    this.elements=new Array(this.capacity); 
};
AbstractSet.prototype.contains=function (pvalue){
    for(var i=0;i<this._size;i++){
     var elem=this.elements[i]
        if(elem.equals(pvalue)){
            return true; 
        } 
    } 
    return false;
};
AbstractSet.prototype.containsAll=function (c){
    if(!(c instanceof Collection)){
    	return false;
    }
    var size=c.size();
    for(var i=0;i<size;i++){
    	var elem=c.get(i);
    	if(!this.contains(elem)){
    		return false;
    	}
    }
    return true;
};
AbstractSet.prototype.get=function (index){
    return this.elements[index];
};
AbstractSet.prototype.isEmpty=function (){
    return this._size==0;
};
AbstractSet.prototype.iterator=function (){
	function Iterator(list){		
	    this.list=list;
	    this.nextIndex=0;
	    this.size=list.getSize();
	}
	Iterator.prototype.hasNext=function(){
	    return this.nextIndex<this.size;
	};
	Iterator.prototype.next=function(){
	    var nextObj;
	    if(this.nextIndex<this.size){
	        nextObj=this.list.get(this.nextIndex);
	        this.nextIndex++;
	        return nextObj;
	    }
	    return null;
	};
	Iterator.prototype.moveTo=function(index){
	    this.nextIndex=index;	
	};
    return new Iterator(this);
};
AbstractSet.prototype.remove=function (pvalue){
    var arr=new Array();
    for(var i=0;i<this._size;i++){
    	var elem=this.get(i);
    	if(!elem.equals(pavalue)){
    		arr[arr.length]=elem;
    	}
    }
    this.clear();
    for(var i=0;i<arr.length;i++){
    	this.add(arr[i]);
    }
};
AbstractSet.prototype.removeAll=function (c){
    if(!(c instanceof Collection)){
    	return;
    }
    var size=c.size();
    for(var i=0;i<size;i++){
    	var elem=c.get(i);
    	this.remove(elem);
    }
};
AbstractSet.prototype.retainAll=function (c){
    if(!(c instanceof Collection)){
    	return;
    }
    for(var i=0;i<this._size;i++){
    	var elem=this.get(i);
    	if(!c.contains(elem)){
    		this.remove(elem);
    	}
    }
};
AbstractSet.prototype.getSize=function (){
    return this._size;
};
AbstractSet.prototype.size=function (){
    return this._size;
};
AbstractSet.prototype.toArray=function (){
    var arr=new Array(this._size);
    for(var i=0;i<this._size;i++){
        arr[i]=this.elements[i]; 
    } 
    return arr;
};
AbstractSet.prototype.toString=function (){
    return this.toArray().toString(); 
};
function HashSet(){
	this.jsjava_class="jsjava.util.HashSet";
	this.capacity=50;
    this._size=0;
    this.span=10;
    this.elements=new Array(this.capacity);
}
HashSet.prototype=new AbstractSet();
HashSet.prototype.constructor=HashSet;
function SortedSet(){
	this.jsjava_class="jsjava.util.SortedSet";
}
SortedSet.prototype=new Set();
SortedSet.prototype.constructor=SortedSet;
SortedSet.CONSTANT_ILLEGAL_INVOCATION="This is an interface method and you should use the concrete method";
SortedSet.prototype.comparator=function (){
    throw new IllegalStateException(IllegalStateException.ERROR,SortedSet.CONSTANT_ILLEGAL_INVOCATION);
};
SortedSet.prototype.first=function (pvalue){
    throw new IllegalStateException(IllegalStateException.ERROR,SortedSet.CONSTANT_ILLEGAL_INVOCATION);    
};
SortedSet.prototype.headSet=function (toElement){
    throw new IllegalStateException(IllegalStateException.ERROR,SortedSet.CONSTANT_ILLEGAL_INVOCATION);    
};
SortedSet.prototype.last=function (){
    throw new IllegalStateException(IllegalStateException.ERROR,SortedSet.CONSTANT_ILLEGAL_INVOCATION);
};
SortedSet.prototype.subSet=function (fromElement,toElement){
    throw new IllegalStateException(IllegalStateException.ERROR,SortedSet.CONSTANT_ILLEGAL_INVOCATION);
};
SortedSet.prototype.tailSet=function (fromElement){
    throw new IllegalStateException(IllegalStateException.ERROR,SortedSet.CONSTANT_ILLEGAL_INVOCATION);

};
function TreeSet(comparator){
	this.jsjava_class="jsjava.util.TreeSet";
    this.capacity=50;
    this._size=0;
    this.span=10;
    this._elements=new Array(this.capacity);
    this.comparator=comparator;
}
TreeSet.prototype=new SortedSet();
TreeSet.prototype.constructor=TreeSet;
TreeSet.prototype.recapacity=function (){
    if(this.capacity-this._size<10){
     this.capacity+=this.span;
     var oldElements=this._elements;
        this._elements=new Array(this.capacity); 
        for(var i=0;i<this._size;i++){
            this._elements[i]=oldElements[i]; 
        }
    }
};
TreeSet.prototype.sort=function(){	
	function _sort(o1,o2){
		return c.compare(o1,o2);
	}
	var c=this.comparator;
	if(c==null){
		this._elements.sort();
		return;
	}
	this._elements.sort(_sort);
}
TreeSet.prototype.add=function (pvalue){
    if(this.contains(pvalue)){
    	return;
    }
    this.recapacity();
    this._elements[this._size++]=pvalue;
    this.sort(); 
};
TreeSet.prototype.addAll=function (c){
    if(!(c instanceof Collection)){
    	return;
    }
    var size=c.size();
    for(var i=0;i<size;i++){
    	this.add(c.get(i));
    }
    this.sort();
};
TreeSet.prototype.clear=function (){
    this._elements=new Array(this.capacity); 
};
TreeSet.prototype.comparator=function (){
    return this.comparator;
};
TreeSet.prototype.contains=function (pvalue){
    for(var i=0;i<this._size;i++){
     var elem=this._elements[i]
        if(elem.equals(pvalue)){
            return true; 
        } 
    } 
    return false;
};
TreeSet.prototype.containsAll=function (c){
    if(!(c instanceof Collection)){
    	return false;
    }
    var size=c.size();
    for(var i=0;i<size;i++){
    	var elem=c.get(i);
    	if(!this.contains(elem)){
    		return false;
    	}
    }
    return true;
};
TreeSet.prototype.first=function (pvalue){
    return this._elements[0];
};
TreeSet.prototype.headSet=function (toElement){
    var arr=new HashSet();
    var toIndex=this.indexOf(toElement);
    for(var i=0;i<toIndex;i++){
    	var elem=this._elements[i];
    	arr[i]=elem;
    }
    return arr;
};
TreeSet.prototype.get=function (index){
    return this._elements[index];
};
TreeSet.prototype.indexOf=function (pvalue){
    for(var i=0;i<this._size;i++){
     var elem=this._elements[i];
        if(elem.equals(pvalue)){
            return i; 
        } 
    } 
    return -1;
};
TreeSet.prototype.isEmpty=function (){
    return this._size==0;
};
TreeSet.prototype.iterator=function (){
	function Iterator(list){		
	    this.list=list;
	    this.nextIndex=0;
	    this.size=list.getSize();
	}
	Iterator.prototype.hasNext=function(){
	    return this.nextIndex<this.size;
	};
	Iterator.prototype.next=function(){
	    var nextObj;
	    if(this.nextIndex<this.size){
	        nextObj=this.list.get(this.nextIndex);
	        this.nextIndex++;
	        return nextObj;
	    }
	    return null;
	};
	Iterator.prototype.moveTo=function(index){
	    this.nextIndex=index;	
	};
    return new Iterator(this);
};
TreeSet.prototype.last=function (){
    return this._elements[this._size-1];
};
TreeSet.prototype.remove=function (pvalue){
    var arr=new Array();
    for(var i=0;i<this._size;i++){
    	var elem=this.get(i);
    	if(!elem.equals(pavalue)){
    		arr[arr.length]=elem;
    	}
    }
    this.clear();
    for(var i=0;i<arr.length;i++){
    	this.add(arr[i]);
    }
};
TreeSet.prototype.removeAll=function (c){
    if(!(c instanceof Collection)){
    	return;
    }
    var size=c.size();
    for(var i=0;i<size;i++){
    	var elem=c.get(i);
    	this.remove(elem);
    }
};
TreeSet.prototype.retainAll=function (c){
    if(!(c instanceof Collection)){
    	return;
    }
    for(var i=0;i<this._size;i++){
    	var elem=this.get(i);
    	if(!c.contains(elem)){
    		this.remove(elem);
    	}
    }
};
TreeSet.prototype.getSize=function (){
    return this._size;
};
TreeSet.prototype.size=function (){
    return this._size;
};
TreeSet.prototype.subSet=function (fromElement,toElement){
	var set=new TreeSet();
    var fromIndex=this.indexOf(fromElement);
    var toIndex=this.indexOf(toElement);
    if(fromIndex==-1||toIndex==-1||fromIndex>toIndex){
    	return set;
    }
    for(var i=fromIndex;i<toIndex;i++){
    	var elem=this._elements[i];
    	set.add(elem);
    }
    return set;
};
TreeSet.prototype.tailSet=function (fromElement){
	var set=new HashSet();
    var fromIndex=this.indexOf(fromElement);
    if(fromIndex===-1){
    	return set;
    }
    for(var i=fromIndex;i<this._size;i++){
    	var elem=this._elements[i];
    	set.add(elem);
    }
    return set;
};
TreeSet.prototype.toArray=function (){
    var arr=new Array(this._size);
    for(var i=0;i<this._size;i++){
        arr[i]=this._elements[i]; 
    } 
    return arr;
};
TreeSet.prototype.toString=function (){
    return this.toArray().toString(); 

};
function Map(){
	this.jsjava_class="jsjava.util.Map";
}
Map.CONSTANT_ILLEGAL_INVOCATION="This is an interface method and you should use the concrete method";
Map.prototype.recapacity=function(){
    throw new IllegalStateException(IllegalStateException.ERROR,Map.CONSTANT_ILLEGAL_INVOCATION);
};
Map.prototype.clear=function(){
    throw new IllegalStateException(IllegalStateException.ERROR,Map.CONSTANT_ILLEGAL_INVOCATION); 
};
Map.prototype.put=function (pname,pvalue){
    throw new IllegalStateException(IllegalStateException.ERROR,Map.CONSTANT_ILLEGAL_INVOCATION);
};
Map.prototype.putAll=function (map){
    throw new IllegalStateException(IllegalStateException.ERROR,Map.CONSTANT_ILLEGAL_INVOCATION);
};
Map.prototype.get=function (pname){
    throw new IllegalStateException(IllegalStateException.ERROR,Map.CONSTANT_ILLEGAL_INVOCATION);
};
Map.prototype.containsKey=function(pname){
    throw new IllegalStateException(IllegalStateException.ERROR,Map.CONSTANT_ILLEGAL_INVOCATION);
};
Map.prototype.containsValue=function (pvalue){
    throw new IllegalStateException(IllegalStateException.ERROR,Map.CONSTANT_ILLEGAL_INVOCATION);
};
Map.prototype.values=function (){
    throw new IllegalStateException(IllegalStateException.ERROR,Map.CONSTANT_ILLEGAL_INVOCATION);
};
Map.prototype.entrySet=function (){
    throw new IllegalStateException(IllegalStateException.ERROR,Map.CONSTANT_ILLEGAL_INVOCATION);
};
Map.prototype.isEmpty=function (){
    throw new IllegalStateException(IllegalStateException.ERROR,Map.CONSTANT_ILLEGAL_INVOCATION);
};
Map.prototype.keySet=function (){
    throw new IllegalStateException(IllegalStateException.ERROR,Map.CONSTANT_ILLEGAL_INVOCATION);
};
Map.prototype.getSize=function (){
    throw new IllegalStateException(IllegalStateException.ERROR,Map.CONSTANT_ILLEGAL_INVOCATION); 
};
Map.prototype.size=function (){
    throw new IllegalStateException(IllegalStateException.ERROR,Map.CONSTANT_ILLEGAL_INVOCATION); 
};
Map.prototype.remove=function (key){
    throw new IllegalStateException(IllegalStateException.ERROR,Map.CONSTANT_ILLEGAL_INVOCATION);
};
Map.Entry=function(){
	this.jsjava_class="jsjava.util.Map.Entry";
	this.equals=function(o){
		throw new IllegalStateException(IllegalStateException.ERROR,Map.CONSTANT_ILLEGAL_INVOCATION); 
	};
	this.getKey=function(){
		throw new IllegalStateException(IllegalStateException.ERROR,Map.CONSTANT_ILLEGAL_INVOCATION); 
	};
	this.getValue=function(){
		throw new IllegalStateException(IllegalStateException.ERROR,Map.CONSTANT_ILLEGAL_INVOCATION); 
	};
	this.setValue=function(value){
		throw new IllegalStateException(IllegalStateException.ERROR,Map.CONSTANT_ILLEGAL_INVOCATION); 
	};

};
function AbstractMap(){
	this.jsjava_class="jsjava.util.AbstractMap";
}
AbstractMap.prototype=new Map();
AbstractMap.prototype.constructor=AbstractMap;
AbstractMap.prototype.recapacity=function(){
    if(this.capacity-this._size<10){
     this.capacity+=this.span;
     var oldElements=this._elements;
        this._elements=new Array(this.capacity); 
        for(var i=0;i<this._size;i++){
            this._elements[i]=oldElements[i]; 
        }
    }
};
AbstractMap.prototype.clear=function(){
    this.capacity=50;
    this._size=0;
    this._elements=new Array(this.capacity); 
};
AbstractMap.prototype.put=function (pname,pvalue){
    this.recapacity();
    if(this.containsKey(pname)){
        for(var i=0;i<this._size;i++){
            var elem=this._elements[i];
            if(elem[0].equals(pname)){
                elem[1]=pvalue;
                return;
            } 
        } 
    }
    this._elements[this._size++]=[pname,pvalue];
};
Map.prototype.putAll=function (map){
    if(map==undefined||!(map instanceof Map)){
    	return;
    }
    var keyset=map.keySet();
    var keysize=keyset.size();
    for(var i=0;i<keysize;i++){
    	var key=keyset.get(i);
    	var value=map.get(key);
    	this.put(key,value);
    }
};
AbstractMap.prototype.get=function (pname){
    for(var i=0;i<this._size;i++){
        var elem=this._elements[i];
        if(elem[0]==undefined||elem[0]==null){
        	if(elem[0]==pname){
        		return elem[1];
        	}
        }else if(elem[0].equals(pname)){
            return elem[1]; 
        } 
    }
};
AbstractMap.prototype.containsKey=function(pname){
    if(this.get(pname)==undefined){
        return false; 
    }
    return true;
};
AbstractMap.prototype.containsValue=function (pvalue){
    for(var i=0;i<this._size;i++){
        var elem=this._elements[i];
        if(elem[1].equals(pvalue)){
            return true;
        } 
    }
    return false;
};
AbstractMap.prototype.values=function (){
    var values=new ArrayList();
    for(var i=0;i<this._size;i++){
        var elem=this._elements[i];
        values.add(elem[1]);
    } 
    return values;
};
AbstractMap.prototype.entrySet=function (){
	Map._Entry=function(key,value){
		this.key=key;
		this.value=value;
		this.equals=function(o){
			if(!(o instanceof Map.Entry)){
				return true;
			}
			if(this.key.equals(o.key)&&this.value.equals(o.value)){
				return true;
			}
			return false;
		};
		this.getKey=function(){
			return this.key;
		};
		this.getValue=function(){
			return this.value;
		};
		this.setValue=function(value){
			this.value=value;
		};
		this.toString=function(){
			return "("+this.key+","+this.value+")";
		};
	}
	Map._Entry.prototype=new Map.Entry();
	Map._Entry.prototype.constructor=Map._Entry;
	var es=new HashSet();
	for(var i=0;i<this._size;i++){
		var elem=this._elements[i];
		var me=new Map._Entry(elem[0],elem[1]);
		es.add(me);
	}
    return es; 
};
AbstractMap.prototype.isEmpty=function (){
    return this._size==0; 
};
AbstractMap.prototype.keys=function (){
    function _Enumeration(map){
    	if(map==undefined){
			map=new HashMap();
		}
		this.list=map.keySet();
	    this.nextIndex=0;
	    this.size=map.getSize();
    }
    _Enumeration.prototype=new Enumeration();
    _Enumeration.prototype.constructor=_Enumeration;
    _Enumeration.prototype.hasMoreElements=function(){
	    return this.nextIndex<this.size;
	};	
	_Enumeration.prototype.nextElement=function(){
	    var nextObj;
	    if(this.nextIndex<this.size){
	        nextObj=this.list.get(this.nextIndex);
	        this.nextIndex++;
	        return nextObj;
	    }
	    return null;
	};
    var keys=this.keySet();
    return new _Enumeration(this);
};
AbstractMap.prototype.keySet=function (){
    var set=new HashSet();
    for(var i=0;i<this._size;i++){
        var elem=this._elements[i];
        set.add(elem[0]); 
    } 
    return set;
};
AbstractMap.prototype.getSize=function (){
    return this._size; 
};
AbstractMap.prototype.size=function (){
    return this._size; 
};
AbstractMap.prototype.remove=function (key){
    if(this.containsKey(key)){
        var oldElems=this._elements;
        var oldSize=this._size;
        this._elements=new Array(this.capacity);
        this._size=0;
        for(var i=0;i<oldSize;i++){
            var oldElem=oldElems[i];
            if(!oldElem[0].equals(key)){
                this.put(oldElem[0],oldElem[1]); 
            } 
        } 
    }
};
AbstractMap.prototype.toString=function (){
    return this._elements.toString(); 
};
function Hashtable(){
	this.jsjava_class="jsjava.util.Hashtable";
	this.capacity=50;
    this._size=0;
    this.span=10;
    this._elements=new Array(this.capacity);
}
Hashtable.prototype=new AbstractMap();
Hashtable.prototype.constructor=Hashtable;
Hashtable.prototype.put=function (pname,pvalue){
	if(pname==undefined||pname==null||pvalue==undefined||pvalue==null){
		throw new NullPointerException(NullPointerException.ERROR,"key and value can not be null");
	}
    this.recapacity();
    if(this.containsKey(pname)){
        for(var i=0;i<this._size;i++){
            var elem=this._elements[i];
            if(elem[0].equals(pname)){
                elem[1]=pvalue;
                return;
            } 
        } 
    }
    this._elements[this._size++]=[pname,pvalue];
};
Hashtable.prototype.elements=function(){
	function _Enumeration(hash){
    	if(hash==undefined){
			hash=new Hashtable();
		}
		this.list=hash.values();
	    this.nextIndex=0;
	    this.size=hash.getSize();
    }
    _Enumeration.prototype=new Enumeration();
    _Enumeration.prototype.constructor=_Enumeration;
    _Enumeration.prototype.hasMoreElements=function(){
	    return this.nextIndex<this.size;
	};	
	_Enumeration.prototype.nextElement=function(){
	    var nextObj;
	    if(this.nextIndex<this.size){
	        nextObj=this.list.get(this.nextIndex);
	        this.nextIndex++;
	        return nextObj;
	    }
	    return null;
	};
	return new _Enumeration(this);

};
function Properties(){
	this.jsjava_class="jsjava.util.Properties";
}
Properties.prototype=new Hashtable();
Properties.prototype.constructor=Properties;
Properties.prototype.setProperty=function(pname,pvalue){
    if(typeof(pname)=="string"&&typeof(pvalue)=="string"){
        this.put(pname,pvalue);	
    }
};
Properties.prototype.getProperty=function (pname){
    var pvalue= this.get(pname);
    if(typeof(pvalue)=="string"){
    	return pvalue;
    }
    return null;
};
Properties.prototype.addProperties=function (hash){
    if(hash!=null&&hash.size()>0){
        var keys=hash.keys();
        for(var i=0;i<keys.length;i++){
            this.put(keys[i],hash.get(keys[i])); 
        } 
    } 

};
function HashMap(){
	this.jsjava_class="jsjava.util.HashMap";
	this.capacity=50;
    this._size=0;
    this.span=10;
    this._elements=new Array(this.capacity);
}
HashMap.prototype=new AbstractMap();
HashMap.prototype.constructor=HashMap;
function SortedMap(){
	this.jsjava_class="jsjava.util.SortedMap";
}
SortedMap.prototype=new Map();
SortedMap.prototype.constructor=SortedMap;
SortedMap.CONSTANT_ILLEGAL_INVOCATION="This is an interface method and you should use the concrete method";
SortedMap.prototype.comparator=function(){
    throw new IllegalStateException(IllegalStateException.ERROR,SortedMap.CONSTANT_ILLEGAL_INVOCATION);
};
SortedMap.prototype.firstKey=function(){
    throw new IllegalStateException(IllegalStateException.ERROR,SortedMap.CONSTANT_ILLEGAL_INVOCATION); 
};
SortedMap.prototype.headMap=function (toKey){
    throw new IllegalStateException(IllegalStateException.ERROR,SortedMap.CONSTANT_ILLEGAL_INVOCATION);   
};
SortedMap.prototype.lastKey=function (){
    throw new IllegalStateException(IllegalStateException.ERROR,SortedMap.CONSTANT_ILLEGAL_INVOCATION);   
};
SortedMap.prototype.subMap=function (fromKey,toKey){
    throw new IllegalStateException(IllegalStateException.ERROR,SortedMap.CONSTANT_ILLEGAL_INVOCATION);
};
SortedMap.prototype.tailMap=function(fromKey){
    throw new IllegalStateException(IllegalStateException.ERROR,SortedMap.CONSTANT_ILLEGAL_INVOCATION);

};
function TreeMap(comparator){
	this.jsjava_class="jsjava.util.TreeMap";
    this.capacity=50;
    this._size=0;
    this.span=10;
    this._elements=new Array(this.capacity);
    this.comparator=comparator;
}
TreeMap.prototype=new SortedMap();
TreeMap.prototype.constructor=TreeMap;
TreeMap.prototype.recapacity=function(){
    if(this.capacity-this._size<10){
     this.capacity+=this.span;
     var oldElements=this._elements;
        this._elements=new Array(this.capacity); 
        for(var i=0;i<this._size;i++){
            this._elements[i]=oldElements[i]; 
        }
    }
};
TreeMap.prototype.sort=function(){
	function _sort(o1,o2){
		return c.compare(o1,o2);
	}
	var c=this.comparator;
	if(c==undefined||!(c instanceof Comparator)){
		this._elements.sort();
		return;
	}
	this._elements.sort(_sort);
};
TreeMap.prototype.clear=function(){
    this.capacity=50;
    this._size=0;
    this._elements=new Array(this.capacity); 
};
TreeMap.prototype.comparator=function(){
    return this.comparator;
};
TreeMap.prototype.firstKey=function(){
    return this._elements[0][0];
};
TreeMap.prototype.headMap=function (toKey){
    var keyIndex=this.indexOf(toKey);
    if(keyIndex==-1){
    	return;
    }
    var keys=this.keySet();
    var map=new TreeMap();
    for(var i=0;i<keyIndex;i++){
    	var key=keys.get(i);
    	var value=this.get(key);
    	map.put(key,value);
    }
    return map;
};
TreeMap.prototype.indexOf=function (key){
    var keys=this.keySet();
    var keySize=keys.size();
    for(var i=0;i<keySize;i++){
    	var k=keys.get(i);
    	if(k.equals(key)){
    		return i;
    	}
    }
    return -1;
};
TreeMap.prototype.lastKey=function (){
    return this._elements[this._size-1][0];
};
TreeMap.prototype.put=function (pname,pvalue){
	if(pname==undefined||pname==null){
		throw new NullPointerException(NullPointerException.ERROR,"");
	}
    this.recapacity();
    if(this.containsKey(pname)){
        for(var i=0;i<this._size;i++){
            var elem=this._elements[i];
            if(elem[0].equals(pname)){
                elem[1]=pvalue;
                return;
            } 
        } 
    }
    this._elements[this._size++]=[pname,pvalue];
    this.sort();
};
TreeMap.prototype.putAll=function (map){
    if(map==undefined||!(map instanceof Map)){
    	return;
    }
    var keyset=map.keySet();
    var keysize=keyset.size();
    for(var i=0;i<keysize;i++){
    	var key=keyset.get(i);
    	var value=map.get(key);
    	this.put(key,value);
    }
};
TreeMap.prototype.get=function (pname){
    for(var i=0;i<this._size;i++){
        var elem=this._elements[i];
        if(elem[0].equals(pname)){
            return elem[1]; 
        } 
    }
};
TreeMap.prototype.containsKey=function(pname){
    if(this.get(pname)==undefined){
        return false; 
    }
    return true;
};
TreeMap.prototype.containsValue=function (pvalue){
    for(var i=0;i<this._size;i++){
        var elem=this._elements[i];
        if(elem[1].equals(pvalue)){
            return true;
        } 
    }
    return false;
};
TreeMap.prototype.values=function (){
    var values=new ArrayList();
    for(var i=0;i<this._size;i++){
        var elem=this._elements[i];
        values.add(elem);
    } 
    return values;
};
TreeMap.prototype.entrySet=function (){
    return this._elements; 
};
TreeMap.prototype.isEmpty=function (){
    return this._size==0; 
};
TreeMap.prototype.keys=function (){
    function KeysEnueration(list){
    	if(list==undefined){
			list=new ArrayList();
		}
		this.list=list;
	    this.nextIndex=0;
	    this.size=list.getSize();
    }
    KeysEnueration.prototype=new Enumeration();
    KeysEnueration.prototype.constructor=KeysEnueration;
    KeysEnueration.prototype.hasMoreElements=function(){
	    return this.nextIndex<this.size;
	};	
	KeysEnueration.prototype.nextElement=function(){
	    var nextObj;
	    if(this.nextIndex<this.size){
	        nextObj=this.list.get(this.nextIndex);
	        this.nextIndex++;
	        return nextObj;
	    }
	    return null;
	};
    var keys=this.keySet();
    return new KeysEnueration(keys);
};
TreeMap.prototype.keySet=function (){
    var set=new HashSet();
    for(var i=0;i<this._size;i++){
        var elem=this._elements[i];
        set.add(elem[0]); 
    } 
    return set;
};
TreeMap.prototype.getSize=function (){
    return this._size; 
};
TreeMap.prototype.size=function (){
    return this._size; 
};
TreeMap.prototype.remove=function (key){
    if(this.containsKey(key)){
        var oldElems=this._elements;
        var oldSize=this._size;
        this._elements=new Array(this.capacity);
        this._size=0;
        for(var i=0;i<oldSize;i++){
            var oldElem=oldElems[i];
            if(!oldElem[0].equals(key)){
                this.put(oldElem[0],oldElem[1]); 
            } 
        } 
    }
};
TreeMap.prototype.subMap=function (fromKey,toKey){
    var fromIndex=this.indexOf(fromKey);
    var toIndex=this.indexOf(toKey);
    if(fromIndex==-1){
    	fromIndex=0;
    }
    if(fromIndex>toIndex){
    	return;
    }
    var keys=this.keySet();
    var map=new TreeMap();
    for(var i=fromIndex;i<toIndex;i++){
    	var key=keys.get(i);
    	var value=this.get(key);
    	map.put(key,value);
    }
    return map;
};
TreeMap.prototype.tailMap=function(toKey){
    var keyIndex=this.indexOf(toKey);
    if(keyIndex==-1){
    	return;
    }
    var keys=this.keySet();
    var map=new TreeMap();
    for(var i=keyIndex;i<this._size;i++){
    	var key=keys.get(i);
    	var value=this.get(key);
    	map.put(key,value);
    }
    return map;
};
TreeMap.prototype.toString=function (){
    return this._elements.toString(); 
};
function ActionEvent(source,id,command,modifiers){
	this.jsjava_class="jsjava.awt.event.ActionEvent";
	this.source=source;
	this.id=id;
	this.command=command;
	this.modifiers=modifiers;
}
ActionEvent.prototype=new AWTEvent();
ActionEvent.prototype.constructor=ActionEvent;
ActionEvent.prototype.getActionCommand=function(){
	return this.command;
};
ActionEvent.prototype.getModifiers=function(){
	return this.modifiers;

};
function ActionListener(){
	this.jsjava_class="jsjava.awt.event.ActionListener";
}
ActionListener.CONSTANT_ILLEGAL_INVOCATION="This is an interface method and you should use the concrete method";
ActionListener.prototype.actionPerformed=function(actionEvent){
	throw new IllegalStateException(IllegalStateException.ERROR,ActionListener.CONSTANT_ILLEGAL_INVOCATION); 

};
function AjaxAuthentication(username,password){
	this.jsjava_class="jsorg.eob.ajax.AjaxAuthentication";	
	this.username=username;
	this.password=password;
};
AjaxAuthentication.prototype.getUserName=function(){
	return this.username;
};
AjaxAuthentication.prototype.getPassword=function(){
	return this.password;

};
function AjaxHeader(name,value){
	this.jsjava_class="jsorg.eob.ajax.AjaxHeader";	
	this.name=name;
	this.value=value;
};
AjaxHeader.prototype.getName=function(){
	return this.name;
};
AjaxHeader.prototype.getValue=function(){
	return this.value;

};
function AjaxRequest(){
	this.jsjava_class="jsorg.eob.ajax.AjaxRequest";
	this.request=AjaxUtils.getXMLHTTPRequest();		
	this.headers=new Hashtable();
};
AjaxRequest.prototype.setMethodOnSuccess=function(jsFunc,args){
	this.jsFunctionOnSuccess=jsFunc;
	this.jsFunctionArgsOnSuccess=args;
};
AjaxRequest.prototype.getMethodOnSuccess=function(){
	return this.jsFunctionOnSuccess;
};
AjaxRequest.prototype.getReadyState=function(){
	return this.request.readyState;
};
AjaxRequest.prototype.getResponseBody=function(){
	return this.request.responseBody;
};
AjaxRequest.prototype.getResponseStream=function(){
	return this.request.responseStream;
};
AjaxRequest.prototype.getResponseText=function(){
	return this.request.responseText;
};
AjaxRequest.prototype.getResponseXML=function(){
	return this.request.responseXML;
};
AjaxRequest.prototype.getStatus=function(){
	return this.request.status;
};
AjaxRequest.prototype.getStatusText=function(){
	return this.request.statusText;
};
AjaxRequest.prototype.abort=function(){
	return this.request.abort();
};
AjaxRequest.prototype.setRequestMethod=function(reqMethod){
	this.requestMethod=reqMethod;
};
AjaxRequest.prototype.setRequestURL=function(reqURL){
	this.requestURL=reqURL;
};
AjaxRequest.prototype.setAsync=function(isAsync){
	this.isAsynchronous=isAsync;
};
AjaxRequest.prototype.setAuthentication=function(auth){
	this.authentication=auth;
};
AjaxRequest.prototype.send=function(data){	
	var ajaxRequest=this;
	var authUserName="";
	var authPassword="";
	if(this.authentication){
		authUserName=this.authentication.getUserName();
		authPassword=this.authentication.getPassword();
	}
	this.request.open(this.requestMethod,this.requestURL,this.isAsynchronous,authUserName,authPassword);
	var headerNames=this.headers.keys();
	for(var i=0;i<headerNames.length;i++){
		var headerName=headerNames[i];
		var headerValue=this.headers.get(headerName);
		this.request.setRequestHeader(headerName,headerValue);
	}
	this.request.onreadystatechange=function(){
		if(ajaxRequest.request.readyState==4){
			if(ajaxRequest.request.status==200){
				var args=ajaxRequest.jsFunctionArgsOnSuccess;
				var argStr="";
				if(args!=undefined&&args.length){
					for(var i=0;i<args.length;i++){
						argStr+="args["+i+"],";
					}
				}
				if(argStr.indexOf(",")==argStr.length-1){
					argStr=argStr.substring(0,argStr.length-1);
				}
				var newStr = "ajaxRequest.jsFunctionOnSuccess("+ argStr+")"; 
				eval(newStr);
			}
		};
	};
	this.request.send(data);
};
AjaxRequest.prototype.setRequestHeader=function(headerName,headerValue){
	this.headers.put(headerName,headerValue);
};
AjaxRequest.prototype.setRequestHeaders=function(headersArray){
	for(var i=0;i<headersArray.length;i++){
		var header=headersArray[i];
		var headerName=header.getName();
		var headerValue=header.getValue();
		this.headers.put(headerName,headerValue);
	}	
};
AjaxRequest.prototype.getResponseHeaderValue=function(headerName){
	this.request.getResponseHeader(headerName);
};
AjaxRequest.prototype.getAllResponseHeaders=function(){
	this.request.getAllResponseHeaders();

};
function AjaxUtils(){
	this.jsjava_class="jsorg.eob.ajax.AjaxUtils";	
};
AjaxUtils.getXMLHTTPRequest=function(){
	var xmlHttpReq;
	if(BrowserUtils.isIE()){
		var arr = ["MSXML2.XMLHTTP.5.0", "Microsoft.XMLHTTP", "MSXML2.XMLHTTP.4.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP"];
		for(var i=0;i<arr.length;i++){
	        try{
	            xmlHttpReq = new ActiveXObject(arr[i]);
	            break;
	        }catch(e){ 
	        }
        }
	}else{
		xmlHttpReq = new XMLHttpRequest();
	}
	return xmlHttpReq;

};
function Animation(){
	this.jsjava_class="jsorg.eob.animation.Animation";
	this.scenes=new ArrayList();
};
Animation.prototype.addScene=function(scene){
    this.scenes.add(scene);
};
Animation.prototype.getScenes=function(){
    return this.scenes.toArray();
};
Animation.prototype.getScene=function(index){
    return this.scenes.get(index);
};
Animation.prototype.getMaxSceneNumber=function(){
    return this.scenes.toArray().length;
};
Animation.prototype.clone=function(){
	var animation=new Animation();
	animation.scenes=this.scenes;
	return animation;

};
function AnimationFrame(){
	this.jsjava_class="jsorg.eob.animation.AnimationFrame";
};
AnimationFrame.prototype.setStatus=function(status){
    this.status=status;	
};
AnimationFrame.prototype.getStatus=function(){
    return this.status;	
};
AnimationFrame.prototype.setModel=function(model){
    this.model=model;	
};
AnimationFrame.prototype.getModel=function(){
    return this.model;	

};
function AnimationFrameModel(){
	this.jsjava_class="jsorg.eob.animation.AnimationFrameModel";
	this.id=null;
    this.name=null;
    this.title=null;
    this.type=null;
};
AnimationFrameModel.prototype.setId=function(id){
    this.id=id;	
};
AnimationFrameModel.prototype.getId=function(){
    return this.id;	
};
AnimationFrameModel.prototype.setName=function(name){
    this.name=name;	
};
AnimationFrameModel.prototype.getName=function(){
    return this.name;	
};
AnimationFrameModel.prototype.setTitle=function(title){
    this.title=title;	
};
AnimationFrameModel.prototype.getTitle=function(){
    return this.title;	
};
AnimationFrameModel.prototype.setType=function(type){
    this.type=type;	
};
AnimationFrameModel.prototype.getType=function(){
    return this.type;	

};
function AnimationScene(){
	this.jsjava_class="jsorg.eob.animation.AnimationScene";
	this.frames=new ArrayList();
};
AnimationScene.prototype.setSequence=function(sequence){
    this.sequence=sequence;	
};
AnimationScene.prototype.getSequence=function(){
    return this.sequence;	
};
AnimationScene.prototype.addFrame=function(frame){
    this.frames.add(frame);
};
AnimationScene.prototype.getFrames=function(){
    return this.frames.toArray();

};
function AnimationStudio(){
	this.jsjava_class="jsorg.eob.animation.AnimationStudio";
	this.animation=null;
	this.timer=null;
	this.sceneNumber=0;
	this.maxSceneNumber=0;
	this.instanceName=null;
};
AnimationStudio.prototype.setInstanceName=function(instanceName){
    this.instanceName=instanceName;
};
AnimationStudio.prototype.loadFromXml=function(aXml){
	var parser=new XmlBrowserParser();
	parser.loadXml(aXml);
	var xmldom=parser.toDocument();
    var rootElem=xmldom.documentElement;
    var sceneElems=rootElem.getElementsByTagName("graph-scene");
    var scenesSize=sceneElems.length;
    this.maxSceneNumber=scenesSize;
    var animation=new Animation();
    for(var i=0;i<scenesSize;i++){
        var sceneElem=sceneElems[i];
        var scene=new AnimationScene();
        var sceneSequenceElem=sceneElem.getElementsByTagName("graph-scene-sequence")[0];
        var sceneSequence=sceneSequenceElem.firstChild.nodeValue;
        scene.setSequence(sceneSequence);
        var frameElems=sceneElem.getElementsByTagName("graph-frame");
        var framesSize=frameElems.length;
        for(var j=0;j<framesSize;j++){
            var frameElem=frameElems[j];
            var frame=new AnimationFrame();
            var statusElem=frameElem.getElementsByTagName("graph-frame-status")[0];
            var status=statusElem.firstChild.nodeValue;
            frame.setStatus(status);
            var model=new AnimationFrameModel();
            var modelElem=frameElem.getElementsByTagName("graph-object")[0];
            var typeElem=modelElem.getElementsByTagName("graph-type")[0];
            var type=typeElem.firstChild.nodeValue;
            var metaElem=modelElem.getElementsByTagName("graph-meta-info")[0];
            var id=metaElem.getElementsByTagName("graph-object-id")[0].firstChild.nodeValue;
            var name=metaElem.getElementsByTagName("graph-object-name")[0].firstChild.nodeValue;
            var title=metaElem.getElementsByTagName("graph-object-label")[0].firstChild.nodeValue;
            model.setId(id);
            model.setName(name);
            model.setTitle(title);
            model.setType(type);
            frame.setModel(model);
            scene.addFrame(frame);
        }
        animation.addScene(scene);
    }
    this.animation=animation;
};
AnimationStudio.prototype.load=function(animation){
	this.animation=animation;
};
AnimationStudio.prototype.setInterval=function(interval){
	this.interval=interval;
};
AnimationStudio.prototype.getInterval=function(){
	return this.interval;
};
AnimationStudio.prototype.setAction=function(action){
	this.action=action;
};
AnimationStudio.prototype.getAction=function(){
	return this.action;
};
AnimationStudio.prototype.setStartAction=function(action){
	this.startAction=action;
};
AnimationStudio.prototype.getStartAction=function(){
	return this.startAction;
};
AnimationStudio.prototype.setRender=function(render){
	this.render=render;
};
AnimationStudio.prototype.getRender=function(){
	return this.render;
};
AnimationStudio.prototype.setEndAction=function(action){
	this.endAction=action;
};
AnimationStudio.prototype.getEndAction=function(){
	return this.endAction;
};
AnimationStudio.prototype.play=function(){
	var action=this.getAction();
	var startAction=this.getStartAction();
	if(typeof(startAction)=="function"){
		startAction();
	}else{
		eval("window."+startAction+"()");
	}
	if(action){
		if(typeof(action)=="function"){
	    	this.timer=setInterval(action(),this.getInterval());  
	    }else{
	    	this.timer=setInterval(action+"()",this.getInterval()); 
	    }
	}else{
	    this.timer=setInterval("jsjava_play_animation('"+this.instanceName+"')",this.getInterval()); 
	}
};
AnimationStudio.prototype.suspend=function(){
	clearInterval(this.timer);
};
AnimationStudio.prototype.restore=function(){
	this.play();
};
AnimationStudio.prototype.stop=function(){	
	var endAction=studio.getEndAction();
    if(endAction){
    	if(typeof(endAction)=="function"){
    		endAction();
    	}else{
    		eval("window."+endAction+"()");
    	}
    }
    if(this.timer&&this.timer!=null){
    	clearInterval(this.timer);
    }
    this.sceneNumber=0;
};
function jsjava_play_animation(studioInstanceName){
    var studio=eval("window."+studioInstanceName);
    studio.sceneNumber++;
	if(studio.sceneNumber>=studio.maxSceneNumber-1){
	    studio.stop();
	    return;
	}	
	var render=studio.getRender();
	var currentScene=studio.animation.getScene(studio.sceneNumber);	
    var frames=currentScene.getFrames();
    for(var i=0;i<frames.length;i++){
        var frame=frames[i];
        var status=frame.getStatus();
        var model=frame.getModel();
        var type=model.getType();
        var id=model.getId();
        var title=model.getTitle(); 
        eval("window."+render+"('"+id+"','"+type+"','"+status+"','"+title+"')");
    }
};
function AreaUtils(){
	this.jsjava_class="jsorg.eob.math.area.AreaUtils";
}
AreaUtils.countSquare=function(a){
	if(a<0){
		throw new IllegalArgumentException(IllegalArgumentException.ERROR,
				"side must be equal or larger than zero!");
	}
	return a*a;
};
AreaUtils.countRectangle=function(a,b){
	if(a<0||b<0){
		throw new IllegalArgumentException(IllegalArgumentException.ERROR,
				"sides must be equal or larger than zero!");
	}
	return a*a;
};
AreaUtils.countCircle=function(r){
	if(r<0){
		throw new IllegalArgumentException(IllegalArgumentException.ERROR,
				"radius must be equal or larger than zero!");
	}	
	return  Math.PI*r*r;
};
AreaUtils.countCircle2=function(d){
	if(d<0){
		throw new IllegalArgumentException(IllegalArgumentException.ERROR,
				"diameter must be equal or larger than zero!");
	}	
	return  Math.PI*d*d/4;
};
AreaUtils.countEquilateralTriangle=function(a){
	return  AreaUtils.countTriangle(a,a,Math.PI/3);
};
AreaUtils.countTriangle=function(a,h){
	if(a<0||h<0){
		throw new IllegalArgumentException(IllegalArgumentException.ERROR,
				"sides and height must be equal or larger than zero!");
	}	
	return  0.5*a*h;
};
AreaUtils.countTriangle2=function(a,b,angleC){
	if(a<0||b<0||angleC<0){
		throw new IllegalArgumentException(IllegalArgumentException.ERROR,
				"sides and angle must be equal or larger than zero!");
	}	
	return  0.5*a*b*Math.sin(angleC);
};
AreaUtils.countTriangle3=function(a,b,c){
	if(a<0||b<0||c<0){
		throw new IllegalArgumentException(IllegalArgumentException.ERROR,
				"sides must be equal or larger than zero!");
	}	
	var s=(a+b+c)/2;
	return  Math.sqrt(s*(s-a)*(s-b)*(s-c));
};
AreaUtils.countTriangle4=function(a,angleA,angleB,angleC){
	if(a<0||angleA<0||angleB<0||angleC<0){
		throw new IllegalArgumentException(IllegalArgumentException.ERROR,
				"sides and angle must be equal or larger than zero!");
	}	
	return  a*a*Math.sin(angleB)*Math.sin(angleC)/(2*Math.sin(angleA));
};
AreaUtils.countTrapezia=function(a,b,h){
	if(a<0||b<0||h<0){
		throw new IllegalArgumentException(IllegalArgumentException.ERROR,
				"sides and height must be equal or larger than zero!");
	}	
	return  0.5*(a+b)*h;
};
AreaUtils.countTrapezia2=function(m,h){
	if(m<0||h<0){
		throw new IllegalArgumentException(IllegalArgumentException.ERROR,
				"sides and height must be equal or larger than zero!");
	}	
	return  m*h;
};
AreaUtils.countQuadrangle=function(d,D,angleA){
	if(d<0||D<0||angleA<0){
		throw new IllegalArgumentException(IllegalArgumentException.ERROR,
				"sides and angle must be equal or larger than zero!");
	}	
	return  d*D/2*Math.sin(DegreeTransform.toRadian(angleA));
};
AreaUtils.countParallelogram=function(a,h){
	if(a<0||h<0){
		throw new IllegalArgumentException(IllegalArgumentException.ERROR,
				"sides must be equal or larger than zero!");
	}	
	return  a*h;
};
AreaUtils.countParallelogram2=function(a,b,angleA){
	if(a<0||b<0||angleA<0){
		throw new IllegalArgumentException(IllegalArgumentException.ERROR,
				"sides and angle must be equal or larger than zero!");
	}	
	return  a*b*Math.sin(DegreeTransform.toRadian(angleA));
};
AreaUtils.countDiamond=function(d,D){
	if(d<0||D<0){
		throw new IllegalArgumentException(IllegalArgumentException.ERROR,
				"sides must be equal or larger than zero!");
	}	
	return  d*D/2;
};
AreaUtils.countDiamond2=function(a,angleA){
	if(a<0||angleA<0){
		throw new IllegalArgumentException(IllegalArgumentException.ERROR,
				"sides and angle must be equal or larger than zero!");
	}	
	return  a*a*Math.sin(DegreeTransform.toRadian(angleA));
};
AreaUtils.countSector=function(r,angleA){
	if(r<0||angleA<0){
		throw new IllegalArgumentException(IllegalArgumentException.ERROR,
				"sides and angle must be equal or larger than zero!");
	}	
	return  Math.PI*r*r*angleA/360;
};
AreaUtils.countArc=function(r,angleA){
	if(r<0||angleA<0){
		throw new IllegalArgumentException(IllegalArgumentException.ERROR,
				"sides and angle must be equal or larger than zero!");
	}	
	return  r*r/2*(DegreeTransform.toRadian(angleA)-Math.sin(DegreeTransform.toRadian(angleA)));
};
AreaUtils.countAnnulus=function(r,R){
	if(r<0||R<0){
		throw new IllegalArgumentException(IllegalArgumentException.ERROR,
				"radius must be equal or larger than zero!");
	}	
	if(r>R){
		throw new IllegalArgumentException(IllegalArgumentException.ERROR,
				"R must be equal or larger than r!");
	}
	return  Math.PI*(R*R-r*r);
};
AreaUtils.countEllipse=function(d,D){
	if(d<0||D<0){
		throw new IllegalArgumentException(IllegalArgumentException.ERROR,
				"sides must be equal or larger than zero!");
	}	
	return  Math.PI*D*d/4;
};
ArithmeticException.prototype=new Error();
ArithmeticException.prototype.constructor=ArithmeticException;
ArithmeticException.ERROR=0;
function ArithmeticException(code,message){
	this.jsjava_class="jsjava.lang.ArithmeticException";
	this.code=code;
    this.message=message;
    this.name="jsjava.lang.ArithmeticException";

}
ArrayIndexOutOfBoundsException.prototype=new Error();
ArrayIndexOutOfBoundsException.prototype.constructor=ArrayIndexOutOfBoundsException;
ArrayIndexOutOfBoundsException.ERROR=0;
function ArrayIndexOutOfBoundsException(code,message){
	this.jsjava_class="jsjava.lang.ArrayIndexOutOfBoundsException";
	this.code=code;
    this.message=message;
    this.name="jsjava.lang.ArrayIndexOutOfBoundsException";

}
function Arrays(){
	this.jsjava_class="jsjava.util.Arrays";
}
Arrays.asList=function(arr){
	if(arr==undefined||!(arr instanceof Array)){
		return new NullPointerException(NullPointerException.ERROR,"");
	}
	function UnModifiedArrayList(){
	
	}
	UnModifiedArrayList.prototype=new ArrayList();
	UnModifiedArrayList.prototype.constructor=UnModifiedArrayList;
	UnModifiedArrayList.CONSTANT_UNSUPPORTED_OPERATION="This is an unmodified list!";
	UnModifiedArrayList.prototype.add=function(o){
		throw new UnsupportedOperationException(UnsupportedOperationException.ERROR,UnModifiedArrayList.CONSTANT_UNSUPPORTED_OPERATION);
	};
	UnModifiedArrayList.prototype.addIndexOf=function(index,o){
		throw new UnsupportedOperationException(UnsupportedOperationException.ERROR,UnModifiedArrayList.CONSTANT_UNSUPPORTED_OPERATION);
	};
	UnModifiedArrayList.prototype.addAll=function(c){
		throw new UnsupportedOperationException(UnsupportedOperationException.ERROR,UnModifiedArrayList.CONSTANT_UNSUPPORTED_OPERATION);
	};
	UnModifiedArrayList.prototype.addAllIndexOf=function(index,c){
		throw new UnsupportedOperationException(UnsupportedOperationException.ERROR,UnModifiedArrayList.CONSTANT_UNSUPPORTED_OPERATION);
	};
	UnModifiedArrayList.prototype.clear=function(){
		throw new UnsupportedOperationException(UnsupportedOperationException.ERROR,UnModifiedArrayList.CONSTANT_UNSUPPORTED_OPERATION);
	};
	UnModifiedArrayList.prototype.remove=function(o){
		throw new UnsupportedOperationException(UnsupportedOperationException.ERROR,UnModifiedArrayList.CONSTANT_UNSUPPORTED_OPERATION);
	};
	UnModifiedArrayList.prototype.removeIndexOf=function(index,o){
		throw new UnsupportedOperationException(UnsupportedOperationException.ERROR,UnModifiedArrayList.CONSTANT_UNSUPPORTED_OPERATION);
	};
	UnModifiedArrayList.prototype.removeAll=function(c){
		throw new UnsupportedOperationException(UnsupportedOperationException.ERROR,UnModifiedArrayList.CONSTANT_UNSUPPORTED_OPERATION);
	};
	UnModifiedArrayList.prototype.retainAll=function(c){
		throw new UnsupportedOperationException(UnsupportedOperationException.ERROR,UnModifiedArrayList.CONSTANT_UNSUPPORTED_OPERATION);
	};
	UnModifiedArrayList.prototype.set=function(index,o){
		throw new UnsupportedOperationException(UnsupportedOperationException.ERROR,UnModifiedArrayList.CONSTANT_UNSUPPORTED_OPERATION);
	};
	var uList=new UnModifiedArrayList();
	for(var i=0;i<arr.length;i++){
		uList._elements[uList._size++]=arr[i];
	}
	return uList;
};
Arrays.binarySearch=function(arr,key){
	if(arr==undefined||!(arr instanceof Array)){
		return new NullPointerException(NullPointerException.ERROR,"");
	}
	var low = 0;
	var high = arr.length-1;
	while (low <= high) {
	    var mid = (low + high) >> 1;
	    var midVal = a[mid];
	    var cmp = midVal.compareTo(key);
	    if (cmp < 0){
			low = mid + 1;
		}else if (cmp > 0){
			high = mid - 1;
		}else{
			return mid; // key found
		}
	}
	return -(low + 1);  // key not found.	
};
Arrays.equals=function(arr1,arr2){
	if(arr1==undefined&&arr2==undefined){
		return true;
	}
	if(!(arr1 instanceof Array)||!(arr2 instanceof Array)){
		return false;
	}
	var l1=arr1.length;
	var l2=arr2.length;
	if(l1!=l2){
		return false;
	}
	for(var i=0;i<l1;i++){
		if(arr1[i]!=arr2[i]){
			return false;
		}
	}
	return true;
};
Arrays.fill=function(arr,o){
	if(arr==undefined||!(arr instanceof Array)){
		return;
	}
	for(var i=0;i<arr.length;i++){
		arr[i]=o;
	}
};
Arrays.fillBetween=function(arr,fromIndex,toIndex,o){
	if(arr==undefined||!(arr instanceof Array)){
		return;
	}
	var aLength=arr.length;
	if(fromIndex<0){
		fromIndex=0;
	}
	if(toIndex>aLength){
		toIndex=aLength;
	}
	if(fromIndex>toIndex){
		return;
	}	
	for(var i=fromIndex;i<toIndex;i++){
		arr[i]=o;
	}
};
Arrays.sort=function(arr,c){
	function _sort(o1,o2){
		return c.compare(o1,o2);
	}
	if(arr==undefined||!(arr instanceof Array)){
		return;
	}
	if(c==undefined||!(c instanceof Comparator)){
		arr.sort();
	}else{
		arr.sort(c);
	}
};
Arrays.sortBetween=function(arr,fromIndex,toIndex,c){
	function _sort(o1,o2){
		return c.compare(o1,o2);
	}
	if(arr==undefined||!(arr instanceof Array)){
		return;
	}
	var aLength=arr.length;
	if(fromIndex<0){
		fromIndex=0;
	}
	if(toIndex>aLength){
		toIndex=aLength;
	}
	if(fromIndex>toIndex){
		return;
	}	
	var midArr=new Array();
	for(var i=fromIndex,j=0;i<toIndex;i++,j++){
		midArr[j]=arr[i];
	}
	if(c==undefined||!(c instanceof Comparator)){
		midArr.sort();
	}else{
		midArr.sort(c);
	}
	for(var i=fromIndex,j=0;i<toIndex;i++,j++){
		arr[i]=midArr[j];
	}

};
function ArrayUtils(){
	this.jsjava_class="jsorg.apache.commons.lang.ArrayUtils";
}
ArrayUtils.add=function(arr,value){
	var narr=new Array(arr.length+1);
	for(var i=0;i<arr.length;i++){
		narr[i]=arr[i];
	}
	narr[arr.length]=value;
	return narr;
};
ArrayUtils.addIndexOf=function(arr,index,value){
	if(index>arr.length||index<0){
	    return arr;
	}
	var narr=new Array(arr.length+1);
	for(var i=0;i<narr.length;i++){
	    if(i<index){
	    	narr[i]=arr[i];
	    }else if(i==index){
	    	narr[i]=value;
	    }else{
	    	narr[i]=arr[i-1];
	    }
	} 
	return narr;
};
ArrayUtils.addAll=function(toArr,fromArr){
	var toArrLength=toArr.length;
	var fromArrLength=fromArr.length;
	var narr=new Array(toArrLength+fromArrLength);
	var j=0;
	for(var i=0;i<narr.length;i++){
		if(j==toArrLength){
			j=0;
		}
		if(i<toArrLength){
		    narr[i]=toArr[j];		    
		}else{
			narr[i]=fromArr[j];
		}
		j++;
	}
	return narr;
};
ArrayUtils.clone=function(arr){
	var narr=new Array(arr.length);
	for(var i=0;i<arr.length;i++){
		narr[i]=arr[i];
	}
	return narr;
};
ArrayUtils.contains=function(arr,value){
	for(var i=0;i<arr.length;i++){
		if(arr[i]==value){
			return true;
		}
	}
	return false;
};
ArrayUtils.containsEqual=function(arr,value){
	for(var i=0;i<arr.length;i++){
		if(arr[i].equals(value)){
			return true;
		}
	}
	return false;
};
ArrayUtils.getLength=function(arr){
	return arr.length;
};
ArrayUtils.indexOf=function(arr,value){
	for(var i=0;i<arr.length;i++){
		if(arr[i]==value){
			return i;
		}
	}
	return -1;
};
ArrayUtils.isEmpty=function(arr){
	if(arr==undefined||arr.length==0){
		return true;
	}
	return false;
};
ArrayUtils.isEquals=function(arr1,arr2){
	var arr1Length=arr1.length;
	var arr2Length=arr2.length;
	if(arr1Length!=arr2Length){
		return false;
	}	
	for(var i=0;i<arr1Length;i++){
		if(arr1[i]!=arr2[i]){
			return false;
		}
	}
	return true;
};
ArrayUtils.isSameLength=function(arr1,arr2){
	var arr1Length=arr1.length;
	var arr2Length=arr2.length;
	if(arr1Length!=arr2Length){
		return false;
	}	
	return true;
};
ArrayUtils.lastIndexOf=function(arr,value){
	for(var i=arr.length-1;i>=0;i--){
		if(arr[i]==value){
			return i;
		}
	}
	return -1;
};
ArrayUtils.remove=function(arr,index){
	if(index>arr.length-1||index<0){
		return arr;
	}
	var narr=new Array(arr.length-1);
	for(var i=0;i<narr.length;i++){
		if(i<index){
			narr[i]=arr[i];
		}else{
			narr[i]=arr[i+1];
		}
	}
	return narr;
};
ArrayUtils.removeElement=function(arr,value){
	var index=ArrayUtils.indexOf(arr,value);
	if(index==-1){
		return arr;
	}
	return ArrayUtils.remove(arr,index);
};
ArrayUtils.reverse=function(arr){
	return arr.reverse();
};
ArrayUtils.subarray=function(arr,startIndexInclusive,endIndexExclusive){
	if(startIndexInclusive<=endIndexExclusive&&startIndexInclusive>=0&&endIndexExclusive<=arr.length){
		var narr=new Array(endIndexExclusive-startIndexInclusive);
		for(var i=startIndexInclusive;i<endIndexExclusive;i++){
			narr[i]=arr[i];
		}
		return narr;
	}
	return null;
};
ArrayUtils.toString=function(arr){
	return arr.toString();
};
ArrayUtils.toStringIfNull=function(arr,defaultValue){
	var narr=ArrayUtils.clone(arr);
	for(var i=0;i<narr.length;i++){
		if(narr[i]==undefined||narr[i]==null){
			narr[i]=defaultValue;
		}
	}
	return narr.toString();

};
function AWTEvent(source,id){
	this.jsjava_class="jsjava.awt.AWTEvent";
}
AWTEvent.prototype=new EventObject();
AWTEvent.prototype.constructor=AWTEvent;
AWTEvent.prototype.getID=function(){
	return this.id;

};
function BeanUtils(){
	this.jsjava_class="jsorg.apache.commons.beanutils.BeanUtils";
}
BeanUtils.getProperty=function(bean,name){
    if(!bean||typeof(bean)!="object"||!name||typeof(name)!="string"){
        throw new IllegalArgumentException(IllegalArgumentException.ERROR,"bean and property can not be null!");
    }
    var capitalName=name.charAt(0).toUpperCase()+name.substring(1);
    var str="bean.get"+capitalName+"()";
    var value=eval(str);
	return value;
};
BeanUtils.getSimpleProperty=function(bean,name){
    if(!bean||typeof(bean)!="object"||!name||typeof(name)!="string"){
        throw new IllegalArgumentException(IllegalArgumentException.ERROR,"bean and property can not be null!");
    }
    var capitalName=name.charAt(0).toUpperCase()+name.substring(1);
    var str="bean.get"+capitalName+"()";
    var value=eval(str);
	return value;
};
BeanUtils.getIndexedProperty=function(bean,name,index){
	if(!bean||typeof(bean)!="object"||!name||typeof(name)!="string"||isNaN(index)||index<0){
        throw new IllegalArgumentException(IllegalArgumentException.ERROR,
              "bean and property and can not be null and index can not be smaller than 0!");
    }
    var capitalName=name.charAt(0).toUpperCase()+name.substring(1);
    var str="bean.get"+capitalName+"("+index+")";
    var value=eval(str);
	return value;
};
BeanUtils.getMappedProperty=function(bean,name,key){
	if(!bean||typeof(bean)!="object"||!name||typeof(name)!="string"||!key||typeof(key)!="string"){
        throw new IllegalArgumentException(IllegalArgumentException.ERROR,
              "bean and property and key can not be null!");
    }
    var capitalName=name.charAt(0).toUpperCase()+name.substring(1);
    var str="bean.get"+capitalName+"('"+key+"')";
    var value=eval(str);
	return value;
};
BeanUtils.setProperty=function(bean,name,value){
    if(!bean||typeof(bean)!="object"||!name||typeof(name)!="string"){
        throw new IllegalArgumentException(IllegalArgumentException.ERROR,"bean and property can not be null!");
    }
    var capitalName=name.charAt(0).toUpperCase()+name.substring(1);
    var str="bean.set"+capitalName+"('"+value+"')";
    var value=eval(str);
	return value;
};
BeanUtils.copyProperty=function(bean,name,value){
    if(!bean||typeof(bean)!="object"||!name||typeof(name)!="string"){
        throw new IllegalArgumentException(IllegalArgumentException.ERROR,"bean and property can not be null!");
    }
    var capitalName=name.charAt(0).toUpperCase()+name.substring(1);
    var str="bean.set"+capitalName+"('"+value+"')";
    var value=eval(str);
	return value;
};
BeanUtils.populate=function(bean,properties){
	if(!bean||typeof(bean)!="object"||!properties||!properties.jsjava_class||properties.jsjava_class!="jsjava.util.Hashtable"){
        throw new IllegalArgumentException(IllegalArgumentException.ERROR,
             "bean and properties can not be null and properties must be an instance of jsjava.util.Hashtable");
    }
    var keys=properties.keySet().iterator();
    while(keys.hasNext()){
    	var key=keys.next();
    	var value=properties.get(key);
    	BeanUtils.setProperty(bean,key,value);
    }

};

function MathUtils(){
	this.jsjava_class="jsorg.apache.commons.math.util.MathUtils";
}
MathUtils.binomialCoefficient=function(n,k){
	if (n < k) {
        throw new IllegalArgumentException(IllegalArgumentException.ERROR,"must have n >= k for binomial coefficient (n,k)");
    }
    if (n < 0) {
        throw new IllegalArgumentException(IllegalArgumentException.ERROR,"must have n >= 0 for binomial coefficient (n,k)");
    }
    if ((n == k) || (k == 0)) {
        return 1;
    }
    if ((k == 1) || (k == n - 1)) {
        return n;
    }
    var result = Math.round(MathUtils.binomialCoefficientDouble(n, k));
    if (result == Long.MAX) {
        throw new ArithmeticException(ArithmeticException.ERROR,"result too large to represent in a long integer");
    }
    return result;
};
MathUtils.binomialCoefficientDouble=function(n,k){
	return Math.floor(Math.exp(MathUtils.binomialCoefficientLog(n, k)) + 0.5);
};
MathUtils.binomialCoefficientLog=function(n,k){
	if (n < k) {
        throw new IllegalArgumentException(IllegalArgumentException.ERROR,"must have n >= k for binomial coefficient (n,k)");
    }
    if (n < 0) {
        throw new IllegalArgumentException(IllegalArgumentException.ERROR,"must have n >= 0 for binomial coefficient (n,k)");
    }
    if ((n == k) || (k == 0)) {
        return 0;
    }
    if ((k == 1) || (k == n - 1)) {
        return Math.log(n);
    }
    var logSum = 0;
    // n!/k!
    for (var i = k + 1; i <= n; i++) {
        logSum += Math.log(i);
    }
    // divide by (n-k)!
    for (var i = 2; i <= n - k; i++) {
        logSum -= Math.log(i);
    }
    return logSum;
};
MathUtils.cosh=function(x){
	return (Math.exp(x) + Math.exp(-x)) / 2.0;
};
MathUtils.factorial=function(n){
	var result = Math.round(MathUtils.factorialDouble(n));
    if (result == Long.MAX) {
        throw new ArithmeticException(ArithmeticException.ERROR,"result too large to represent in a long integer");
    }
    return result;
};
MathUtils.factorialDouble=function(n){
	if (n < 0) {
        throw new IllegalArgumentException(IllegalArgumentException.ERROR,"must have n >= 0 for n!");
    }
    return Math.floor(Math.exp(MathUtils.factorialLog(n)) + 0.5);
};
MathUtils.factorialLog=function(n){
	if (n < 0) {
        throw new IllegalArgumentException(IllegalArgumentException.ERROR,"must have n > 0 for n!");
    }
    var logSum = 0;
    for (var i = 2; i <= n; i++) {
        logSum += Math.log(i);
    }
    return logSum;
};
MathUtils.gcd=function(u,v){
	if (u * v == 0) {
        return (Math.abs(u) + Math.abs(v));
    }
    // keep u and v negative, as negative integers range down to
    // -2^31, while positive numbers can only be as large as 2^31-1
    // (i.e. we can't necessarily negate a negative number without
    // overflow)
    if (u > 0) {
        u = -u;
    } // make u negative
    if (v > 0) {
        v = -v;
    } // make v negative
    // B1. [Find power of 2]
    var k = 0;
    while ((u & 1) == 0 && (v & 1) == 0 && k < 31) { // while u and v are
                                                        // both even...
        u /= 2;
        v /= 2;
        k++; // cast out twos.
    }
    if (k == 31) {
        throw new ArithmeticException(ArithmeticException.ERROR,"overflow: gcd is 2^31");
    }
    // B2. Initialize: u and v have been divided by 2^k and at least
    // one is odd.
    var t = ((u & 1) == 1) ? v : -(u / 2);
    // t negative: u was odd, v may be even (t replaces v)
    // t positive: u was even, v is odd (t replaces u)
    do {
        // B4/B3: cast out twos from t.
        while ((t & 1) == 0) { // while t is even..
            t /= 2; // cast out twos
        }
        // B5 [reset max(u,v)]
        if (t > 0) {
            u = -t;
        } else {
            v = t;
        }
        // B6/B3. at this point both u and v should be odd.
        t = (v - u) / 2;
        // |u| larger: t positive (replace u)
        // |v| larger: t negative (replace v)
    } while (t != 0);
    return -u * (1 << k); // gcd is u*2^k
};
MathUtils.indicator=function(x){
	return (x >= 0) ? 1 : -1;
};
MathUtils.lcm=function(a,b){
 	var x=a/MathUtils.gcd(a,b);
 	var y=b;
	var m =x*y;
	return Math.abs(m);
};
MathUtils.sign=function(x){
	return (x == 0) ? 0 : (x > 0) ? 1 : -1;
};
MathUtils.sinh=function(x){
	return (Math.exp(x) - Math.exp(-x)) / 2.0;

};
function Beta(){
	this.jsjava_class="org.apache.commons.math.special.Beta";
}
Beta.DEFAULT_EPSILON = 10e-9;
Beta.regularizedBeta=function(x,a,b){
	return Beta.regularizedBeta4(x, a, b, Beta.DEFAULT_EPSILON, Integer.MAX_VALUE);
};
Beta.regularizedBeta2=function(x,a,b,epsilon){
	return Beta.regularizedBeta4(x, a, b, epsilon, Integer.MAX_VALUE);
};
Beta.regularizedBeta3=function(x,a,b,maxIterations){
	return Beta.regularizedBeta4(x, a, b, Beta.DEFAULT_EPSILON, maxIterations);
};
Beta.regularizedBeta4=function(x,a,b,epsilon,maxIterations){
	function ContinuedFraction(){
	}
	ContinuedFraction.DEFAULT_EPSILON = 10e-9;
	ContinuedFraction.prototype.evaluate=function(x){
		return this.evaluate(x, ContinuedFraction.DEFAULT_EPSILON, Integer.MAX_VALUE);
	};
	ContinuedFraction.prototype.evaluate2=function(x,epsilon){
		return this.evaluate(x, epsilon, Integer.MAX_VALUE);
	};
	ContinuedFraction.prototype.evaluate3=function(x,maxIterations){
		return this.evaluate(x, ContinuedFraction.DEFAULT_EPSILON, maxIterations);
	};
	ContinuedFraction.prototype.evaluate4=function(x,epsilon,maxIterations){
		var p0 = 1.0;
        var p1 = this.getA(0, x);
        var q0 = 0.0;
        var q1 = 1.0;
        var c = p1 / q1;
        var n = 0;
        var relativeError = Double.MAX_VALUE;
        while (n < maxIterations && relativeError > epsilon) {
            ++n;
            var a = this.getA(n, x);
            var b = this.getB(n, x);
            var p2 = a * p1 + b * p0;
            var q2 = a * q1 + b * q0;
            if (Double.isInfinite(p2) || Double.isInfinite(q2)) {
                // need to scale
                if (a != 0.0) {
                    p2 = p1 + (b / a * p0);
                    q2 = q1 + (b / a * q0);
                } else if (b != 0) {
                    p2 = (a / b * p1) + p0;
                    q2 = (a / b * q1) + q0;
                } else {
                    // can not scale an convergent is unbounded.
                    throw new ConvergenceException(ConvergenceException.ERROR,
                        "Continued fraction convergents diverged to +/- " +
                        "infinity.");
                }
            }
            var r = p2 / q2;
            relativeError = Math.abs(r / c - 1.0);
            // prepare for next iteration
            c = p2 / q2;
            p0 = p1;
            p1 = p2;
            q0 = q1;
            q1 = q2;
        }
        if (n >= maxIterations) {
            throw new ConvergenceException(ConvergenceException.ERROR,
                "Continued fraction convergents failed to converge.");
        }
        return c;
	};
	ContinuedFraction.prototype.getA=function(n,x){
		return 1.0;
	};
	ContinuedFraction.prototype.getB=function(n,x){
		var ret;
        var m;
        if (n % 2 == 0) { // even
            m = n / 2.0;
            ret = (m * (b - m) * x) /
                ((a + (2 * m) - 1) * (a + (2 * m)));
        } else {
            m = (n - 1.0) / 2.0;
            ret = -((a + m) * (a + b + m) * x) /
                    ((a + (2 * m)) * (a + (2 * m) + 1.0));
        }
        return ret;
	};
	var ret;
    if (Double.isNaN(x) || Double.isNaN(a) || Double.isNaN(b) || (x < 0) ||
        (x > 1) || (a <= 0.0) || (b <= 0.0)) {
        ret = Double.NaN;
    } else if (x > (a + 1.0) / (a + b + 2.0)) {
        ret = 1.0 - Beta.regularizedBeta4(1.0 - x, b, a, epsilon, maxIterations);
    } else {
        var fraction = new ContinuedFraction();
        ret = Math.exp((a * Math.log(x)) + (b * Math.log(1.0 - x)) -
                Math.log(a) - Beta.logBeta2(a, b, epsilon, maxIterations)) *
                1.0 / fraction.evaluate4(x, epsilon, maxIterations);
    }
	return ret;
};
Beta.logBeta=function(a,b){
	return Beta.logBeta2(a, b, Beta.DEFAULT_EPSILON, Integer.MAX_VALUE);
};
Beta.logBeta2=function(a,b,epsilon,maxIterations){
	var ret;
	if (Double.isNaN(a) || Double.isNaN(b) || (a <= 0.0) || (b <= 0.0)) {
        ret = Double.NaN;
    } else {
        ret = Gamma.logGamma(a) + Gamma.logGamma(b) -
            Gamma.logGamma(a + b);
    }
    return ret;

};
function BinomialDistributionImpl(trials,p){
	this.jsjava_class="org.apache.commons.math.distribution.BinomialDistributionImpl";	
	if (trials < 0) {
        throw new IllegalArgumentException(IllegalArgumentException.ERROR,"number of trials must be non-negative.");
    }
    this.numberOfTrials = trials;
    if (p < 0.0 || p > 1.0) {
        throw new IllegalArgumentException(IllegalArgumentException.ERROR,"probability of success must be between 0.0 and 1.0, inclusive.");
    }
    this.probabilityOfSuccess = p;
}
BinomialDistributionImpl.prototype.cumulativeProbability=function(x){
	var ret;
	var sx=new String(x);
	if(sx.indexOf(".")!=-1){
		x=Math.floor(x);
	}
    if (x < 0) {
        ret = 0.0;
    } else if (x >= this.getNumberOfTrials()) {
        ret = 1.0;
    } else {    	
        ret =
            1.0 - Beta.regularizedBeta(
                    this.getProbabilityOfSuccess(),
                    x + 1.0,
                    this.getNumberOfTrials() - x);
    }
    return ret;
};
BinomialDistributionImpl.prototype.cumulativeProbability2=function(x0,x1){
	if (x0 > x1) {
        throw new IllegalArgumentException
            (IllegalArgumentException.ERROR,"lower endpoint must be less than or equal to upper endpoint");
    }
    return this.cumulativeProbability(x1) - this.cumulativeProbability(x0 - 1);
};
BinomialDistributionImpl.prototype.getDomainLowerBound=function(d){
	return -1;
};
BinomialDistributionImpl.prototype.getDomainUpperBound=function(p){
	return this.getNumberOfTrials();
};
BinomialDistributionImpl.prototype.getNumberOfTrials=function(){
	return this.numberOfTrials;
};
BinomialDistributionImpl.prototype.getProbabilityOfSuccess=function(){
	return this.probabilityOfSuccess;
};
BinomialDistributionImpl.prototype.inverseCumulativeProbability=function(p){
	// handle extreme values explicitly
    if (p == 0) {
        return -1;
    } 
    if (p == 1) {
        return Integer.MAX_VALUE; 
    }
    // use default bisection impl
    if (p < 0.0 || p > 1.0) {
        throw new IllegalArgumentException(
            "p must be between 0 and 1.0 (inclusive)");
    }
    // by default, do simple bisection.
    // subclasses can override if there is a better method.
    var x0 = this.getDomainLowerBound(p);
    var x1 = this.getDomainUpperBound(p);
    var pm;
    while (x0 < x1) {
        var xm = x0 + Math.floor((x1 - x0) / 2);
        pm = this.cumulativeProbability(xm);
        if (pm > p) {
            // update x1
            if (xm == x1) {
                // this can happen with integer division
                // simply decrement x1
                --x1;
            } else {
                // update x1 normally
                x1 = xm;
            }
        } else {
            // update x0
            if (xm == x0) {
                // this can happen with integer division
                // simply increment x0
                ++x0;
            } else {
                // update x0 normally
                x0 = xm;
            }
        }
    }
    // insure x0 is the correct critical point
    pm = this.cumulativeProbability(x0);
    while (pm > p) {
    	--x0;
        pm = this.cumulativeProbability(x0);
    }
    return x0;
};
BinomialDistributionImpl.prototype.probability=function(x){
	var ret;
    if (x < 0 || x > this.getNumberOfTrials()) {
        ret = 0.0;
    } else {
    	var sx=new String(x);
    	if(sx.indexOf(".")!=-1){
    		var fl = Math.floor(x);
		    if (fl == x) {
		        return this.probability(f1);
		    } else {
		        return 0;
		    }
    	}
        ret = MathUtils.binomialCoefficientDouble(
                this.getNumberOfTrials(), x) *
              Math.pow(this.getProbabilityOfSuccess(), x) *
              Math.pow(1.0 - this.getProbabilityOfSuccess(),
                    this.getNumberOfTrials() - x);
    }
    return ret;

};
 function BitSet(){
 	 this.jsjava_class="jsjava.util.BitSet";
     this.elements=new Array();
 }
 BitSet.prototype.set=function(bitIndex){
     this.elements[bitIndex]=true;
 };
 BitSet.prototype.setByValue=function(bitIndex,value){
     if(value!=true&&value!=false){
         value=false;	
     }
     this.elements[bitIndex]=value;
 };
 BitSet.prototype.setBetween=function(fromIndex,toIndex){
     for(var i=fromIndex;i<toIndex;i++){
         this.elements[i]=true;
     }
 };
 BitSet.prototype.setBetweenByValue=function(fromIndex,toIndex,value){
     if(value!=true&&value!=false){
         value=false;	
     }
     for(var i=fromIndex;i<toIndex;i++){
         this.elements[i]=value;
     }
 };
 BitSet.prototype.get=function(bitIndex){
     var value=this.elements[bitIndex];
     if(value){
         return value;
     }
     return false;
 };
 BitSet.prototype.getBetween=function(fromIndex,toIndex){
     var bs=new BitSet();
     for(var i=fromIndex;i<toIndex;i++){
         bs.setByValue(i,this.get(i));	
     }
     return bs;
 };
 BitSet.prototype.toString=function(){
 	 var elems=new Array();
 	 for(var i=0;i<this.elements.length;i++){
 	     var value=this.elements[i];
 	     if(value){
 	         elems[i]=true;
 	     }else{
 	         elems[i]=false;
 	     }
 	 }
     return elems.toString();	
 };
 BitSet.prototype.size=function(){
     return this.elements.length;	
 };
 BitSet.prototype.length=function(){
     return this.size();	
 };
 BitSet.prototype.clear=function(){
     for(var i=0;i<this.size();i++){
         this.elements[i]=false;	
     }	
 };
 BitSet.prototype.clearBetween=function(fromIndex,toIndex){
     for(var i=fromIndex;i<toIndex;i++){
         this.elements[i]=false;	
     }	
 };
 BitSet.prototype.isEmpty=function(){
     for(var i=0;i<this.size();i++){
         if(this.get(i)){
             return false;
         }
     }	
     return true;
 };
 BitSet.prototype.flip=function(bitIndex){
     var value=this.elements[bitIndex];
     if(value!=true&&value!=false){
         value=false;	
     }
     var rValue=false;
     if(!value){
         rValue=true;	
     }
     this.setByValue(bitIndex,rValue);
 };
 BitSet.prototype.flipBetween=function(fromIndex,toIndex){
     for(var i=fromIndex;i<toIndex;i++){
         this.flip(i);	
     }
 };
 BitSet.prototype.and=function(bs){
     var size1=this.size();
     var size2=bs.size();
     var size=size1>size2?size1:size2;
     for(var i=0;i<size;i++){
         var value1=this.get(i);
         var value2=bs.get(i);
         var value=value1&&value2;
         this.setByValue(i,value);
     }	
 };
 BitSet.prototype.or=function(bs){
     var size1=this.size();
     var size2=bs.size();
     var size=size1>size2?size1:size2;
     for(var i=0;i<size;i++){
         var value1=this.get(i);
         var value2=bs.get(i);
         var value=value1||value2;
         this.setByValue(i,value);
     }	
 };
 BitSet.prototype.xor=function(bs){
     var size1=this.size();
     var size2=bs.size();
     var size=size1>size2?size1:size2;
     for(var i=0;i<size;i++){
         var value1=this.get(i);
         var value2=bs.get(i);
         var value=value1^value2;
         value=value==1?true:false;
         this.setByValue(i,value);
     }	
 };
 BitSet.prototype.andNot=function(bs){
     var size1=this.size();
     var size2=bs.size();
     var size=size1>size2?size1:size2;
     for(var i=0;i<size;i++){
         var value1=this.get(i);
         var value2=bs.get(i);
         var value=value2==true?false:value1;
         this.setByValue(i,value);
     }	
 };
 BitSet.prototype.cardinality=function(){
     var value=0;
     for(var i=0;i<this.size();i++){
         if(this.get(i)){
             value++;	
         }	
     }	
     return value;

};
function BlogRss(){
	this.jsjava_class="jsorg.eob.blog.BlogRss";		
};
BlogRss.prototype.getVersion=function(){
	return this.version;
};
BlogRss.prototype.setVersion=function(version){
	this.version=version;
};
BlogRss.prototype.getRssChannel=function(){
	return this.channel;
};
BlogRss.prototype.setRssChannel=function(channel){
	this.channel=channel;

};
function BlogRssChannel(){
	this.jsjava_class="jsorg.eob.blog.BlogRssChannel";		
	this.items=new ArrayList();
};
BlogRssChannel.prototype.getTitle=function(){
	return this.title;
};
BlogRssChannel.prototype.setTitle=function(title){
	this.title=title;
};
BlogRssChannel.prototype.getLink=function(){
	return this.link;
};
BlogRssChannel.prototype.setLink=function(link){
	this.link=link;
};
BlogRssChannel.prototype.getDescription=function(){
	return this.description;
};
BlogRssChannel.prototype.setDescription=function(description){
	this.description=description;
};
BlogRssChannel.prototype.getPubDate=function(){
	return this.pubDate;
};
BlogRssChannel.prototype.setPubDate=function(pubDate){
	this.pubDate=pubDate;
};
BlogRssChannel.prototype.getGenerator=function(){
	return this.generator;
};
BlogRssChannel.prototype.setGenerator=function(generator){
	this.generator=generator;
};
BlogRssChannel.prototype.getImage=function(){
	return this.image;
};
BlogRssChannel.prototype.setImage=function(image){
	this.image=image;
};
BlogRssChannel.prototype.addItem=function(item){
	this.items.add(item);
};
BlogRssChannel.prototype.getItem=function(index){
	return this.items.get(index);
};
BlogRssChannel.prototype.getItemById=function(itemId){
	var it=this.iterator();
	while(it.hasNext()){
		var item=it.next();
		if(item.getId()==itemId){
			return item;
		}
	}
};
BlogRssChannel.prototype.iterator=function(){
	return this.items.iterator();
};
BlogRssChannel.prototype.getItems=function(){
	return this.items;

};
function BlogRssChannelImage(){
	this.jsjava_class="jsorg.eob.blog.BlogRssChannelImage";		
};
BlogRssChannelImage.prototype.getTitle=function(){
	return this.title;
};
BlogRssChannelImage.prototype.setTitle=function(title){
	this.title=title;
};
BlogRssChannelImage.prototype.getLink=function(){
	return this.link;
};
BlogRssChannelImage.prototype.setLink=function(link){
	this.link=link;
};
BlogRssChannelImage.prototype.getURL=function(){
	return this.url;
};
BlogRssChannelImage.prototype.setURL=function(url){
	this.url=url;
};
BlogRssChannelImage.prototype.toString=function(){
	var str="{";
	str+="title="+this.title;
	str+=",link="+this.link;
	str+=",url="+this.url;
	str+="}";
	return str;

};
function BlogRssItem(){
	this.jsjava_class="jsorg.eob.blog.BlogRssItem";		
};
BlogRssItem.prototype.getCreator=function(){
	return this.creator;
};
BlogRssItem.prototype.setCreator=function(creator){
	this.creator=creator;
};
BlogRssItem.prototype.getTitle=function(){
	return this.title;
};
BlogRssItem.prototype.setTitle=function(title){
	this.title=title;
};
BlogRssItem.prototype.getLink=function(){
	return this.link;
};
BlogRssItem.prototype.setLink=function(link){
	this.link=link;
};
BlogRssItem.prototype.getPubDate=function(){
	return this.pubDate;
};
BlogRssItem.prototype.setPubDate=function(pubDate){
	this.pubDate=pubDate;
};
BlogRssItem.prototype.getId=function(){
	return this.id;
};
BlogRssItem.prototype.setId=function(id){
	this.id=id;
};
BlogRssItem.prototype.getComments=function(){
	return this.comments;
};
BlogRssItem.prototype.setComments=function(comments){
	this.comments=comments;
};
BlogRssItem.prototype.getDescription=function(){
	return this.description;
};
BlogRssItem.prototype.setDescription=function(description){
	this.description=description;
};
BlogRssItem.prototype.toString=function(){
	var str="{";
	str+="id="+this.id;
	str+=",creator="+this.creator;
	str+=",title="+this.title;
	str+=",link="+this.link;
	str+=",pubDate="+this.pubDate;
	str+=",comments="+this.comments;
	str+="}";
	return str;

};
function BlogRssItemComment(){
	this.jsjava_class="jsorg.eob.blog.BlogRssItemComment";		
};
BlogRssItemComment.prototype.getId=function(){
	return this.id;
};
BlogRssItemComment.prototype.setId=function(id){
	this.id=id;
};
BlogRssItemComment.prototype.getItemId=function(){
	return this.itemLink;
};
BlogRssItemComment.prototype.setItemId=function(itemLink){
	this.itemLink=itemLink;
};
BlogRssItemComment.prototype.getCommentRss=function(){
	return this.commentRss;
};
BlogRssItemComment.prototype.setCommentRss=function(commentRss){
	this.commentRss=commentRss;
};
BlogRssItemComment.prototype.toString=function(){
	var str="{";
	str+="id="+this.id;
	str+=",itemId="+this.itemId;
	str+=",commentRss="+this.commentsRss;
	str+="}";
	return str;

};
function BlogRssReader(){
	this.jsjava_class="jsorg.eob.blog.BlogRssReader";	
};
BlogRssReader.prototype.readRss=function(xmlStr){	
	var parser=new XmlBrowserParser();
	parser.loadXml(xmlStr);
	var blogdom=parser.toDocument();
	if(!blogdom){
		return null;
	}
	var blogRss=new BlogRss();
	var rootElem=blogdom.documentElement;
	var version=rootElem.getAttribute("version");
	blogRss.setVersion(version);
	var channel=new BlogRssChannel();
	var channelElem=rootElem.selectSingleNode("channel");
	var ctitle=getNodeValue(channelElem,"title");		
	var clink=getNodeValue(channelElem,"link");
	var cdescription=getNodeValue(channelElem,"description");;
	var cgenerator=getNodeValue(channelElem,"generator");
	channel.setTitle(ctitle);
	channel.setLink(clink);
	channel.setDescription(cdescription);
	channel.setGenerator(cgenerator);
	var channelImage=new BlogRssChannelImage();
	var imageElem=channelElem.selectSingleNode("image");
	if(imageElem){
		var imageNodeType=imageElem.firstChild.nodeType;
		if(imageNodeType==3){
			channelImage.setURL(imageElem.firstChild.nodeValue);
		}else{
			var imageTitle=getNodeValue(imageElem,"title");
			var imageLink=getNodeValue(imageElem,"link");
			var imageURL=getNodeValue(imageElem,"url");		
			channelImage.setTitle(imageTitle);
			channelImage.setLink(imageLink);
			channelImage.setURL(imageURL);	
		}
		channel.setImage(channelImage);
	}
	itemElems=channelElem.selectNodes("item");
	var itemElemsLenght=itemElems.length;
	for(var i=0;i<itemElemsLenght;i++){
		var itemElem=itemElems[i];
		var item=new BlogRssItem();
		var icreator=getNodeValue(itemElem,"dc:creator");
		if(icreator==null){
			icreator=getNodeValue(itemElem,"author");
		}
		var ititle=getNodeValue(itemElem,"title");
		var ilink=getNodeValue(itemElem,"link");
		var iguid=getNodeValue(itemElem,"guid");
		var idescription=getNodeValue(itemElem,"description");
		var ipubDate=getNodeValue(itemElem,"pubDate");
		item.setCreator(icreator);
		item.setTitle(ititle);
		item.setLink(ilink);
		item.setId(iguid);
		item.setDescription(idescription); 
		item.setPubDate(ipubDate);
		var commentId=getNodeValue(itemElem,"wfw:comment");
		var commentForItemId=getNodeValue(itemElem,"comments");
		var commentRss=getNodeValue(itemElem,"wfw:commentRss");
		var comment=new BlogRssItemComment();
		comment.setId(commentId);
		comment.setItemId(commentForItemId);
		comment.setCommentRss(commentRss);
		item.setComments(comment);
		channel.addItem(item);
	}
	blogRss.setRssChannel(channel);
	return blogRss;
	function getNodeValue(parentElem,elemTagName){
		var value=null;
		var valueElem=parentElem.selectSingleNode(elemTagName+"/text()");
		if(valueElem){
			value=valueElem.nodeValue;
		}
		return value;
	}

};
function BooleanPrototype(){
	this.jsjava_class="jsorg.eob.prototype.BooleanPrototype";
}
BooleanPrototype.load=function(){
	Boolean.prototype.compareTo=function(b){
	    if(b==undefined){
	        return -1; 
	    }
	    if(this.value==b.value){
	        return 1; 
	    }else{
	        return -1;  
	    }
	};
	Boolean.valueOf=function(str){
		return new Boolean(str);
	};
	Boolean.prototype.booleanValue=function(){
	    return this.valueOf(); 
	};
};

BooleanPrototype.load();
function BooleanUtils(){
	this.jsjava_class="jsorg.apache.commons.lang.BooleanUtils";
}
BooleanUtils.isFalse=function(value){
	var type=typeof(value);
	if(type=="boolean"){
		if(!value){
			return true;
		}
	}
	if(type=="string"){
	    if(value=="false"){
	    	return true;
	    }
	}
	if(type=="object"){
	    if(value.booleanValue()==false||value.booleanValue()=="false"){
	    	return true;
	    }
	}
	return false;
};
BooleanUtils.isTrue=function(value){
	var type=typeof(value);
	if(type=="boolean"){
		if(value){
			return true;
		}
	}
	if(type=="string"){
	    if(value=="true"){
	    	return true;
	    }
	}
	if(type=="object"){
	    if(value.booleanValue()==true||value.booleanValue()=="true"){
	    	return true;
	    }
	}
	return false;
};
BooleanUtils.negate=function(value){
	var type=typeof(value);
	if(type=="boolean"){
		return !value;
	}
	if(type=="string"){
	    if(value=="true"){
	    	return "false";
	    }
	    if(value=="false"){
	    	return "true";
	    }
	}
	if(type=="object"){
		var ovalue=value.booleanValue();
	    if(ovalue=="true"){
	    	return new Boolean("false");
	    }
	    if(ovalue=="false"){
	    	return new Boolean("true");
	    }
	    if(ovalue==true){
	    	return new Boolean(false);
	    }
	    if(ovalue==false){
	    	return new Boolean(true);
	    }
	}
	return null;
};
BooleanUtils.toBoolean=function(value){
	var type=typeof(value);
	if(type=="boolean"){
		return value;
	}
	if(type=="string"){
		if(value=="true"){
			return true;
		}else{
			return false;
		}
	}
	if(type=="object"){
		return value.booleanValue();
	}
	if(type=="number"){
		if(value==0){
			return false;
		}else{
			return true;
		}
	}
	return false;
};
BooleanUtils.toBooleanDefaultIfNull=function(value,defaultValue){
	if(value==null||value==undefined){
		return defaultValue;	
	}
	return BooleanUtils.toBoolean(value);
};
BooleanUtils.toBooleanObject=function(value){
	return new Boolean(BooleanUtils.toBoolean(value));
};
BooleanUtils.toInteger=function(value,trueValue,falseValue,nullValue){
	if(value==null||value==undefined){
		return nullValue;	
	}
	if(BooleanUtils.toBoolean(value)){
		return trueValue;
	}
	return falseValue;
};
BooleanUtils.toIntegerObject=function(value,trueValue,falseValue,nullValue){
	if(value==null||value==undefined){
		return nullValue;	
	}
	if(BooleanUtils.toBoolean(value)){
		return trueValue;
	}
	return falseValue;
};
BooleanUtils.toString=function(value,trueString,falseString,nullString){
	if(value==null||value==undefined){
		return nullString;	
	}
	if(BooleanUtils.toBoolean(value)){
		return trueString;
	}
	return falseString;
};
BooleanUtils.toStringOnOff=function(value){
	if(value==null||value==undefined){
		return "off";	
	}
	if(BooleanUtils.toBoolean(value)){
		return "on";
	}
	return "off";
};
BooleanUtils.toStringTrueFalse=function(value){
	if(value==null||value==undefined){
		return "false";	
	}
	if(BooleanUtils.toBoolean(value)){
		return "true";
	}
	return "false";
};
BooleanUtils.toStringYesNo=function(value){
	if(value==null||value==undefined){
		return "no";	
	}
	if(BooleanUtils.toBoolean(value)){
		return "yes";
	}
	return "no";
};
BooleanUtils.xor=function(arr){
	var narr=new Array(arr.length);
	for(var i=0;i<arr.length;i++){
		narr[i]=BooleanUtils.toBoolean(arr[i]);
	}
	var xvalue=narr[0];
	for(var i=1;i<arr.length;i++){
		xvalue=xvalue^narr[i];
	}
	return BooleanUtils.toBoolean(xvalue);

};
function BooleanValidator(){
	this.jsjava_class="jsorg.eob.validator.BooleanValidator";
}
BooleanValidator.validate=function(str){
	return ValidatorUtils.isBoolean(str);

};
function Border(width,color,style){
	this.jsjava_class="jsjavax.swing.border.Border";
    this.width=width;
    this.color=color;
    this.style=style;
}
Border.prototype.getWidth=function(){
    return this.width;	
};
Border.prototype.setWidth=function(width){
    return this.width;	
};
Border.prototype.getColor=function(){
    return this.color;	
};
Border.prototype.setColor=function(color){
    return this.color;	
};
Border.prototype.getStyle=function(){
    return this.style;	
};
Border.prototype.setStyle=function(style){
    return this.style;	

};
function BrowserUtils(){
	this.jsjava_class="jsorg.eob.browser.BrowserUtils";
}
BrowserUtils.isIE=function(){
	return navigator.userAgent.indexOf("MSIE")!=-1;
};
BrowserUtils.isFirefox=function(){
	return navigator.userAgent.indexOf("Firefox")!=-1;
};
BrowserUtils.isOpera=function(){
	return navigator.userAgent.indexOf("Opera")!=-1;
};
BrowserUtils.getUserLanguage=function(){
	return (navigator.userLanguage==undefined?navigator.language:navigator.userLanguage).replace("-","_");

};
function Byte(value){
	this.jsjava_class="jsjava.lang.Byte";
    this.value=value;
}
Byte.MIN=-Math.pow(2,7);
Byte.MAX=Math.pow(2,7)-1;
Byte.MIN_VALUE=-Math.pow(2,7);
Byte.MAX_VALUE=Math.pow(2,7)-1;
Byte.checkValid=function(b){
	if(isNaN(b)){
		return false;
	}
	if(typeof(b)=="number"){
		if(Math.floor(b)!=b){
			return false;
		}
	}else{
		if(b.indexOf(".")!=-1){
			return false;
		}
	}
	b=parseInt(b);
	if(b<=Byte.MAX&&b>=Byte.MIN){
    	return true;
    }
    return false;
};
Byte.parseByte=function(str){
    if(isNaN(str)){
		throw new NumberFormatException(NumberFormatException.NOT_NUMBER,"Not a number Exception!");
	} 
    var b=parseInt(str);
    if(!Byte.checkValid(b)){
        return;
    }
    return b;
};
Byte.prototype.compareTo=function(b){
    if(b==undefined){
        return -1; 
    }
    if(this.value>b.value){
        return 1; 
    }else if(this.value==b.value){
        return 0; 
    }else{
        return -1;  
    }
};
Byte.prototype.byteValue=function(){
    return this.value; 
};
Byte.prototype.toString=function(){
    return this.value; 
};
Byte.prototype.equals=function(o){
    if(o==undefined){
        return false; 
    }
    if(o.jsjava_class&&o.jsjava_class=="jsjava.lang.Byte"){
        return this.value==o.value; 
    }
    return false;

};
function ByteValidator(){
	this.jsjava_class="jsorg.eob.validator.ByteValidator";
}
ByteValidator.validate=function(str){
	return ValidatorUtils.isByte(str);

};
function Calendar(){
	this.jsjava_class="jsjava.util.Calendar";
	this._date=new Date();
	this.time=this._date.getTime();
	this.year=this._date.getYear();
	this.month=this._date.getMonth();
	this.date=this._date.getDate();
	this.day=this._date.getDay();
	this.hours=this._date.getHours();
	this.minutes=this._date.getMinutes();
	this.seconds=this._date.getSeconds();
}
Calendar.ERA = 0;    
Calendar.YEAR = 1;
Calendar.MONTH = 2;
Calendar.WEEK_OF_YEAR = 3;
Calendar.WEEK_OF_MONTH = 4;
Calendar.DATE = 5;
Calendar.DAY_OF_MONTH = 5;
Calendar.DAY_OF_YEAR = 6;
Calendar.DAY_OF_WEEK = 7;
Calendar.DAY_OF_WEEK_IN_MONTH = 8;
Calendar.AM_PM = 9;
Calendar.HOUR = 10;
Calendar.HOUR_OF_DAY = 11;
Calendar.MINUTE = 12;
Calendar.SECOND = 13;
Calendar.MILLISECOND = 14;
Calendar.ZONE_OFFSET = 15;
Calendar.DST_OFFSET = 16;
Calendar.FIELD_COUNT = 17;
Calendar.SUNDAY = 1;
Calendar.MONDAY = 2;
Calendar.TUESDAY = 3;
Calendar.WEDNESDAY = 4;
Calendar.THURSDAY = 5;
Calendar.FRIDAY = 6;
Calendar.SATURDAY = 7;
Calendar.JANUARY = 0;
Calendar.FEBRUARY = 1;
Calendar.MARCH = 2;
Calendar.APRIL = 3;
Calendar.MAY = 4;
Calendar.JUNE = 5;
Calendar.JULY = 6;
Calendar.AUGUST = 7;
Calendar.SEPTEMBER = 8;
Calendar.OCTOBER = 9;
Calendar.NOVEMBER = 10;
Calendar.DECEMBER = 11;
Calendar.UNDECIMBER = 12;
Calendar.AM = 0;
Calendar.PM = 1;
Calendar.BIG_MONTH_DAYS=31;
Calendar.SMALL_MONTH_DAYS=30;
Calendar.LEAP_YEAR_FEB_DAYS=29;
Calendar.NON_LEAP_YEAR_FEB_DAYS=28;
Calendar.DAYS_OF_WEEK=7;
Calendar.prototype.checkValid=function(c){
	if(c==undefined||!c.jsjava_class||c.jsjava_class!=this.jsjava_class){
	    throw new IllegalArgumentException(IllegalArgumentException.ERROR,"Invalid arguments!");
	}
};
Calendar.prototype.after=function(c){
	this.checkValid(c);
	if(this.getTimeInMillis()>c.getTimeInMillis()){
		return true;
	}
	return false;
};
Calendar.prototype.before=function(c){
	this.checkValid(c);
	if(this.getTimeInMillis()<c.getTimeInMillis()){
		return true;
	}
	return false;
};
Calendar.prototype.get=function(field){
	if(typeof(field)!="number"){
		throw new IllegalArgumentException(IllegalArgumentException.ERROR,"Invalid arguments!");
	}
	var result=-1;
	switch(field){
		case Calendar.ERA :{
			result=Calendar.ERA+1;
			break;
		};    
		case Calendar.YEAR :{
			result=this.year;
			break;
		};
		case Calendar.MONTH :{
			result=this.month;
			break;
		};
		case Calendar.WEEK_OF_YEAR :{
			var fDate=new Date(this.year,0,1);
			var fDay=fDate.getDay();
			var cDate=this.get(Calendar.DAY_OF_YEAR);
			var n=Math.floor((cDate+fDay-1)/Calendar.DAYS_OF_WEEK)+1;
			result=n;
			break;
		};
		case Calendar.WEEK_OF_MONTH :{
			var fDate=new Date(this.year,this.month,1);
			var fDay=fDate.getDay();
			var cDate=this.date;
			var n=Math.floor((cDate+fDay-1)/Calendar.DAYS_OF_WEEK)+1;
			result=n;
			break;
		};
		case Calendar.DATE :{
			result=this.date;
			break;
		};
		case Calendar.DAY_OF_MONTH :{
			result=this.date;
			break;
		};
		case Calendar.DAY_OF_YEAR :{
			var nDay=0;
			var month=this.month;			
			for(var i=0;i<month;i++){
				nDay+=Calendar.getDaysOfMonth(this.year,i);
			}
			nDay+=this.date;
			result=nDay;
			break;
		};
		case Calendar.DAY_OF_WEEK :{
			result=this.day+1;
			break;
		};
		case Calendar.DAY_OF_WEEK_IN_MONTH :{
			var date=this.date;
			var n=Math.floor((date-1)/Calendar.DAYS_OF_WEEK)+1;
			result=n;
			break;
		};
		case Calendar.AM_PM :{
			if(this.hours>12){
				result=Calendar.PM;
			}else{
				result=Calendar.AM;
			}
			break;
		}
		case Calendar.HOUR :{
			var hours=this.hours;
			if(hours>=12){
				result=hours-12;
			}else{
				result=hours;
			}
			break;
		};
		case Calendar.HOUR_OF_DAY :{
			result=this.hours;
			break;
		};
		case Calendar.MINUTE :{
			result=this.minutes;
			break;
		};
		case Calendar.SECOND :{
			result=this.seconds;
			break;
		};
		case Calendar.MILLISECOND :{
			result=this.time;
			break;
		};
		case Calendar.ZONE_OFFSET :{
			result=this._date.getTimezoneOffset()*60*1000;
			break;
		};
		case Calendar.DST_OFFSET :{
			result=0;
			break;
		};
	}
	return result;
};
Calendar.prototype.getInstance=function(){
	return new Calendar();
};
Calendar.prototype.getTime=function(){
	return this._date;
};
Calendar.prototype.getTimeInMillis=function(){
	return this.time;
};
Calendar.prototype.isLeapYear=function(){
	var year=this.year;
	if(year%100==0){
		if(year%400==0){
			return true;
		}
		return false;
	}
	if(year%4==0){
		return true;
	}
	return false;
};
Calendar.isLeapYear=function(year){
	if(year%100==0){
		if(year%400==0){
			return true;
		}
		return false;
	}
	if(year%4==0){
		return true;
	}
	return false;
};
Calendar.prototype.setTime=function(date){
	this._date=date;
	this.time=this._date.getTime();
	this.year=this._date.getYear();
	this.month=this._date.getMonth();
	this.date=this._date.getDate();
	this.day=this._date.getDay();
	this.hours=this._date.getHours();
	this.minutes=this._date.getMinutes();
	this.seconds=this._date.getSeconds();
};
Calendar.prototype.isBigMonth=function(){
	var bigMonth=",1,3,5,7,8,10,12,";
	if(bigMonth.indexOf(","+(this.month+1)+",")!=-1){
		return true;
	}
	return false;
};
Calendar.isBigMonth=function(month){
	var bigMonth=",1,3,5,7,8,10,12,";
	if(bigMonth.indexOf(","+(month+1)+",")!=-1){
		return true;
	}
	return false;
};
Calendar.prototype.isSmallMonth=function(){
	var smallMonth=",4,6,9,11,";
	if(smallMonth.indexOf(","+(this.month+1)+",")!=-1){
		return true;
	}
	return false;
};
Calendar.isSmallMonth=function(month){
	var smallMonth=",4,6,9,11,";
	if(smallMonth.indexOf(","+(month+1)+",")!=-1){
		return true;
	}
	return false;
};
Calendar.prototype.isSpecialMonth=function(){
	if(this.month==1){
		return true;
	}
	return false;
};
Calendar.isSpecialMonth=function(month){
	if(month==1){
		return true;
	}
	return false;
};
Calendar.getDaysOfMonth=function(year,month){
	if(Calendar.isBigMonth(month)){
		return Calendar.BIG_MONTH_DAYS;
	}
	if(Calendar.isSmallMonth(month)){
		return Calendar.SMALL_MONTH_DAYS;
	}
	if(!year){
		year=new Date().getYear();
	}
	if(Calendar.isLeapYear(year)){
		return Calendar.LEAP_YEAR_FEB_DAYS;
	}else{
		return Calendar.NON_LEAP_YEAR_FEB_DAYS;
	}

};
function CauchyDistributionImpl(median, s){
	this.jsjava_class="org.apache.commons.math.distribution.CauchyDistributionImpl";	
	this.median = median;
    if (s <= 0.0) {
        throw new IllegalArgumentException(
            IllegalArgumentException.ERROR,"Scale must be positive.");
    }       
    this.scale = s;
}
CauchyDistributionImpl.prototype.cumulativeProbability=function(x){
	return 0.5 + (Math.atan((x - this.median) / this.scale) / Math.PI);
};          
CauchyDistributionImpl.prototype.getDomainLowerBound=function(p) {
	var ret;
    if (p < .5) {
        ret = -Double.MAX_VALUE;
    } else {
        ret = this.getMedian();
    }
    return ret;
};
CauchyDistributionImpl.prototype.getDomainUpperBound=function(p) {
	var ret;
    if (p < .5) {
        ret = this.getMedian();
    } else {
        ret = Double.MAX_VALUE;
    }
    return ret;
};
CauchyDistributionImpl.prototype.getInitialDomain=function(p) {
	var ret;
    if (p < .5) {
        ret = this.getMedian() - this.getScale();
    } else if (p > .5) {
        ret = this.getMedian() + this.getScale();
    } else {
        ret = this.getMedian();
    }
    return ret;
};
CauchyDistributionImpl.prototype.getMedian=function() {
	return this.median;
};
CauchyDistributionImpl.prototype.getScale=function() {
	return this.scale;
};
CauchyDistributionImpl.prototype.inverseCumulativeProbability=function(p) {
	var ret;
    if (p < 0.0 || p > 1.0) {
        throw new IllegalArgumentException
            (IllegalArgumentException.ERROR,"probability argument must be between 0 and 1 (inclusive)");
    } else if (p == 0) {
        ret = Double.NEGATIVE_INFINITY;
    } else  if (p == 1) {
        ret = Double.POSITIVE_INFINITY;
    } else {
        ret = this.median + this.scale * Math.tan(Math.PI * (p - .5));
    }
    return ret;
};
CauchyDistributionImpl.prototype.setMedian=function(median) {
	this.median = median;
};
CauchyDistributionImpl.prototype.setScale=function(s) {
	if (s <= 0.0) {
        throw new IllegalArgumentException(
            IllegalArgumentException.ERROR,"Scale must be positive.");
    }       
    this.scale = s;

};
function Character(value){
	this.jsjava_class="jsjava.lang.Character";
    if(value==undefined||value.length>1){
        return;
    }else{
        this.value=value;
    }
}
Character.checkValid=function(c){
    var regx=/^[\u0000-\uffff]$/gi;
    return regx.test(c);
};
Character.prototype.charValue=function(){
    return this.value; 
};
Character.prototype.compareTo=function(c){
    if(b==undefined){
        return -1; 
    }
    if(this.value==b.value){
        return 1; 
    }else{
        return -1;  
    }
};
Character.prototype.toString=function(){
    return this.value; 
};
Character.prototype.equals=function(o){
    if(o==undefined){
        return false; 
    }
    if(o.jsjava_class&&o.jsjava_class=="jsjava.lang.Character"){
        return this.value==o.value; 
    }
    return false;
};
Character.isDigit=function(c){
    return !isNaN(c);
};
Character.toLowerCase=function(c){
    if(Character.checkValid(c)){
        return c.toLowerCase();
    }

};
function CharRange(start,end,negated){
	this.jsjava_class="jsorg.apache.commons.lang.CharRange";
	if(CharRange.checkValid(start)){
		this.start=start;
		this.end=end;
	}
	this.negated=false;//nothing to do in this version
}
CharRange.checkValid=function(c){
    var type=typeof(c);
    if(type=="string"&&c.length==1){
    	return true;
    }
    return false;
};
CharRange.prototype.contains=function(ch){
	if(!CharRange.checkValid(ch)){
		return false;
	}
	if(ch>=this.start&&ch<=this.end){
		return true;
	}
	return false;
};
CharRange.prototype.containsRange=function(range){
	if(range.start>=this.start&&range.end<=this.end){
		return true;
	}
	return false;
};
CharRange.prototype.getStart=function(){
	return this.start;
};
CharRange.prototype.getEnd=function(){
	return this.end;
};
CharRange.prototype.isNegated=function(){
	return this.negated;
};
CharRange.prototype.toString=function(){
	return "["+this.start+","+this.end+"]";
};
CharRange.prototype.equals=function(o){
	if(o.start==this.start&&this.end==this.end){
		return true;
	}
	return false;

};
function CharSet(str){
	this.jsjava_class="jsorg.apache.commons.lang.CharSet";
	if(str==undefined){
		str="";
	}
	this.str=str;
}
CharSet.checkValid=function(c){
    var type=typeof(c);
    if(type=="string"&&c.length==1){
    	return true;
    }
    return false;
};
CharSet.prototype.contains=function(ch){
	if(!CharSet.checkValid(ch)){
		return false;
	}
	for(var i=0;i<this.str.length;i++){
		if(this.str.charAt(i)==ch){
			return true;
		}
	}
	return false;
};
CharSet.prototype.getCharRange=function(){
	var arr=new Array(this.str.length);
	for(var i=0;i<this.str.length;i++){
		arr[i]=this.str.charAt(i);
	}
	arr.sort();
	return new CharRange(arr[0],arr[arr.length-1],false);
};
CharSet.prototype.toString=function(){
	return this.str;
};
CharSet.prototype.equals=function(o){
	if(o.str=this.str){
		return true;
	}
	return false;

};
function CharSetUtils(){
	this.jsjava_class="jsorg.apache.commons.lang.CharSetUtils";
}
CharSetUtils.count=function(str,set){
	if(str==null||str==""||set==null||set==""){
		return 0;
	}
	var count=0;
	for(var i=0;i<str.length;i++){
		if(set.indexOf(str.charAt(i))!=-1){
			count++;
		}
	}
	return count;
};
CharSetUtils.remove=function(str,set){
	if(str==null){
		return null;
	}
	if(str==""){
		return "";
	}
	if(set==null||set==""){
		return str;
	}
	var nstr="";
	for(var i=0;i<str.length;i++){
		var ch=str.charAt(i);
		if(set.indexOf(ch)==-1){
			nstr+=ch;
		}
	}
	return nstr;
};
CharSetUtils.keep=function(str,set){
	if(str==null){
		return null;
	}
	if(str==""||set==null||set==""){
		return "";
	}
	var nstr="";
	for(var i=0;i<str.length;i++){
		var ch=str.charAt(i);
		if(set.indexOf(ch)!=-1){
			nstr+=ch;
		}
	}
	return nstr;
};
CharSetUtils.squeeze=function(str,set){
	if(str==null||str==""){
		return str;
	}
	if(set==null||set==""){
		return str;
	}
	for(var i=0;i<set.length;i++){
		var ch=set.charAt(i);
		str=str.replace(new RegExp(ch+"{2,}","g"),ch);
	}
	return str;

};
function CharUtils(){
	this.jsjava_class="jsorg.apache.commons.lang.CharUtils";
}
CharUtils.checkValid=function(c){
    return Character.checkValid(c);
};
CharUtils.isAscii=function(ch){
	if(!CharUtils.checkValid(ch)){
		return false;
	}
	ch=ch.charCodeAt(0);
	return ch < 128;
};
CharUtils.isAsciiAlpha=function(ch){
	if(!CharUtils.checkValid(ch)){
		return false;
	}
	ch=ch.charCodeAt(0);
	return (ch >= 'A'.charCodeAt(0) && ch <= 'Z'.charCodeAt(0)) || (ch >= 'a'.charCodeAt(0) && ch <= 'z'.charCodeAt(0));
};
CharUtils.isAsciiAlphaLower=function(ch){
	if(!CharUtils.checkValid(ch)){
		return false;
	}
	ch=ch.charCodeAt(0);
	return ch >= 'a'.charCodeAt(0) && ch <= 'z'.charCodeAt(0);
};
CharUtils.isAsciiAlphanumeric=function(ch){
	if(!CharUtils.checkValid(ch)){
		return false;
	}
	ch=ch.charCodeAt(0);
	return (ch >= 'A'.charCodeAt(0) && ch <= 'Z'.charCodeAt(0)) || (ch >= 'a'.charCodeAt(0) && ch <= 'z'.charCodeAt(0)) || (ch >= '0'.charCodeAt(0) && ch <= '9'.charCodeAt(0));
};
CharUtils.isAsciiAlphaUpper=function(ch){
	if(!CharUtils.checkValid(ch)){
		return false;
	}
	ch=ch.charCodeAt(0);
	return ch >= 'A'.charCodeAt(0) && ch <= 'Z'.charCodeAt(0);
};
CharUtils.isAsciiControl=function(ch){
	if(!CharUtils.checkValid(ch)){
		return false;
	}
	ch=ch.charCodeAt(0);
	return ch < 32 || ch == 127;
};
CharUtils.isAsciiNumeric=function(ch){
	if(!CharUtils.checkValid(ch)){
		return false;
	}
	ch=ch.charCodeAt(0);
	return ch >= '0'.charCodeAt(0) && ch <= '9'.charCodeAt(0);
};
CharUtils.isAsciiPrintable=function(ch){
	if(!CharUtils.checkValid(ch)){
		return false;
	}
	ch=ch.charCodeAt(0);
	return ch >= 32 && ch < 127;
};
CharUtils.toChar=function(chobj,defaultValue){
	if(chobj==null){
		return defaultValue;
	}
	if(typeof(chobj=="object")){
		return chobj.charValue();
	}
	return;
};
CharUtils.toIntValue=function(ch,defaultValue){	
	if(defaultValue!=undefined){
		if(isNaN(defaultValue)){
			return;
		}
	}
	if(ch==null){
		return defaultValue;
	}
	if(isNaN(ch)){
		return;
	}
	if(CharUtils.checkValid(ch)){
		return parseInt(ch);
	}
};
CharUtils.toCharacterObject=function(ch){
	return new Character(ch);
};
CharUtils.toString=function(ch){
	return ch;

};
function ChinaChineseValidator(){
	this.jsjava_class="jsorg.eob.validator.country.cn.ChinaChineseValidator";
}
ChinaChineseValidator.validate=function(str){
	return ChinaValidatorUtils.isChinese(str);

};
function ChinaCity(){
	this.jsjava_class="jsorg.eob.information.country.cn.ChinaCity";
	this.counties=new ArrayList();
}
ChinaCity.TYPE_PROVINCE=0;
ChinaCity.TYPE_CITY=1;
ChinaCity.TYPE_AUTONOMOUS_PREFECTURE=2;
ChinaCity.TYPE_PREFECTURE_MENG=3;
ChinaCity.TYPE_PREFECTURE_DIQU=4;
ChinaCity.prototype.setId=function(id){
	this.id=id;
};
ChinaCity.prototype.getId=function(){
	return this.id;
};
ChinaCity.prototype.setName=function(name){
	this.name=name;
};
ChinaCity.prototype.getName=function(){
	return this.name;
};
ChinaCity.prototype.setType=function(type){
	this.type=type;
};
ChinaCity.prototype.getType=function(){
	return this.type;
};
ChinaCity.prototype.setShortName=function(shortName){
	this.shortName=shortName;
};
ChinaCity.prototype.getShortName=function(){
	return this.shortName;
};
ChinaCity.prototype.isProvince=function(){
	return this.type==ChinaCity.TYPE_PROVINCE;
};
ChinaCity.prototype.isCity=function(){
	return this.type==ChinaCity.TYPE_CITY;
};
ChinaCity.prototype.isAutonomousPrefecture=function(){
	return this.type==ChinaCity.TYPE_AUTONOMOUS_PREFECTURE;
};
ChinaCity.prototype.isPrefectureMeng=function(){
	return this.type==ChinaCity.TYPE_PREFECTURE_MENG;
};
ChinaCity.prototype.isPrefectureDiqu=function(){
	return this.type==ChinaCity.TYPE_PREFECTURE_DIQU;
};
ChinaCity.prototype.setProvince=function(province){
	this.province=province;
};
ChinaCity.prototype.getProvince=function(){
	return this.province;
};
ChinaCity.prototype.setPostcode=function(postcode){
	this.postcode=postcode;
};
ChinaCity.prototype.getPostcode=function(){
	return this.postcode;
};
ChinaCity.prototype.setPhoneAreaCode=function(phoneAreaCode){
	this.phoneAreaCode=phoneAreaCode;
};
ChinaCity.prototype.getPhoneAreaCode=function(){
	return this.phoneAreaCode;
};
ChinaCity.prototype.setRegionCode=function(regionCode){
	this.regionCode=regionCode; 
};
ChinaCity.prototype.getRegionCode=function(){
	return this.regionCode;
};
ChinaCity.prototype.addCounty=function(county){
	this.counties.add(county);
};
ChinaCity.prototype.getCountyById=function(countyId){
	var it=this.iterator();
	while(it.hasNext()){
		var county=it.next();
		if(county.getId()==countyId){
			return county;
		}
	}
};
ChinaCity.prototype.getCountyByName=function(countyName){
	var it=this.iterator();
	while(it.hasNext()){
		var county=it.next();
		if(county.getName()==countyName){
			return county;
		}
	}
};
ChinaCity.prototype.iterator=function(){
	return this.counties.iterator();
};
ChinaCity.prototype.getCounties=function(){
	return this.counties;
};
ChinaCity.prototype.getSize=function(){
	return this.counties.getSize();
};
ChinaCity.prototype.toString=function(){
	var str="["+this.id+","+this.name+","+this.postcode+","+this.phoneAreaCode+","+this.regionCode+"]";
	return str;

};
function ChinaCountry(){
	this.jsjava_class="jsorg.eob.information.country.cn.ChinaCountry";
	this.provinces=new ArrayList();
	this.id="china";
	this.name="\u4E2D\u56FD";
}
ChinaCountry.prototype.getId=function(){
	return "china";
};
ChinaCountry.prototype.getName=function(){
	return "\u4E2D\u56FD";
};
ChinaCountry.prototype.addProvince=function(province){
	this.provinces.add(province);
};
ChinaCountry.prototype.getProvinceById=function(provinceId){
	var it=this.iterator();
	while(it.hasNext()){
		var province=it.next();
		if(province.getId()==provinceId){
			return province;
		}
	}
};
ChinaCountry.prototype.getProvinceByName=function(provinceName){
	var it=this.iterator();
	while(it.hasNext()){
		var province=it.next();
		if(province.getName()==provinceName){
			return province;
		}
	}
};
ChinaCountry.prototype.iterator=function(){
	return this.provinces.iterator();
};
ChinaCountry.prototype.getprovinces=function(){
	return this.provinces;
};
ChinaCountry.prototype.getSize=function(){
	return this.provinces.getSize();
};
ChinaCountry.prototype.toString=function(){
	var str="["+this.id+","+this.name+"]";
	return str;

};
function ChinaCounty(){
	this.jsjava_class="jsorg.eob.information.country.cn.ChinaCounty";
	this.towns=new ArrayList();
}
ChinaCounty.TYPE_COUNTY=0;
ChinaCounty.TYPE_AUTONOMOUS_COUNTY=1;
ChinaCounty.TYPE_CITY=2;
ChinaCounty.TYPE_DISTRICT=3;
ChinaCounty.prototype.setId=function(id){
	this.id=id;
};
ChinaCounty.prototype.getId=function(){
	return this.id;
};
ChinaCounty.prototype.setName=function(name){
	this.name=name;
};
ChinaCounty.prototype.getName=function(){
	return this.name;
};
ChinaCounty.prototype.setType=function(type){
	this.type=type;
};
ChinaCounty.prototype.getType=function(){
	return this.type;
};
ChinaCounty.prototype.isCounty=function(){
	return this.type==ChinaCounty.TYPE_COUNTY;
};
ChinaCounty.prototype.isAutonomousCounty=function(){
	return this.type==ChinaCounty.TYPE_AUTONOMOUS_COUNTY;
};
ChinaCounty.prototype.isCity=function(){
	return this.type==ChinaCounty.TYPE_CITY;
};
ChinaCounty.prototype.isDistrict=function(){
	return this.type==ChinaCounty.TYPE_DISTRICT;
};
ChinaCounty.prototype.setCity=function(city){
	this.city=city;
};
ChinaCounty.prototype.setCity=function(city){
	this.city=city;
};
ChinaCounty.prototype.setCity=function(city){
	this.city=city;
};
ChinaCounty.prototype.getCity=function(){
	return this.city;
};
ChinaCounty.prototype.addTown=function(town){
	this.towns.add(town);
};
ChinaCounty.prototype.getTownById=function(townId){
	var it=this.iterator();
	while(it.hasNext()){
		var town=it.next();
		if(town.getId()==townId){
			return town;
		}
	}
};
ChinaCounty.prototype.getTownByName=function(townName){
	var it=this.iterator();
	while(it.hasNext()){
		var town=it.next();
		if(town.getName()==townName){
			return town;
		}
	}
};
ChinaCounty.prototype.iterator=function(){
	return this.towns.iterator();
};
ChinaCounty.prototype.getTowns=function(){
	return this.towns;
};
ChinaCounty.prototype.getSize=function(){
	return this.towns.getSize();
};
ChinaCounty.prototype.toString=function(){
	var str="["+this.id+","+this.name+"]";
	return str;

};
function ChinaIDCardValidator(){
	this.jsjava_class="jsorg.eob.validator.country.cn.ChinaIDCardValidator";
}
ChinaIDCardValidator.validate=function(str){
	return ChinaValidatorUtils.isIDCard(str);

};
function ChinaInformationLoader(){
	this.jsjava_class="jsorg.eob.information.country.cn.ChinaInformationLoader";	
}
ChinaInformationLoader.INFO_PROVINCE=[
["Beijing","BJ","\u5317\u4eac\u5e02","\u4eac","110000",2],
["Tianjing","TJ","\u5929\u6d25\u5e02","\u6d25","120000",2],
["Hebei","HE","\u6cb3\u5317\u7701","\u5180","130000",0],
["Shanxi","SX","\u5c71\u897f\u7701","\u664b","140000",0],
["Inner Mongoria IM","NM","\u5185\u8499\u53e4\u81ea\u6cbb\u533a","\u5185\u8499\u53e4","150000",1],
["Liaoning","LN","\u8fbd\u5b81\u7701","\u8fbd","210000",0],
["Jilin","JL","\u5409\u6797\u7701","\u5409","220000",0],
["Heilongjiang","HJ","\u9ed1\u9f99\u6c5f\u7701","\u9ed1","230000",0],
["Shanghai","SH","\u4e0a\u6d77\u5e02","\u6caa","310000",2],
["Jiangsu","JS","\u6c5f\u82cf\u7701","\u82cf","320000",0],
["Zhejiang","ZJ","\u6d59\u6c5f\u7701","\u6d59","330000",0],
["Anhui","AH","\u5b89\u5fbd\u7701","\u7696","340000",0],
["Fujian","FJ","\u798f\u5efa\u7701","\u95fd","350000",0],
["Jiangxi","JX","\u6c5f\u897f\u7701","\u8d63","360000",0],
["Shandong","SD","\u5c71\u4e1c\u7701","\u9c81","370000",0],
["Henan","HA","\u6cb3\u5357\u7701","\u8c6b","410000",0],
["Hubei","HB","\u6e56\u5317\u7701","\u9102","420000",0],
["Hunan","HN","\u6e56\u5357\u7701","\u6e58","430000",0],
["Guangdong","GD","\u5e7f\u4e1c\u7701","\u7ca4","440000",0],
["Guangxi","GX","\u5e7f\u897f\u58ee\u65cf\u81ea\u6cbb\u533a","\u6842","450000",1],
["Hainan","HI","\u6d77\u5357\u7701","\u743c","460000",0],
["Chongqing","CQ","\u91cd\u5e86\u5e02","\u6e1d","500000",2],
["Sichuan","SC","\u56db\u5ddd\u7701",["\u5ddd","\u8700"],"510000",0],
["Guizhou","GZ","\u8d35\u5dde\u7701",["\u9ed4","\u8d35"],"520000",0],
["Yunnan","YN","\u4e91\u5357\u7701",["\u6ec7","\u4e91"],"530000",0],
["Tibet","XZ","\u897f\u85cf\u81ea\u6cbb\u533a","\u85cf","540000",1],
["Shaanxi","SN","\u9655\u897f\u7701",["\u9655","\u79e6"],"610000",0],
["Gansu","GS","\u7518\u8083\u7701",["\u7518","\u9647"],"620000",0],
["Qinghai","QH","\u9752\u6d77\u7701","\u9752","630000",0],
["Ningxia","NX","\u5b81\u590f\u56de\u65cf\u81ea\u6cbb\u533a","\u5b81","640000",1],
["Xinjiang","XJ","\u65b0\u7586\u7ef4\u543e\u5c14\u81ea\u6cbb\u533a","\u65b0","650000",1],
["Hong Kong","HK","\u9999\u6e2f\u7279\u522b\u884c\u653f\u533a","\u6e2f","",3],
["Macao","MO","\u6fb3\u95e8\u7279\u522b\u884c\u653f\u533a","\u6fb3","",3],
["Taiwan","TW","\u53f0\u6e7e\u7701","\u53f0","",3]
];
ChinaInformationLoader.INFO_CITY=[
["Beijing",[["Beijing","\u5317\u4eac\u5e02","\u4eac","100001","110000","010",0]]],
["Tianjing",[["Tianjing","\u5929\u6d25\u5e02","\u6d25","300040","120000","022",0]]],
["Hebei",[["Shijiazhuang","\u77f3\u5bb6\u5e84\u5e02","","050011","130100","0311",1],["Tangshan","\u5510\u5c71\u5e02","","063006","130200","0315",1],["Qinhuangdao","\u79e6\u7687\u5c9b\u5e02","","066000","130300","0335",1],["Handan","\u90af\u90f8\u5e02","","056002","130400","0310",1],["Xingtai","\u90a2\u53f0\u5e02","","054001","130500","0319",1],["Baoding","\u4fdd\u5b9a\u5e02","","071052","130600","0312",1],["Zhangjiakou","\u5f20\u5bb6\u53e3","","075061","130700","0313",1],["Chengde","\u627f\u5fb7\u5e02","","067000","130800","0314",1],["Cangzhou","\u6ca7\u5dde\u5e02","","061001","130900","0317",1],["0317","\u5eca\u574a\u5e02","065000","131000","0316","",1],["Hengshui","\u8861\u6c34\u5e02","","053000","131100","0318",1]]],
["Shanxi",[["Taiyuan","\u592a\u539f\u5e02","","030082","140100","0351",1],["Datong","\u5927\u540c\u5e02","","037008","140200","0352",1],["Yangquan","\u9633\u6cc9\u5e02","","045000","140300","0353",1],["Changzhi","\u957f\u6cbb\u5e02","","046000","140400","0355",1],["Jincheng","\u664b\u57ce\u5e02","","048000","140500","0356",1],["Shuozhou","\u6714\u5dde\u5e02","","038500","140600","0349",1],["Jinzhong","\u664b\u4e2d\u5e02","","030600","140700","0354",1],["Yuncheng","\u8fd0\u57ce\u5e02","","044000","140800 ","0359",1],["Xinzhou","\u5ffb\u5dde\u5e02","","034000","140900","0350",1],["Linfen","\u4e34\u6c7e\u5e02","","041000","141000","0357",1],["L\u00fcliang","\u5415\u6881\u5e02","","033000","141100","0358",1]]],
["Inner Mongoria IM",[["Huhehaote","\u547c\u548c\u6d69\u7279\u5e02","","010020","150100","0471",1],["Baotou","\u5305\u5934\u5e02","","014025","150200","0472",1],["Wuhai","\u4e4c\u6d77\u5e02","","016000","150300","0473",1],["Chifeng","\u8d64\u5cf0\u5e02","","024000","150400","0476",1],["Tongliao","\u901a\u8fbd\u5e02","","028000","150500","0475",1],["eerduosi","\u9102\u5c14\u591a\u65af\u5e02","","017004","150600","0477",1],["Hulunbeier","\u547c\u4f26\u8d1d\u5c14\u5e02","","021008","150700","0470",1],["Bayannaoer","\u5df4\u5f66\u6dd6\u5c14\u5e02","","015001","150800","0478",1],["Wulanchabu","\u4e4c\u5170\u5bdf\u5e03\u5e02","","012000","150900","0474",1],["Xingan","\u5174\u5b89\u76df","","137401","152200","0482",3],["Xilinguole","\u9521\u6797\u90ed\u52d2\u76df","","026021","152500","0479",3],["Alashan","\u963f\u62c9\u5584\u76df","","750306","152900","0483",3]]],
["Liaoning",[["Shenyang","\u6c88\u9633\u5e02","","110013","210100","024",1],["Dalian","\u5927\u8fde\u5e02","","116000","210200","0411",1],["Anshan","\u978d\u5c71\u5e02","","210300","114001","0412",1],["Fushun","\u629a\u987a\u5e02","","113008","210400","0413",1],["Benxi","\u672c\u6eaa\u5e02","","117000","210500","0414",1],["Dandong","\u4e39\u4e1c\u5e02","","118000","210600","0415",1],["Jinzhou","\u9526\u5dde\u5e02","","121000","210700","0416",1],["Yingkou","\u8425\u53e3\u5e02","","210800","115003","0417",1],["Fuxin","\u961c\u65b0\u5e02","","123000","210900","0418",1],["Liaoyang","\u8fbd\u9633\u5e02","","111000","211000","0419",1],["Panjin","\u76d8\u9526\u5e02","","124010","211100","0427",1],["Tieling","\u94c1\u5cad\u5e02","","112000","211200","0410",1],["Chaoyang","\u671d\u9633\u5e02","","122000","211300","0421",1],["Huludao","\u846b\u82a6\u5c9b\u5e02","","125000","211400","0429",1]]],
["Jilin",[["Changchun","\u957f\u6625\u5e02","","130061","220100","0431",1],["Jilin","\u5409\u6797\u5e02","","132011","220200","0432",1],["Siping","\u56db\u5e73\u5e02","","136000","220300","0434",1],["Liaoyuan","\u8fbd\u6e90\u5e02","","136200","220400","0437",1],["Tonghua","\u901a\u5316\u5e02","","134001","220500","0435",1],["Baishan","\u767d\u5c71\u5e02","","134300","220600","0439",1],["Songyuan","\u677e\u539f\u5e02","","138000","220700","0438",1],["Baicheng","\u767d\u57ce\u5e02","","137000","220800","0436",1],["YanbianChaoxianzu","\u5ef6\u8fb9\u671d\u9c9c\u65cf\u81ea\u6cbb\u5dde","","133000","222400","0433",2]]],
["Heilongjiang",[["Haerbin","\u54c8\u5c14\u6ee8\u5e02","","150028","230100","0451",1],["Qiqihaer","\u9f50\u9f50\u54c8\u5c14\u5e02","","161005","230200","0452",1],["Jixi","\u9e21\u897f\u5e02","","158100","230300","0467",1],["Hegang","\u9e64\u5c97\u5e02","","154100","230400","0468",1],["Shuangyashan","\u53cc\u9e2d\u5c71\u5e02","","155100","230500","0469",1],["Daqing","\u5927\u5e86\u5e02","","163311","230600","0459",1],["Yichun","\u4f0a\u6625\u5e02","","153000","230700","0458",1],["Jiamusi","\u4f73\u6728\u65af\u5e02","","154002","230800","0454",1],["Qitaihe","\u4e03\u53f0\u6cb3\u5e02","","154600","230900","0464",1],["Mudanjiang","\u7261\u4e39\u6c5f\u5e02","","157000","231000","0453",1],["Heihe","\u9ed1\u6cb3\u5e02","","164300","231100","0456",1],["Suihua","\u7ee5\u5316\u5e02","","152000","231200","0455",1],["Daxinganling","\u5927\u5174\u5b89\u5cad\u5730\u533a","","165000","232700","0457",4]]],
["Shanghai",[["Shanghai","\u4e0a\u6d77\u5e02","\u6caa","200000","310000","021",1]]],
["Jiangsu",[["Nanjing","\u5357\u4eac\u5e02","","210008","320100","025",1],["Wuxi","\u65e0\u9521\u5e02","","214001","320200","0510",1],["Xuzhou","\u5f90\u5dde\u5e02","","221003","320300","0516",1],["Changzhou","\u5e38\u5dde\u5e02","","213022","320400","0519",1],["Suzhou","\u82cf\u5dde\u5e02","","215002","320500","0512",1],["Nantong","\u5357\u901a\u5e02","","226001","320600","0513",1],["Lianyungang","\u8fde\u4e91\u6e2f\u5e02","","222002","320700","0518",1],["Huaian","\u6dee\u5b89\u5e02","","223001","320800","0517",1],["Yancheng","\u76d0\u57ce\u5e02","","224005","320900","0515",1],["Yangzhou","\u626c\u5dde\u5e02","","225002","321000","0514",1],["Zhenjiang","\u9547\u6c5f\u5e02","","212001","321100","0511",1],["Taizhou","\u6cf0\u5dde\u5e02","","225300","321200","0523",1],["Suqian","\u5bbf\u8fc1\u5e02","","223800","321300","0527",1]]],
["Zhejiang",[["Hangzhou","\u676d\u5dde\u5e02","","310026","330100","0571",1],["Ningbo","\u5b81\u6ce2\u5e02","","315000","330200","0574",1],["Wenzhou","\u6e29\u5dde\u5e02","","325000","330300","0577",1],["Jiaxing","\u5609\u5174\u5e02","","314000","330400","0573",1],["Huzhou","\u6e56\u5dde\u5e02","","313000","330500","0572",1],["Shaoxing","\u7ecd\u5174\u5e02","","312000","330600","0575",1],["Jinhua","\u91d1\u534e\u5e02","","321000","330700","0579",1],["Quzhou","\u8862\u5dde\u5e02","","324002","330800","0570",1],["Zhoushan","\u821f\u5c71\u5e02","","316000","330900","0580",1],["Taizhou","\u53f0\u5dde\u5e02","","318000","331000","0576",1],["Lishui","\u4e3d\u6c34\u5e02","","323000","331100","0578",1]]],
["Anhui",[["Hefei","\u5408\u80a5\u5e02","","230000","340100","0551",1],["Wuhu","\u829c\u6e56\u5e02","","241000","340200","0553",1],["Bengbu","\u868c\u57e0\u5e02","","233000","340300","0552",1],["Huainan","\u6dee\u5357\u5e02","","232001","340400","0554",1],["Maanshan","\u9a6c\u978d\u5c71\u5e02","","243001","340500","0555",1],["Huaibei","\u6dee\u5317\u5e02","","235000","340600","0561",1],["Tongling","\u94dc\u9675\u5e02","","244000","340700","0562",1],["Anqing","\u5b89\u5e86\u5e02","","246001","340800","0556",1],["Huangshan","\u9ec4\u5c71\u5e02","","245000","341000","0559",1],["Chuzhou","\u6ec1\u5dde\u5e02","","239000","341100","0550",1],["Fuyang","\u961c\u9633\u5e02","","236033","0558","341200",1],["Suzhou","\u5bbf\u5dde\u5e02","","234000","341300","0557",1],["Chaohu","\u5de2\u6e56\u5e02","","238000","341400","0565",1],["Luan","\u516d\u5b89\u5e02","","237006","341500","0564",1],["Bozhou","\u4eb3\u5dde\u5e02","","236802","341600","0558",1],["Chizhou","\u6c60\u5dde\u5e02","","247100","341700","0566",1],["Xuancheng","\u5ba3\u57ce\u5e02","","242000","341800","0563",1]]],
["Fujian",[["Fuzhou","\u798f\u5dde\u5e02","","350001","350100","0591",1],["Xiamen","\u53a6\u95e8\u5e02","","361003","350200","0592",1],["Putian","\u8386\u7530\u5e02","","351100","350300","0594",1],["Sanming","\u4e09\u660e\u5e02","","365000","350400","0598",1],["Quanzhou","\u6cc9\u5dde\u5e02","","362000","350500","0595",1],["Zhangzhou","\u6f33\u5dde\u5e02","","363000","350600","0596",1],["Nanping","\u5357\u5e73\u5e02","","353000","350700","0599",1],["Longyan","\u9f99\u5ca9\u5e02","","364000","350800","0597",1],["Ningde","\u5b81\u5fb7\u5e02","","352100","350900","0593",1]]],
["Jiangxi",[["Nanchang","\u5357\u660c\u5e02","","330008","360100","0791",1],["Jingdezhen","\u666f\u5fb7\u9547\u5e02","","333000","360200","0798",1],["Pingxiang","\u840d\u4e61\u5e02","","337000","360300","0799",1],["Jiujiang","\u4e5d\u6c5f\u5e02","","332000","360400","0792",1],["Xinyu","\u65b0\u4f59\u5e02","","360500","338025","0790",1],["Yingtan","\u9e70\u6f6d\u5e02","","335000","360600","0701",1],["Ganzhou","\u8d63\u5dde\u5e02","","360700","341000","0797",1],["Jian","\u5409\u5b89\u5e02","","343000","360800","0796",1],["Yichun","\u5b9c\u6625\u5e02","","336000","360900","0795",1],["Fuzhou","\u629a\u5dde\u5e02","","344000","361000","0794",1],["Shangrao","\u4e0a\u9976\u5e02","","334000","361100","0793",1]]],
["Shandong",[["Jinan","\u6d4e\u5357\u5e02","","250001","370100","0531",1],["Qingdao","\u9752\u5c9b\u5e02","","266001","370200","0532",1],["Zibo","\u6dc4\u535a\u5e02","","255039","370300","0533",1],["Zaozhuang","\u67a3\u5e84\u5e02","","277101","370400","0632",1],["Dongying","\u4e1c\u8425\u5e02","","257093","370500","0546",1],["Yantai","\u70df\u53f0\u5e02","","264001","370600","0535",1],["Weifang","\u6f4d\u574a\u5e02","","261041","370700","0536",1],["Weihai","\u5a01\u6d77\u5e02","","264200","371000","0631",1],["Jining","\u6d4e\u5b81\u5e02","","272119","370800","0537",1],["Taian","\u6cf0\u5b89\u5e02","","271000","370900","0538",1],["Rizhao","\u65e5\u7167\u5e02","","276800","371100","0633",1],["Laiwu","\u83b1\u829c\u5e02","","271100","371200","0634",1],["Linyi","\u4e34\u6c82\u5e02","","276001","371300","0539",1],["Dezhou","\u5fb7\u5dde\u5e02","","253012","371400","0534",1],["Liaocheng","\u804a\u57ce\u5e02","","252052","371500","0635",1],["Binzhou","\u6ee8\u5dde\u5e02","","256619","371600","0543",1],["Heze","\u83cf\u6cfd\u5e02","","274020","371700","0530",1]]],
["Henan",[["Zhengzhou","\u90d1\u5dde\u5e02","","450007","410100","0371",1],["Kaifeng","\u5f00\u5c01\u5e02","","475001","410200","0378",1],["Luoyang","\u6d1b\u9633\u5e02","","471000","410300","0379",1],["Pingdingshan","\u5e73\u9876\u5c71\u5e02","","467000","410400","0375",1],["Jiaozuo","\u7126\u4f5c\u5e02","","454002","410800","0391",1],["Hebi","\u9e64\u58c1\u5e02","","458030","410600","0392",1],["Xinxiang","\u65b0\u4e61\u5e02","","453000","410700","0373",1],["Anyang","\u5b89\u9633\u5e02","","455000","410500","0372",1],["Puyang","\u6fee\u9633\u5e02","","457000","410900","0393",1],["Xuchang","\u8bb8\u660c\u5e02","","461000","411000","0374",1],["Luohe","\u6f2f\u6cb3\u5e02","","462000","411100","0395",1],["Sanmenxia","\u4e09\u95e8\u5ce1\u5e02","","472000","411200","0398",1],["Nanyang","\u5357\u9633\u5e02","","473002","411300","0377",1],["Shangqiu","\u5546\u4e18\u5e02","","476000","411400","0370",1],["Xinyang","\u4fe1\u9633\u5e02","","464000","411500","0376",1],["Zhoukou","\u5468\u53e3\u5e02","","466000","411600","0394",1],["humadian","\u9a7b\u9a6c\u5e97\u5e02","","463000","411700","0396",1]]],
["Hubei",[["Wuhan","\u6b66\u6c49\u5e02","\u6c49","430014","420100","027",1],["Huangshi","\u9ec4\u77f3\u5e02","","435003","420200","0714",1],["Xiangfan","\u8944\u6a0a\u5e02","","441021","420600","0710",1],["Shiyan","\u5341\u5830\u5e02","","442000","420300","0719",1],["Jingzhou","\u8346\u5dde\u5e02","","434000","421000","0716",1],["Yichang","\u5b9c\u660c\u5e02","","443000","420500","0717",1],["Jingmen","\u8346\u95e8\u5e02","","448000","420800","0724",1],["Ezhou","\u9102\u5dde\u5e02","","436000","420700","0711",1],["Xiaogan","\u5b5d\u611f\u5e02","","432100","420900","0712",1],["Huanggang","\u9ec4\u5188\u5e02","","438000","421100","0713",1],["Xianning","\u54b8\u5b81\u5e02","","437000","421200","0715",1],["Suizhou","\u968f\u5dde\u5e02","","441300","421300","0722",1],["EnshiTujiazuMiaozu","\u6069\u65bd\u571f\u5bb6\u65cf\u82d7\u65cf\u81ea\u6cbb\u5dde","","445000","422800","0718",1]]],
["Hunan",[["Changsha","\u957f\u6c99\u5e02","","410005","430100","0731",1],["Zhuzhou","\u682a\u6d32\u5e02","","412000","430200","0733",1],["Xiangtan","\u6e58\u6f6d\u5e02","","411100","430300","0732",1],["Hengyang","\u8861\u9633\u5e02","","421001","430400","0734",1],["Shaoyang","\u90b5\u9633\u5e02","","422000","430500","0739",1],["Yueyang","\u5cb3\u9633\u5e02","","414000","430600","0730",1],["Changde","\u5e38\u5fb7\u5e02","","415000","430700","0736",1],["Zhangjiajie","\u5f20\u5bb6\u754c\u5e02","","427000","430800","0744",1],["Yiyang","\u76ca\u9633\u5e02","","413000","430900","0737",1],["Chenzhou","\u90f4\u5dde\u5e02","","423000","431000","0735",1],["Yongzhou","\u6c38\u5dde\u5e02","","425000","431100","0746",1],["Huaihua","\u6000\u5316\u5e02","","418000","431200","0745",1],["Loudi","\u5a04\u5e95\u5e02","","4170000","431300","0738",1],["XiangxiTujiazuMiaozu","\u6e58\u897f\u571f\u5bb6\u65cf\u82d7\u65cf\u81ea\u6cbb\u5dde","","416000","433100","0743",2]]],
["Guangdong",[["Guangzhou","\u5e7f\u5dde\u5e02","","510130","440100","020",1],["Shenzhen","\u6df1\u5733\u5e02","","518027","440300","0755",1],["Zhuhai","\u73e0\u6d77\u5e02","","519000","440400","0756",1],["Shantou","\u6c55\u5934\u5e02","","515031","440500","0754",1],["Shaoguan","\u97f6\u5173\u5e02","","512000","440200","0751",1],["Foshan","\u4f5b\u5c71\u5e02","","528000","440600","0757",1],["Jiangmen","\u6c5f\u95e8\u5e02","","529020","440700","0750",1],["Zhanjiang","\u6e5b\u6c5f\u5e02","","524038","440800","0759",1],["Maoming","\u8302\u540d\u5e02","","525000","440900","0668",1],["Zhaoqing","\u8087\u5e86\u5e02","","526040","441200","0758",1],["Huizhou","\u60e0\u5dde\u5e02","","516001","441300","0752",1],["Meizhou","\u6885\u5dde\u5e02","","514021","441400","0753",1],["Shanwei","\u6c55\u5c3e\u5e02","","516601","441500","0660",1],["Heyuan","\u6cb3\u6e90\u5e02","","517001","441600","0762",1],["Yangjiang","\u9633\u6c5f\u5e02","","529525","441700","0662",1],["Qingyuan","\u6e05\u8fdc\u5e02","","511500","441800","0763",1],["Dongguan","\u4e1c\u839e\u5e02","","523003","441900","0769",1],["Zhongshan","\u4e2d\u5c71\u5e02","","528403","442000","0760",1],["Chaozhou","\u6f6e\u5dde\u5e02","","521000","445100","0768",1],["Jieyang","\u63ed\u9633\u5e02","","522000","445200","0663",1],["Yunfu","\u4e91\u6d6e\u5e02","","527300","445300","0766",1]]],
["Guangxi",[["Nanning","\u5357\u5b81\u5e02","","530012","450100","0771",1],["Liuzhou","\u67f3\u5dde\u5e02","","545001","450200","0772",1],["Guilin","\u6842\u6797\u5e02","","541002","450300","0773",1],["Wuzhou","\u68a7\u5dde\u5e02","","543000","450400","0774",1],["Beihai","\u5317\u6d77\u5e02","","536000","450500","0779",1],["Fangchenggang","\u9632\u57ce\u6e2f\u5e02","","538001","450600","0770",1],["Qinzhou","\u94a6\u5dde\u5e02","","535000","450700","0777",1],["Guigang","\u8d35\u6e2f\u5e02","","537100","450800","0775",1],["Yulin","\u7389\u6797\u5e02","","537000","450900","0775",1],["Baise","\u767e\u8272\u5e02","","533000","451000","0776",1],["Hezhou","\u8d3a\u5dde\u5e02","","542800","451100","0774",1],["Hechi","\u6cb3\u6c60\u5e02","","547000","451200","0778",1],["Laibin","\u6765\u5bbe\u5e02","","546100","451300","0772",1],["Chongzuo","\u5d07\u5de6\u5e02","","532200","451400","0771",1]]],
["Hainan",[["Haikou","\u6d77\u53e3\u5e02","","570145","460100","0898",1],["Sanya","\u4e09\u4e9a\u5e02","","572002","460200","0898",1]]],
["Chongqing",[["Chongqing","\u91cd\u5e86\u5e02","\u6e1d","400000","500000","023",1]]],
["Sichuan",[["Chengdu","\u6210\u90fd\u5e02","","610015","510100","028",1],["Zigong","\u81ea\u8d21\u5e02","","643000","510300","0813",1],["Panzhihua","\u6500\u679d\u82b1\u5e02","","617000","510400","0812",1],["Luzhou","\u6cf8\u5dde\u5e02","","646000","510500","0830",1],["Deyang","\u5fb7\u9633\u5e02","","618000","510600","0838",1],["Mianyang","\u7ef5\u9633\u5e02","","621000","510700","0816",1],["Guangyuan","\u5e7f\u5143\u5e02","","628017","510800","0839",1],["Suining","\u9042\u5b81\u5e02","","629000","510900","0825",1],["Neijiang","\u5185\u6c5f\u5e02","","641000","511000","0832",1],["Leshan","\u4e50\u5c71\u5e02","","614000","511100","0833",1],["Nanchong","\u5357\u5145\u5e02","","637000","511300","0817",1],["Yibin","\u5b9c\u5bbe\u5e02","","644000","511500","0831",1],["Guangan","\u5e7f\u5b89\u5e02","","638500","511600","0826",1],["Dazhou","\u8fbe\u5dde\u5e02","","635000","511700","0818",1],["Meishan","\u7709\u5c71\u5e02","","620010","511400","0833",1],["Yaan","\u96c5\u5b89\u5e02","","625000","511800","0835",1],["Bazhong","\u5df4\u4e2d\u5e02","","636600","511900","0827",1],["Ziyang","\u8d44\u9633\u5e02","","641300","512000","0832",1],["AbaZangzuQiangzu","\u963f\u575d\u85cf\u65cf\u7f8c\u65cf\u81ea\u6cbb\u5dde","","624000","513200","0837",2],["GanziZangzu","\u7518\u5b5c\u85cf\u65cf\u81ea\u6cbb\u5dde","","626000","513300","0836",2],["LiangshanYizu","\u51c9\u5c71\u5f5d\u65cf\u81ea\u6cbb\u5dde","","615000","513400","0834",2]]],
["Guizhou",[["Guiyang","\u8d35\u9633\u5e02","","550001","520100","0851",1],["Liupanshui","\u516d\u76d8\u6c34\u5e02","","553001","520200","0858",1],["Zunyi","\u9075\u4e49\u5e02","","563000","520300","0852",1],["Anshun","\u5b89\u987a\u5e02","","561000","520400","0853",1],["Tongren","\u94dc\u4ec1\u5730\u533a","","554300","522200","0856",4],["Bijie","\u6bd5\u8282\u5730\u533a","","551700","522400","0857",4],["QianxinanBuyizuMiaozu","\u9ed4\u897f\u5357\u5e03\u4f9d\u65cf\u82d7\u65cf\u81ea\u6cbb\u5dde","","562400","522300","0859",2],["QiandongnanMiaozuDongzu","\u9ed4\u4e1c\u5357\u82d7\u65cf\u4f97\u65cf\u81ea\u6cbb\u5dde","","556000","522600","0855",2],["QiannanBuyizuMiaozu","\u9ed4\u5357\u5e03\u4f9d\u65cf\u82d7\u65cf\u81ea\u6cbb\u5dde","","558000","522700","0854",1]]],
["Yunnan",[["Kunming","\u6606\u660e\u5e02","","650011","530100","0871",1],["Qujing","\u66f2\u9756\u5e02","","655000","530300","0874",1],["Yuxi","\u7389\u6eaa\u5e02","","653100","530400","0877",1],["Baoshan","\u4fdd\u5c71\u5e02","","530500","678000","0875",1],["Zhaotong","\u662d\u901a\u5e02","","657000","530600","0870",1],["Lijiang","\u4e3d\u6c5f\u5e02","","674100","530700","0888",1],["Puer","\u666e\u6d31\u5e02","","665000","532700","0879",1],["Lincang","\u4e34\u6ca7\u5e02","","677000","530900","0883",1],["WenshanZhuangzuMiaozu","\u6587\u5c71\u58ee\u65cf\u82d7\u65cf\u81ea\u6cbb\u5dde","","663000","532600","0876",2],["HongheHanizuYizu","\u7ea2\u6cb3\u54c8\u5c3c\u65cf\u5f5d\u65cf\u81ea\u6cbb\u5dde","","661400","532500","0873",2],["XiShuangbannaDaizu","\u897f\u53cc\u7248\u7eb3\u50a3\u65cf\u81ea\u6cbb\u5dde","","666100","532800","0691",2],["ChuxiongYizu","\u695a\u96c4\u5f5d\u65cf\u81ea\u6cbb\u5dde","","675000","532300","0878",2],["DaliBaizu","\u5927\u7406\u767d\u65cf\u81ea\u6cbb\u5dde","","671000","532900","0872",2],["DehongDaizuJingpozu","\u5fb7\u5b8f\u50a3\u65cf\u666f\u9887\u65cf\u81ea\u6cbb\u5dde","","678400","533100","0692",2],["NujiangLisuzu","\u6012\u6c5f\u5088\u5088\u65cf\u81ea\u6cbb\u5dde","","673100","533300","0886",2],["DiqingZangzu","\u8fea\u5e86\u85cf\u65cf\u81ea\u6cbb\u5dde","","674400","533400","0887",2]]],
["Tibet",[["Lasa","\u62c9\u8428\u5e02","","850012","540100","0891",1],["Changdu","\u660c\u90fd\u5730\u533a","","854000","542100","0895",4],["Shannan","\u5c71\u5357\u5730\u533a","","856000","542200","0893",4],["Rikaze","\u65e5\u5580\u5219\u5730\u533a","","857000","542300","0892",4],["Naqu","\u90a3\u66f2\u5730\u533a","","852000","542400","0896",4],["Ali","\u963f\u91cc\u5730\u533a","","859000","542500","0897",4],["Linzhi","\u6797\u829d\u5730\u533a","","860000","542600","0894",4]]],
["Shaanxi",[["Xian","\u897f\u5b89\u5e02","","710000","610100","029",1],["Tongchuan","\u94dc\u5ddd\u5e02","","727000","610200","0919",1],["Baoji","\u5b9d\u9e21\u5e02","","721000","610300","0917",1],["Xianyang","\u54b8\u9633\u5e02","","712000","610400","029",1],["Weinan","\u6e2d\u5357\u5e02","","714000","610500","0913",1],["Yanan","\u5ef6\u5b89\u5e02","","716000","610600","0911",1],["Hanzhong","\u6c49\u4e2d\u5e02","","723000","610700","0916",1],["Yulin","\u6986\u6797\u5e02","","719000","610800","0912",1],["Ankang","\u5b89\u5eb7\u5e02","","725000","610900","0915",1],["Shangluo","\u5546\u6d1b\u5e02","","726000","611000","0914",1]]],
["Gansu",[["Lanzhou","\u5170\u5dde\u5e02","","730030","620100","0931",1],["Jiayuguan","\u5609\u5cea\u5173\u5e02","","735100","620200","0937",1],["Jingchang","\u91d1\u660c\u5e02","","620300","737100","0935",1],["Baiyin","\u767d\u94f6\u5e02","","730900","620400","0943",1],["Tianshui","\u5929\u6c34\u5e02","","741000","620500","0938",1],["Wuwei","\u6b66\u5a01\u5e02","","733000","620600","0935",1],["Zhangye","\u5f20\u6396\u5e02","","734000","620700","0936",1],["Pingliang","\u5e73\u51c9\u5e02","","744000","620800","0933",1],["Jiuquan","\u9152\u6cc9\u5e02","","735000","620900","0937",1],["Qingyang","\u5e86\u9633\u5e02","","745000","621000","0934",1],["Dingxi","\u5b9a\u897f\u5e02","","743000","621100","0932",1],["Longnan","\u9647\u5357\u5e02","","742500","621200","0939",1],["LinxiaHuizu","\u4e34\u590f\u56de\u65cf\u81ea\u6cbb\u5dde","","731100","622900","0930",2],["GannanZangzu","\u7518\u5357\u85cf\u65cf\u81ea\u6cbb\u5dde","","747000","623000","0941",2]]],
["Qinghai",[["Xining","\u897f\u5b81\u5e02","","810000","630100","0971",1],["Haidong","\u6d77\u4e1c\u5730\u533a","","810600","632100","0972",4],["HaibeiZangzu","\u6d77\u5317\u85cf\u65cf\u81ea\u6cbb\u533a","","812200","632200","0970",2],["HuangnanZangzu","\u9ec4\u5357\u85cf\u65cf\u81ea\u6cbb\u5dde","","811300","632300","0973",2],["HainanZangzu","\u6d77\u5357\u85cf\u65cf\u81ea\u6cbb\u5dde","","813000","632500","0974",2],["GuoluoZangzu","\u679c\u6d1b\u85cf\u65cf\u81ea\u6cbb\u5dde","","814000","632600","0975",2],["YushuZangzu","\u7389\u6811\u85cf\u65cf\u81ea\u6cbb\u5dde","","815000","632700","0976",2],["HaixiMengguzu","\u6d77\u897f\u8499\u53e4\u65cf\u85cf\u65cf\u81ea\u6cbb\u5dde","","817000","632800","0977",2]]],
["Ningxia",[["Yinchuan","\u94f6\u5ddd\u5e02","","750004","640100","0951",1],["Shizuishan","\u77f3\u5634\u5c71\u5e02","","753000","640200","0952",1],["Wuzhong","\u5434\u5fe0\u5e02","","751100","640300","0953",1],["Guyuan","\u56fa\u539f\u5e02","","756000","640400","0954",1],["Zhongwei","\u4e2d\u536b\u5e02","","751700","640500","0953",1]]],
["Xinjiang",[["Wulumuqi","\u4e4c\u9c81\u6728\u9f50\u5e02","","830002","650100","0991",1],["Kelamayi","\u514b\u62c9\u739b\u4f9d\u5e02","","834000","650200","0990",1],["Tulufan","\u5410\u9c81\u756a\u5730\u533a","","838000","652100","0995",4],["Hami","\u54c8\u5bc6\u5730\u533a","","839000","652200","0902",4],["Hetian","\u548c\u7530\u5730\u533a","","848000","653200","0903",4],["Akesu","\u963f\u514b\u82cf\u5730\u533a","","843000","652900","0997",4],["Kashi","\u5580\u4ec0\u5730\u533a","","844000","653100","0998",4],["KezilesuKeerkezi","\u514b\u5b5c\u52d2\u82cf\u67ef\u5c14\u514b\u5b5c\u81ea\u6cbb\u5dde","","845350","63000","0908",4],["BayinguolengMengguzu","\u5df4\u97f3\u90ed\u695e\u8499\u53e4\u81ea\u6cbb\u5dde","","841000","652800","0996",4],["ChangjiHuizu","\u660c\u5409\u56de\u65cf\u81ea\u6cbb\u5dde","","831100","652300","0994",4],["BoertalaMengguzu","\u535a\u5c14\u5854\u62c9\u8499\u53e4\u81ea\u6cbb\u5dde","","833400","652700","0909",4],["Yilihasaka","\u4f0a\u7281\u54c8\u8428\u514b\u81ea\u6cbb\u5dde","","835000","654000","0999",4],["Tacheng","\u5854\u57ce\u5730\u533a","","834700","654200","0901",4],["Aletai","\u963f\u52d2\u6cf0\u5730\u533a","","836500","654300","0906",4]]],
["Hong Kong",[["Hong Kong","\u9999\u6e2f\u7279\u522b\u884c\u653f\u533a","\u6e2f","25175","","0852",0]]],
["Macao",[["Macao","\u6fb3\u95e8\u7279\u522b\u884c\u653f\u533a","\u6fb3","25175","","0853",0]]],
["Taiwan",[["Taiwan","\u53f0\u6e7e\u7701","\u53f0","","","",0]]]
];
ChinaInformationLoader.load=function(){
	var country=new ChinaCountry();
	var provincesInfo=ChinaInformationLoader.INFO_PROVINCE;
	for(var i=0;i<provincesInfo.length;i++){
		var provinceInfo=provincesInfo[i];
		var province=new ChinaProvince();
		province.setId(provinceInfo[0]);
		province.setAbbreviate(provinceInfo[1]);
		province.setName(provinceInfo[2]);
		province.setShortName(provinceInfo[3]);
		province.setRegionCode(provinceInfo[4]);
		province.setType(provinceInfo[5]);
		country.addProvince(province);
	}
	var citiesInfo=ChinaInformationLoader.INFO_CITY;
	for(var i=0;i<citiesInfo.length;i++){
		var cityInfoArray=citiesInfo[i];
		var provinceId=cityInfoArray[0];
		var province=country.getProvinceById(provinceId);
		var citiesInfoOfProvince=cityInfoArray[1];
		for(var j=0;j<citiesInfoOfProvince.length;j++){
			var cityInfo=citiesInfoOfProvince[j];
			var city=new ChinaCity();
			city.setId(cityInfo[0]);
			city.setName(cityInfo[1]);
			city.setShortName(cityInfo[2]);
			city.setPostcode(cityInfo[3]);
			city.setRegionCode(cityInfo[4]);
			city.setPhoneAreaCode(cityInfo[5]);
			city.setType(cityInfo[6]);
			province.addCity(city);
		}
	}
	return country;

};
function ChinaLunarCalendar(){
	this.jsjava_class="jsorg.eob.calendar.country.cn.ChinaLunarCalendar";
	this.calendarData=[0x41A95,0xD4A,0xDA5,0x20B55,0x56A,0x7155B,0x25D,0x92D,0x5192B,0xA95,0xB4A,0x416AA,0xAD5,0x90AB5,0x4BA,0xA5B,0x60A57,0x52B,0xA93,0x40E95];
	this.madd=[0,31,59,90,120,151,181,212,243,273,304,334];
	this.date=new Date();
	this.tgString="\u7532\u4e59\u4e19\u4e01\u620a\u5df1\u5e9a\u8f9b\u58ec\u7678";
	this.dzString="\u5b50\u4e11\u5bc5\u536f\u8fb0\u5df3\u5348\u672a\u7533\u9149\u620c\u4ea5";
	this.numString="\u4e00\u4e8c\u4e09\u56db\u4e94\u516d\u4e03\u516b\u4e5d\u5341";
	this.monString="\u6b63\u4e8c\u4e09\u56db\u4e94\u516d\u4e03\u516b\u4e5d\u5341\u51ac\u814a";
	this.weekString="\u65e5\u4e00\u4e8c\u4e09\u56db\u4e94\u516d";
	this.sxString="\u9f20\u725b\u864e\u5154\u9f99\u86c7\u9a6c\u7f8a\u7334\u9e21\u72d7\u732a";
	this.cYear;
	this.cMonth;
	this.cDate;
	this.cDay;
	this.cHour;
	this.tiangan;
	this.dizhi;
	this.shengxiao;
	this.convert();	
}
ChinaLunarCalendar.jia=0;
ChinaLunarCalendar.yi=1;
ChinaLunarCalendar.bing=2;
ChinaLunarCalendar.ding=3;
ChinaLunarCalendar.wu=4;
ChinaLunarCalendar.ji=5;
ChinaLunarCalendar.geng=6;
ChinaLunarCalendar.xin=7;
ChinaLunarCalendar.ren=8;
ChinaLunarCalendar.gui=9;
ChinaLunarCalendar.zi=0;
ChinaLunarCalendar.chou=1;
ChinaLunarCalendar.yin=2;
ChinaLunarCalendar.mao=3;
ChinaLunarCalendar.chen=4;
ChinaLunarCalendar.si=5;
ChinaLunarCalendar.wu=6;
ChinaLunarCalendar.wei=7;
ChinaLunarCalendar.shen=8;
ChinaLunarCalendar.you=9;
ChinaLunarCalendar.xu=10;
ChinaLunarCalendar.hai=11;
ChinaLunarCalendar.shu=0;
ChinaLunarCalendar.niu=1;
ChinaLunarCalendar.hu=2;
ChinaLunarCalendar.tu=3;
ChinaLunarCalendar.lon=4;
ChinaLunarCalendar.she=5;
ChinaLunarCalendar.ma=6;
ChinaLunarCalendar.yang=7;
ChinaLunarCalendar.hou=8;
ChinaLunarCalendar.ji=9;
ChinaLunarCalendar.gou=10;
ChinaLunarCalendar.zhu=11;
ChinaLunarCalendar.DISPLAY_NIAN="\u5e74";
ChinaLunarCalendar.DISPLAY_YUE="\u6708";
ChinaLunarCalendar.DISPLAY_RI="\u65e5";
ChinaLunarCalendar.DISPLAY_SHI="\u65f6";
ChinaLunarCalendar.DISPLAY_FEN="\u5206";
ChinaLunarCalendar.DISPLAY_MIAO="\u79d2";
ChinaLunarCalendar.DISPLAY_HAOMIAO="\u6beb\u79d2";
ChinaLunarCalendar.DISPLAY_ZHOU="\u5468";
ChinaLunarCalendar.DISPLAY_XINGQI="\u661f\u671f";
ChinaLunarCalendar.DISPLAY_RUN="\u95f0";
ChinaLunarCalendar.DISPLAY_CHU="\u521d";
ChinaLunarCalendar.DISPLAY_SHI="\u5341";
ChinaLunarCalendar.DISPLAY_ERSHI="\u5eff";
ChinaLunarCalendar.DISPLAY_SANSHI="\u5345";
ChinaLunarCalendar.prototype.convert=function(){
	var total,m,n,k;
	var isEnd=false;
	var tmp=this.date.getYear();
	if (tmp<1900){ 
		tmp+=1900;
	}
	total=(tmp-2001)*365+Math.floor((tmp-2001)/4)+this.madd[this.date.getMonth()]+this.date.getDate()-23;
	if (this.date.getYear()%4==0&&this.date.getMonth()>1){
		total++;
	}
	for(m=0;;m++){
		k=(this.calendarData[m]<0xfff)?11:12;
		for(n=k;n>=0;n--){
			if(total<=29+((this.calendarData[m]>>n)&1)){
				isEnd=true;
				break;
			}
			total=total-29-((this.calendarData[m]>>n)&1);
		}
		if(isEnd){
		    break;
		}
	}
	this.cYear=2001 + m;
	this.cMonth=k-n+1;
	this.cDate=total;
	this.cDay=this.date.getDay();
	if(k==12){
		if(this.cMonth==Math.floor(this.calendarData[m]/0x10000)+1){
			this.cMonth=1-this.cMonth;
		}
		if(this.cMonth>Math.floor(this.calendarData[m]/0x10000)+1){
			this.cMonth--;
		}
	}
	this.cHour=Math.floor((this.date.getHours()+3)/2);
	this.tiangan=(this.cYear-4)%10;
	this.dizhi=(this.cYear-4)%12;
	this.shengxiao=(this.cYear-4)%12;
};
ChinaLunarCalendar.prototype.getTianGan=function(){
	return this.tiangan;
};
ChinaLunarCalendar.prototype.getDiZhi=function(){
	return this.dizhi;
};
ChinaLunarCalendar.prototype.getShengXiao=function(){
	return this.shengxiao;
};
ChinaLunarCalendar.prototype.getYear=function(){
	return this.cYear;
};
ChinaLunarCalendar.prototype.getMonth=function(){
	return this.cMonth;
};
ChinaLunarCalendar.prototype.getDate=function(){
	return this.cDate;
};
ChinaLunarCalendar.prototype.getDay=function(){
	return this.cDay;
};
ChinaLunarCalendar.prototype.getHours=function(){
	return this.cHour;
};
ChinaLunarCalendar.prototype.getDescOfTianGan=function(){
	return this.tgString.charAt(this.tiangan);
};
ChinaLunarCalendar.prototype.getDescOfDiZhi=function(){
	return this.dzString.charAt(this.dizhi);
};
ChinaLunarCalendar.prototype.getDescOfShengXiao=function(){
	return this.sxString.charAt(this.shengxiao);
};
ChinaLunarCalendar.prototype.getDescOfYear=function(){
	return this.getDescOfTianGan()+this.getDescOfDiZhi()+ChinaLunarCalendar.DISPLAY_NIAN;
};
ChinaLunarCalendar.prototype.getDescOfMonth=function(){
    var monthdes="";
	if(this.cMonth<1){
		monthdes+=ChinaLunarCalendar.DISPLAY_RUN;
		monthdes+=this.monString.charAt(-this.cMonth-1);
	}else{
		monthdes+=this.monString.charAt(this.cMonth-1);
	}
	monthdes+=ChinaLunarCalendar.DISPLAY_YUE;
	return monthdes;
};
ChinaLunarCalendar.prototype.getDescOfDate=function(){
    var datedes="";
	datedes+=(this.cDate<11)?ChinaLunarCalendar.DISPLAY_CHU:((this.cDate<20)?ChinaLunarCalendar.DISPLAY_SHI:((this.cDate<30)?ChinaLunarCalendar.DISPLAY_ERSHI:ChinaLunarCalendar.DISPLAY_SANSHI));
	if(this.cDate%10!=0||this.cDate==10){
		datedes+=this.numString.charAt((this.cDate-1)%10);
	}
	return datedes;
};
ChinaLunarCalendar.prototype.getDescOfDay=function(){
	return ChinaLunarCalendar.DISPLAY_XINGQI+this.weekString.charAt(this.cDay);
};
ChinaLunarCalendar.prototype.getDescOfHours=function(){
	return this.dzString.charAt((this.cHour-1)%12)+ChinaLunarCalendar.DISPLAY_SHI;
};
ChinaLunarCalendar.prototype.setTime=function(date){
	this.date=date;
	this.convert();

};
function ChinaMobileValidator(){
	this.jsjava_class="jsorg.eob.validator.country.cn.ChinaMobileValidator";
}
ChinaMobileValidator.validate=function(str){
	return ChinaValidatorUtils.isMobile(str);

};
function ChinaOicqValidator(){
	this.jsjava_class="jsorg.eob.validator.country.cn.ChinaOicqValidator";
}
ChinaOicqValidator.validate=function(str){
	return ChinaValidatorUtils.isOicq(str);

};
function ChinaPhoneValidator(){
	this.jsjava_class="jsorg.eob.validator.country.cn.ChinaPhoneValidator";
}
ChinaPhoneValidator.validate=function(str){
	return ChinaValidatorUtils.isPhone(str);

};
function ChinaProvince(){
	this.jsjava_class="jsorg.eob.information.country.cn.ChinaProvince";
	this.cities=new ArrayList();
}
ChinaProvince.TYPE_PROVINCE=0;
ChinaProvince.TYPE_AUTONOMOUS_REGION=1;
ChinaProvince.TYPE_MUNICIPALITY=2;
ChinaProvince.TYPE_SAR=3;
ChinaProvince.prototype.setId=function(id){
	this.id=id;
};
ChinaProvince.prototype.getId=function(){
	return this.id;
};
ChinaProvince.prototype.setName=function(name){
	this.name=name;
};
ChinaProvince.prototype.getName=function(){
	return this.name;
};
ChinaProvince.prototype.setType=function(type){
	this.type=type;
};
ChinaProvince.prototype.getType=function(){
	return this.type;
};
ChinaProvince.prototype.setShortName=function(shortName){
	this.shortName=shortName;
};
ChinaProvince.prototype.getShortName=function(){
	return this.shortName;
};
ChinaProvince.prototype.setAbbreviate=function(abbreviate){
	this.abbreviate=abbreviate;
};
ChinaProvince.prototype.getAbbreviate=function(){
	return this.abbreviate;
};
ChinaProvince.prototype.isProvince=function(){
	return this.type==ChinaProvince.TYPE_PROVINCE;
};
ChinaProvince.prototype.isAutonomousRegion=function(){
	return this.type==ChinaProvince.TYPE_AUTONOMOUS_REGION;
};
ChinaProvince.prototype.isMunicipality=function(){
	return this.type==ChinaProvince.TYPE_MUNICIPALITY;
};
ChinaProvince.prototype.isSAR=function(){
	return this.type==ChinaProvince.TYPE_SAR;
};
ChinaProvince.prototype.setCountry=function(country){
	this.country=country; 
};
ChinaProvince.prototype.getCountry=function(){
	return this.country;
};
ChinaProvince.prototype.setRegionCode=function(regionCode){
	this.regionCode=regionCode; 
};
ChinaProvince.prototype.getRegionCode=function(){
	return this.regionCode;
};
ChinaProvince.prototype.addCity=function(city){
	this.cities.add(city);
};
ChinaProvince.prototype.getCityById=function(cityId){
	var it=this.iterator();
	while(it.hasNext()){
		var city=it.next();
		if(city.getId()==cityId){
			return city;
		}
	}
};
ChinaProvince.prototype.getCityByName=function(cityName){
	var it=this.iterator();
	while(it.hasNext()){
		var city=it.next();
		if(city.getName()==cityName){
			return city;
		}
	}
};
ChinaProvince.prototype.iterator=function(){
	return this.cities.iterator();
};
ChinaProvince.prototype.getCities=function(){
	return this.cities;
};
ChinaProvince.prototype.getSize=function(){
	return this.cities.getSize();
};
ChinaProvince.prototype.toString=function(){
	var str="["+this.id+","+this.abbreviate+","+this.name+","+this.shortName+","+this.type+"]";
	return str;

};
function ChinaTown(){
	this.jsjava_class="jsorg.eob.information.country.cn.ChinaTown";
	this.villages=new ArrayList();
}
ChinaTown.TYPE_TOWN=0;
ChinaTown.TYPE_TOWNSHIP=1;
ChinaTown.TYPE_ETHNIC_TOWNSHIP=2;
ChinaTown.TYPE_SUB_DISTRICT=3;
ChinaTown.prototype.setId=function(id){
	this.id=id;
};
ChinaTown.prototype.getId=function(){
	return this.id;
};
ChinaTown.prototype.setName=function(name){
	this.name=name;
};
ChinaTown.prototype.getName=function(){
	return this.name;
};
ChinaTown.prototype.setType=function(type){
	this.type=type;
};
ChinaTown.prototype.getType=function(){
	return this.type;
};
ChinaTown.prototype.isTown=function(){
	return this.type==ChinaTown.TYPE_TOWN;
};
ChinaTown.prototype.isTownship=function(){
	return this.type==ChinaTown.TYPE_TOWNSHIP;
};
ChinaTown.prototype.isEthnicTownship=function(){
	return this.type==ChinaTown.TYPE_ETHNIC_TOWNSHIP;
};
ChinaTown.prototype.isSubDistrict=function(){
	return this.type==ChinaTown.TYPE_SUB_DISTRICT;
};
ChinaTown.prototype.setCounty=function(county){
	this.county=county;
};
ChinaTown.prototype.getCounty=function(){
	return this.county;
};
ChinaTown.prototype.addVillage=function(village){
	this.villages.add(village);
};
ChinaTown.prototype.getVillageById=function(villageId){
	var it=this.iterator();
	while(it.hasNext()){
		var village=it.next();
		if(village.getId()==villageId){
			return village;
		}
	}
};
ChinaTown.prototype.getVillageByName=function(villageName){
	var it=this.iterator();
	while(it.hasNext()){
		var village=it.next();
		if(village.getName()==villageName){
			return village;
		}
	}
};
ChinaTown.prototype.iterator=function(){
	return this.villages.iterator();
};
ChinaTown.prototype.getVillages=function(){
	return this.villages;
};
ChinaTown.prototype.getSize=function(){
	return this.villages.getSize();
};
ChinaTown.prototype.toString=function(){
	var str="["+this.id+","+this.name+"]";
	return str;

};
function ChinaValidatorUtils(){
	this.jsjava_class="jsorg.eob.validator.ChinaValidatorUtils";
}
ChinaValidatorUtils.isChinese=function(value){
	var regx=/^[\u4e00-\u9fa5]+$/;
    return regx.test(value);
};
ChinaValidatorUtils.isIDCard=function(value){
	var regx=/^(\d{15}|\d{17}[\dx])$/;
    return regx.test(value);
};
ChinaValidatorUtils.isMobile=function(value){
	var regx=/^13[0-9]\d{8}$/;	
    return regx.test(value);
};
ChinaValidatorUtils.isOicq=function(value){
	var regx=/^[1-9][0-9]{4,}$/;
    return regx.test(value);
};
ChinaValidatorUtils.isPhone=function(value){
	var regx=/^\d{3}-\d{8}|\d{4}-\d{7}$/;
    return regx.test(value);
};
ChinaValidatorUtils.isZip=function(value){
	var regx=/^\d{6}$/;
    return regx.test(value);

};
function ChinaVillage(){
	this.jsjava_class="jsorg.eob.information.country.cn.ChinaVillage";
}
ChinaVillage.prototype.setId=function(id){
	this.id=id;
};
ChinaVillage.prototype.getId=function(){
	return this.id;
};
ChinaVillage.prototype.setName=function(name){
	this.name=name;
};
ChinaVillage.prototype.getName=function(){
	return this.name;
};
ChinaVillage.prototype.setTown=function(town){
	this.town=town;
};
ChinaVillage.prototype.getTown=function(){
	return this.town;
};
ChinaVillage.prototype.toString=function(){
	var str="["+this.id+","+this.name+"]";
	return str;

};
function ChinaZipValidator(){
	this.jsjava_class="jsorg.eob.validator.country.cn.ChinaZipValidator";
}
ChinaZipValidator.validate=function(str){
	return ChinaValidatorUtils.isZip(str);

};
function ChiSquaredDistributionImpl(degreesOfFreedom){
	this.jsjava_class="org.apache.commons.math.distribution.ChiSquaredDistributionImpl";	
	this.gamma=	DistributionFactoryImpl.newInstance().createGammaDistribution(
            degreesOfFreedom / 2.0, 2.0);
}
ChiSquaredDistributionImpl.prototype.cumulativeProbability=function(x){
	return this.gamma.cumulativeProbability(x);
};
ChiSquaredDistributionImpl.prototype.getDegreesOfFreedom=function(){
	return this.gamma.getAlpha() * 2.0;
};
ChiSquaredDistributionImpl.prototype.setDegreesOfFreedom=function(degreesOfFreedom){
	this.gamma.setAlpha(this.degreesOfFreedom / 2.0);
};
ChiSquaredDistributionImpl.prototype.getDomainLowerBound=function(p){
	return Double.MIN_VALUE * this.getGamma().getBeta();
};
ChiSquaredDistributionImpl.prototype.getDomainUpperBound=function(p){
	var ret;
    if (p < .5) {
        // use mean
        ret = this.getDegreesOfFreedom();
    } else {
        // use max
        ret = Double.MAX_VALUE;
    }
    return ret;
};
ChiSquaredDistributionImpl.prototype.getInitialDomain=function(p){
	var ret;
    if (p < .5) {
        // use 1/2 mean
        ret = this.getDegreesOfFreedom() * .5;
    } else {
        // use mean
        ret = this.getDegreesOfFreedom();
    }
    return ret;
};
ChiSquaredDistributionImpl.prototype.getGamma=function(){
	return this.gamma;

};
function Class(className){
	this.jsjava_class="jsjava.lang.Class";
	this.className=className;
	var flag=true;
	if(className==undefined){
		flag=false;
	}
	var c=null;
	try{
		c=eval("new "+className+"()");
		if(!c.jsjava_class){
			flag=false;
		}
	}catch(e){
		flag=false;		
	}
	if(!flag){
		throw new ClassNotFoundException(ClassNotFoundException.ERROR,"Class "+className+" is not found!");
	}
	this.instance=c;
}
Class.forName=function(className){	
	return new Class(className);
};
Class.prototype.getConstructor=function(parameterTypes){
    return new Constructor(this.className,parameterTypes);
};
Class.prototype.newInstance=function(){
    return this.instance;
};
Class.prototype.getName=function(){
    return this.className;
};
Class.prototype.toString=function(){
    return this.className;

};
ClassNotFoundException.prototype=new Error();
ClassNotFoundException.prototype.constructor=ClassNotFoundException;
ClassNotFoundException.ERROR=0;
function ClassNotFoundException(code,message){
	this.jsjava_class="jsjava.lang.ClassNotFoundException";
	this.code=code;
    this.message=message;
    this.name="jsjava.lang.ClassNotFoundException";

}
function ClipboardUtils(){
	this.jsjava_class="jsorg.eob.document.ClipboardUtils";
}
ClipboardUtils.copyTextToClipboard=function(data){
	if(data==undefined||data==null){
		return;
	}
	if(BrowserUtils.isIE()){
		window.clipboardData.clearData();
		window.clipboardData.setData("text",data);
	}else if(BrowserUtils.isOpera()){
		window.location=data;
	}else if(BrowserUtils.isFirefox()){
		try{  
            netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect");  
        }catch (e){ 
            throw new SecurityException(SecurityException.ERROR,"");
        }
        var clip = Components.classes["@mozilla.org/widget/clipboard;1"].createInstance(Components.interfaces.nsIClipboard);  
        if (!clip){  
            return;  
        }
        var trans = Components.classes["@mozilla.org/widget/transferable;1"].createInstance(Components.interfaces.nsITransferable);  
        if (!trans){  
            return;  
        }
        trans.addDataFlavor("text/unicode");  
        var str = new Object();  
        var len = new Object();  
        var str = Components.classes["@mozilla.org/supports-string;1"].createInstance(Components.interfaces.nsISupportsString);  
        var copytext = data;  
        str.data = copytext;  
        trans.setTransferData("text/unicode",str,copytext.length*2);  
        var clipid = Components.interfaces.nsIClipboard;  
        if (!clip){  
            return false;  
        }
        clip.setData(trans,null,clipid.kGlobalClipboard); 
	}
	return true;
};
ClipboardUtils.getTextFromClipboard=function(){
	var pastetext;
	if(BrowserUtils.isIE()){
		pastetext=window.clipboardData.getData("text");
	}else if(BrowserUtils.isFirefox()){
		try{  
            netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect");  
        }catch (e){ 
            throw new SecurityException(SecurityException.ERROR,"");
        }
        var clip = Components.classes["@mozilla.org/widget/clipboard;1"].createInstance(Components.interfaces.nsIClipboard);  
        if (!clip){  
            return;  
        }
        var trans = Components.classes["@mozilla.org/widget/transferable;1"].createInstance(Components.interfaces.nsITransferable);  
        if (!trans){  
            return;  
        }
        trans.addDataFlavor("text/unicode");  
        clip.getData(trans,clip.kGlobalClipboard); 
        var str=new Object(); 
        var strLength=new Object(); 
        trans.getTransferData("text/unicode",str,strLength);
        if (str){
        	str=str.value.QueryInterface(Components.interfaces.nsISupportsString); 
        }
        if (str){
        	pastetext=str.data.substring(0,strLength.value / 2); 
        }
	}
	return pastetext;

};
CloneNotSupportedException.prototype=new Error();
CloneNotSupportedException.prototype.constructor=CloneNotSupportedException;
CloneNotSupportedException.ERROR=0;
function CloneNotSupportedException(code,message){
	this.jsjava_class="jsjava.lang.CloneNotSupportedException";
	this.code=code;
    this.message=message;
    this.name="jsjava.lang.CloneNotSupportedException";

}
function Color(r, g, b, a){
	this.jsjava_class="jsjava.awt.Color";
	r=init(r);
	g=init(g);
	b=init(b);
	a=init(a);
    this.value = ((a & 0xFF) << 24) |
                ((r & 0xFF) << 16) |
                ((g & 0xFF) << 8)  |
                ((b & 0xFF) << 0);	
    function init(c){
    	if(c==undefined||isNaN(c))
    		c=255;
    	c=parseInt(c);
    	if(c>255){
    		c=255;
    	}
    	return c;
    }
}
Color.FACTOR=0.7;
Color.white= new Color(255, 255, 255);
Color.WHITE = Color.white
Color.lightGray = new Color(192, 192, 192);
Color.LIGHT_GRAY = Color.lightGray;
Color.gray = new Color(128, 128, 128);
Color.GRAY = Color.gray;
Color.darkGray = new Color(64, 64, 64);
Color.DARK_GRAY = Color.darkGray;
Color.black = new Color(0, 0, 0);
Color.BLACK = Color.black;
Color.red = new Color(255, 0, 0);
Color.RED = Color.red;
Color.pink = new Color(255, 175, 175);
Color.PINK = Color.pink;
Color.orange = new Color(255, 200, 0);
Color.ORANGE = Color.orange;
Color.yellow = new Color(255, 255, 0);
Color.YELLOW = Color.yellow;
Color.green = new Color(0, 255, 0);
Color.GREEN = Color.green;
Color.magenta = new Color(255, 0, 255);
Color.MAGENTA = Color.magenta;
Color.cyan = new Color(0, 255, 255);
Color.CYAN = Color.cyan;
Color.blue = new Color(0, 0, 255);
Color.BLUE = Color.blue;
Color.prototype.getRGB=function(){
    return this.value;	
};
Color.prototype.getRed=function(){
    return (this.getRGB() >> 16) & 0xFF;	
};
Color.prototype.getGreen=function(){
    return (this.getRGB() >> 8) & 0xFF;	
};
Color.prototype.getBlue=function(){
    return (this.getRGB() >> 0) & 0xFF;	
};
Color.prototype.getAlpha=function(){
    return (this.getRGB() >> 24) & 0xFF;	
};
Color.prototype.brighter=function(){
    var r = this.getRed();
    var g = this.getGreen();
    var b = this.getBlue();
    var i = parseInt(1.0/(1.0-Color.FACTOR));
    if ( r == 0 && g == 0 && b == 0) {
       return new Color(i, i, i);
    }
    if ( r > 0 && r < i ) r = i;
    if ( g > 0 && g < i ) g = i;
    if ( b > 0 && b < i ) b = i;
    return new Color(Math.min(parseInt(r/Color.FACTOR), 255),
                     Math.min(parseInt(g/Color.FACTOR), 255),
                     Math.min(parseInt(b/Color.FACTOR), 255));	
};
Color.prototype.darker=function(){
    return new Color(Math.max(parseInt(this.getRed()*Color.FACTOR), 0), 
			 Math.max(parseInt(this.getGreen()*Color.FACTOR), 0),
			 Math.max(parseInt(this.getBlue()*Color.FACTOR), 0));	
};
Color.prototype.toHexValue=function(){
	var redValue=this.getRed();
	var greenValue=this.getGreen();
	var blueValue=this.getBlue();
	var redHexValue=Integer.toHexString(redValue);
	if(redHexValue.length==1){
		redHexValue="0"+redHexValue;
	}
	var greenHexValue=Integer.toHexString(greenValue);
	if(greenHexValue.length==1){
		greenHexValue="0"+greenHexValue;
	}
	var blueHexValue=Integer.toHexString(blueValue);
	if(blueHexValue.length==1){
		blueHexValue="0"+blueHexValue;
	}
	var hexValue=redHexValue+greenHexValue+blueHexValue;
	return hexValue;	
};
Color.prototype.toString=function(){
    return "[red="+this.getRed()+",green="+this.getGreen()+",blue="+this.getBlue()+",alpha="+this.getAlpha()+"]"; 

};
function ColorUtils(){
	this.jsjava_class="jsorg.eob.document.ColorUtils";
}
ColorUtils.toHexValue=function(color){
	if(color==undefined){
		return "FFFFFF";
	}
	var redValue=color.getRed();
	var greenValue=color.getGreen();
	var blueValue=color.getBlue();
	return ColorUtils.toHexValueWithRGB(redValue,greenValue,blueValue);
};
ColorUtils.toHexValueWithRGB=function(redValue,greenValue,blueValue){
	var flag1=NumberScaleValidator.validateBetween(redValue,0,255);
	var flag2=NumberScaleValidator.validateBetween(greenValue,0,255);
	var flag3=NumberScaleValidator.validateBetween(blueValue,0,255);
	if(!flag1||!flag2||!flag3){
		throw new IllegalArgumentException(IllegalArgumentException.ERROR,"Invalid rgb input!");
	}
	var redHexValue=Integer.toHexString(redValue);
	if(redHexValue.length==1){
		redHexValue="0"+redHexValue;
	}
	var greenHexValue=Integer.toHexString(greenValue);
	if(greenHexValue.length==1){
		greenHexValue="0"+greenHexValue;
	}
	var blueHexValue=Integer.toHexString(blueValue);
	if(blueHexValue.length==1){
		blueHexValue="0"+blueHexValue;
	}
	var hexValue=redHexValue+greenHexValue+blueHexValue;
	return hexValue;
};
ColorUtils.createHexColor=function(redHexValue,greenHexValue,blueHexValue){
	var redValue=parseInt("0x"+redHexValue);
	var greenValue=parseInt("0x"+greenHexValue);
	var blueValue=parseInt("0x"+blueHexValue);
	var color=new Color(redValue,greenValue,blueValue,255);
	return color;
};
ColorUtils.toPaletteDatum=function(m,n){
	function getDatum(m,n){		
		var hexColors=MultiDimensionArrayUtils.createTwoDimensionArray(m,n);
		var max=0xffffff;
		var sn=m*n;
		var span=max/sn;
		for(var i=0,s=0;i<m,s<sn;i++){
			for(var j=0;j<n;j++,s++){
				var hexValue=Integer.toHexString(s*span);
				var hexColorValue=""+hexValue;
				var zeroNum=6-hexValue.length;
				for(var k=0;k<zeroNum;k++){
					hexColorValue="0"+hexColorValue;
				}
				hexColors[i][j]=hexColorValue;
			}
		}
		return hexColors;
	}
	function getGreyDatum(m){
		var hexColors=new Array(m);
		var max=255;
		hexColors[0]="000000";
		hexColors[m-1]="ffffff";
		var span=max/m;
		for(var i=1;i<m-1;i++){
			var iv=i*span;
			hexColors[i]=new Color(iv,iv,iv).toHexValue();
		}
		return hexColors;
	}
	function getLifeDatum(m){
		var lifeColors=[Color.red,Color.pink,Color.orange,Color.yellow,Color.green,Color.magenta,Color.cyan,Color.blue];
		var ll=lifeColors.length;
		if(m>ll){
			for(var i=ll;i<m;i++){
				lifeColors[i]=Color.black;
			}
		}
		var hexColors=new Array(m);
		for(var i=0;i<m;i++){
			hexColors[i]=lifeColors[i].toHexValue();
		}
		return hexColors;
	}
	var datum=getDatum(m,n);
	var datum2=getGreyDatum(n);
	var datum3=getLifeDatum(m);
	for(var i=0;i<n;i++){
		datum[m-1][i]=datum2[i];
	}
	for(var i=0;i<m-1;i++){
		datum[i][n-1]=datum3[i];
	}
	return datum;

};
function Comparator(){
	this.jsjava_class="jsjava.util.Comparator";
}
Comparator.CONSTANT_ILLEGAL_INVOCATION="This is an interface method and you should use the concrete method";
Comparator.prototype.compare=function(o1,o2){
    throw new IllegalStateException(IllegalStateException.ERROR,Comparator.CONSTANT_ILLEGAL_INVOCATION);
};
Comparator.prototype.equals=function(o){
    throw new IllegalStateException(IllegalStateException.ERROR,Comparator.CONSTANT_ILLEGAL_INVOCATION); 

};
function Complex(real,imaginary){
	this.jsjava_class="org.apache.commons.math.complex.Complex";
	this.real=real;
	this.imaginary=imaginary;
}
Complex.I = new Complex(0.0, 1.0);
Complex.NaN = new Complex(Double.NaN, Double.NaN);
Complex.ONE = new Complex(1.0, 0.0);
Complex.ZERO = new Complex(0.0, 0.0);
Complex.prototype.abs=function(){
	if (this.isNaN()) {
        return Double.NaN;
    }
    if (this.isInfinite()) {
        return Double.POSITIVE_INFINITY;
    }
    var real=this.real;
    var imaginary=this.imaginary;
    if (Math.abs(real) < Math.abs(imaginary)) {
        if (imaginary == 0.0) {
            return Math.abs(real);
        }
        var q = real / imaginary;
        return (Math.abs(imaginary) * Math.sqrt(1 + q*q));
    } else {
        if (real == 0.0) {
            return Math.abs(imaginary);
        }
        var q = imaginary / real;
        return (Math.abs(real) * Math.sqrt(1 + q*q));
    }
};
Complex.prototype.add=function(rhs){
	return new Complex(this.real + rhs.getReal(),this.imaginary + rhs.getImaginary());
};
Complex.prototype.conjugate=function(){
	if (this.isNaN()) {
        return Complex.NaN;
    }   
    return new Complex(this.real, -this.imaginary);
};
Complex.prototype.divide=function(rhs){
	if (this.isNaN() || rhs.isNaN()) {
        return Complext.NaN;
    }
    var real=this.real;
    var imaginary=this.imaginary;
    var c = rhs.getReal();
    var d = rhs.getImaginary();
    if (c == 0.0 && d == 0.0) {
        return Complex.NaN;
    }
    if (rhs.isInfinite() && !this.isInfinite()) {
        return Complex.ZERO;
    }
    if (Math.abs(c) < Math.abs(d)) {
        if (d == 0.0) {
            return new Complex(real/c, imaginary/c);
        }
        var q = c / d;
        var denominator = c * q + d;
        return new Complex((real * q + imaginary) / denominator,(imaginary * q - real) / denominator);
    } else {
        if (c == 0.0) {
            return new Complex(imaginary/d, -real/c);
        }
        var q = d / c;
        var denominator = d * q + c;
        return new Complex((imaginary * q + real) / denominator,(imaginary - real * q) / denominator);
    }
};
Complex.prototype.equals=function(o){
	if(o==undefined){
        return false; 
    }
    if(o.jsjava_class&&o.jsjava_class=="org.apache.commons.math.complex.Complex"){
        return this.real==o.real&&this.imaginary==o.imaginary;
    }
    return false;
};
Complex.prototype.getImaginary=function(){
	return this.imaginary;
};
Complex.prototype.getReal=function(){
	return this.real;
};
Complex.prototype.isInfinite=function(){
	return !this.isNaN() && (Double.isInfinite(this.real) || Double.isInfinite(this.imaginary));   
};
Complex.prototype.isNaN=function(){
	return Double.isNaN(this.real) || Double.isNaN(this.imaginary); 
};
Complex.prototype.multiply=function(rhs){
	if (this.isNaN() || rhs.isNaN()) {
        return Complex.NaN;
    }
    return new Complex(this.real * rhs.real - this.imaginary * rhs.imaginary,
            this.real * rhs.imaginary + this.imaginary * rhs.real);
};
Complex.prototype.negate=function(){
	if (this.isNaN()) {
        return Complex.NaN;
    }    
    return new Complex(-this.real, -this.imaginary);
};
Complex.prototype.subtract=function(rhs){
	if (this.isNaN() || rhs.isNaN()) {
        return Complex.NaN;
    }
    return new Complex(this.real - rhs.getReal(),
        this.imaginary - rhs.getImaginary());
};
Complex.prototype.toString=function(){
	var str=this.real;
	if(this.imaginary>=0){
		str+="+";
	}
	str+=this.imaginary+"i";
	return str;

};
function ComplexUtils(){
	this.jsjava_class="org.apache.commons.math.complex.ComplexUtils";
}
ComplexUtils.acos=function(z){
	if (z.isNaN()) {
        return Complex.NaN;
    }
    return Complex.I.negate().multiply(ComplexUtils.log(z.add(
        Complex.I.multiply(ComplexUtils.sqrt1z(z))))); 
};
ComplexUtils.asin=function(z){
	if (z.isNaN()) {
        return Complex.NaN;
    }
    return Complex.I.negate().multiply(ComplexUtils.log(ComplexUtils.sqrt1z(z).add(
        Complex.I.multiply(z))));
};
ComplexUtils.atan=function(z){
	if (z.isNaN()) {
        return Complex.NaN;
    }
    return Complex.I.multiply(
        ComplexUtils.log(Complex.I.add(z).divide(Complex.I.subtract(z))))
        .divide(new Complex(2.0, 0.0));
};
ComplexUtils.cos=function(z){
	if (z.isNaN()) {
        return Complex.NaN;
    }
    var a = z.getReal();
    var b = z.getImaginary();
    return new Complex(Math.cos(a) * MathUtils.cosh(b),
        -Math.sin(a) * MathUtils.sinh(b));
};
ComplexUtils.cosh=function(z){
	if (z.isNaN()) {
        return Complex.NaN;
    }
    var a = z.getReal();
    var b = z.getImaginary();
    return new Complex(MathUtils.cosh(a) * Math.cos(b),
        MathUtils.sinh(a) * Math.sin(b));
};
ComplexUtils.exp=function(z){
	if (z.isNaN()) {
        return Complex.NaN;
    }
    var b = z.getImaginary();
    var expA = Math.exp(z.getReal());
    return new Complex(expA *  Math.cos(b), expA * Math.sin(b));
};
ComplexUtils.log=function(z){
	if (z.isNaN()) {
        return Complex.NaN;
    }
    return new Complex(Math.log(z.abs()),
        Math.atan2(z.getImaginary(), z.getReal())); 
};
ComplexUtils.polar2Complex=function(r,theta){
	if (r < 0) {
        throw new IllegalArgumentException
            (IllegalArgumentException.ERROR,"Complex modulus must not be negative");
    }
    return new Complex(r * Math.cos(theta), r * Math.sin(theta));
};
ComplexUtils.pow=function(y,x){
	return ComplexUtils.exp(x.multiply(ComplexUtils.log(y)));
};
ComplexUtils.sin=function(z){
	if (z.isNaN()) {
        return Complex.NaN;
    }
    var a = z.getReal();
    var b = z.getImaginary();
    return new Complex(Math.sin(a) * MathUtils.cosh(b),
        Math.cos(a) * MathUtils.sinh(b));
};
ComplexUtils.sinh=function(z){
	if (z.isNaN()) {
        return Complex.NaN;
    }
    var a = z.getReal();
    var b = z.getImaginary();
    return new Complex(MathUtils.sinh(a) * Math.cos(b),
        MathUtils.cosh(a) * Math.sin(b));
};
ComplexUtils.sqrt=function(z){
	if (z.isNaN()) {
        return Complex.NaN;
    }
    var a = z.getReal();
    var b = z.getImaginary();
    var t = Math.sqrt((Math.abs(a) + z.abs()) / 2.0);
    if (a >= 0.0) {
        return new Complex(t, b / (2.0 * t));
    } else {
        return new Complex(Math.abs(b) / (2.0 * t),
            MathUtils.indicator(b) * t);
    }
};
ComplexUtils.sqrt1z=function(z){
	return ComplexUtils.sqrt(Complex.ONE.subtract(z.multiply(z)));
};
ComplexUtils.tan=function(z){
	if (z.isNaN()) {
        return Complex.NaN;
    }
    var a2 = 2.0 * z.getReal();
    var b2 = 2.0 * z.getImaginary();
    var d = Math.cos(a2) + MathUtils.cosh(b2);
    return new Complex(Math.sin(a2) / d, MathUtils.sinh(b2) / d);
};
ComplexUtils.tanh=function(z){
	if (z.isNaN()) {
        return Complex.NaN;
    }
    var a2 = 2.0 * z.getReal();
    var b2 = 2.0 * z.getImaginary();
    var d = MathUtils.cosh(a2) + Math.cos(b2);
    return new Complex(MathUtils.sinh(a2) / d, Math.sin(b2) / d);

};
function ConditionTrigger(components,conditionNumber){
	this.jsjava_class="jsorg.eob.component.trigger.ConditionTrigger";
    this.components=components;
    this.conditions=new Array(conditionNumber);
    this.size=0;
}
ConditionTrigger.prototype.addCondition=function(condition){
    this.conditions[this.size++]=condition;
};
ConditionTrigger.prototype.trigger=function(conditionSeed){
    var triggerCondition="ConditionTrigger_NULL";
    var conditions=this.conditions;
    for(var i=0;i<conditions.length;i++){
        if(conditions[i].conditionSeed==conditionSeed){
            triggerCondition=conditions[i];
        }
    }
    if(triggerCondition=="ConditionTrigger_NULL"){
        return;	
    }
    var visibles;
    if(triggerCondition!=null){
        visibles=triggerCondition.visibles;	
    }
    if(visibles!=null){
        for(var i=0;i<visibles.length;i++){
            this.show(visibles[i]);
        }
    }
    var invisibles=this.getDiff(this.components,visibles);
    for(var i=0;i<invisibles.length;i++){
        this.hide(invisibles[i]);
    }
};
ConditionTrigger.prototype.show=function(id){
    document.getElementById(id).style.display="block";
};
ConditionTrigger.prototype.hide=function(id){
    document.getElementById(id).style.display="none";
};
ConditionTrigger.prototype.getDiff=function(collection,parts){
	if(parts==null){
	    return collection;	
	}
    var res=new Array(collection.length-parts.length);
    var resCount=0;
    for(var i=0;i<collection.length;i++){
        if(!this.contains(parts,collection[i])){
            res[resCount]=collection[i];
            resCount++;
        }
    }
    return res;
};
ConditionTrigger.prototype.contains=function(parts,part){
    for(var i=0;i<parts.length;i++){
        if(parts[i]==part){
            return true;
        }
    }
    return false;
};    
function Console(win,title){
	this.jsjava_class="jsjava.io.Console";
	this.win=win;
	this.state=Console.STATE_UNSTARTED;
	this.consoleWin=null;
	this.title=title;
	if(!title||title==""||title==null){
		this.title="Javascript Console";
	}
}
Console.prototype=new OutputDevice();
Console.prototype.constructor=Console;
Console.STATE_UNSTARTED=0;
Console.STATE_RUNNING=1;
Console.STATE_FINISHED=2;
var jsjava_console_instance;
Console.open=function(title){
	jsjava_console_instance=new Console(window,title);
	System.console=jsjava_console_instance;
	System.out=new PrintStream(new OutputStream(jsjava_console_instance));
	System.err=new PrintStream(new OutputStream(jsjava_console_instance));
	jsjava_console_instance.start();
};
Console.prototype.start=function(){
	this.state=Console.STATE_RUNNING;
	var consoleWinWidth=window.screen.width/1.5;
	var consoleWinHeight=window.screen.height/2;
	this.consoleWin=window.open("about:blank","_blank","resizable=yes,menubar=no,scrollbars=yes,toolbar=no,menubar=no,width="+consoleWinWidth+",height="+consoleWinHeight);
	var cwinContent="<html>";
	cwinContent+="<head><script>";
	cwinContent+="var isIE=navigator.userAgent.indexOf('MSIE')!=-1;";
	cwinContent+="function deal_jsjava_console_event(e){if(isIE){if(event.keyCode==67&&event.ctrlKey){window.close();};}else{if(e.keyCode==67&&e.ctrlKey){window.close();}}}";
	cwinContent+="document.onkeydown=deal_jsjava_console_event;";
	cwinContent+="</script></head>";
	if(!BrowserUtils.isIE()){
		this.consoleWin.document.open();	
	}
	cwinContent+="<body leftmargin='2' topmargin='2' bgcolor='#000000' text='#FFFFFF' style='font-size:11pt;'></body></html>";
	this.consoleWin.document.write(cwinContent);
	this.consoleWin.document.title=this.title;
	if(!BrowserUtils.isIE()){
		this.consoleWin.document.close();	
	}
	this.println("Javascript Console started");
};
Console.prototype.stop=function(){
	this.state=Console.STATE_FINISHED;
	this.println("Javascript Console stopped");
};
Console.prototype.close=function(){
	if(this.state!==Console.STATE_FINISHED){
		this.stop();
	}
	this.consoleWin.close();
};
Console.prototype.println=function(msg){
    var printStr=this.consoleTimeText(new Date())+"&nbsp;&nbsp;"+msg+"<br>";
    if(BrowserUtils.isIE()){
    	this.consoleWin.document.write(printStr);
    }else{
    	this.consoleWin.document.body.innerHTML+=printStr;
    }
};
Console.prototype.print=function(msg){
    var printStr=this.consoleTimeText(new Date())+"&nbsp;&nbsp;"+msg;
    if(BrowserUtils.isIE()){
    	this.consoleWin.document.write(printStr);
    }else{
    	this.consoleWin.document.body.innerHTML+=printStr;
    }
};
Console.prototype.consoleTimeText=function(date){
	var df=new SimpleDateFormat();
    df.applyPattern("yyyy-MM-dd hh:mm:ss");
    return df.format(date);

};
function Constructor(className,parameterTypes){
	this.jsjava_class="jsjava.lang.reflect.Constructor";
	this.className=className;
	this.parameterTypes=parameterTypes;
	if(parameterTypes==undefined||!(parameterTypes instanceof Array)){
		this.parameterTypes=[];
	}
}
Constructor.prototype.newInstance=function(initargs){	
	this.initargs=initargs;
	if(initargs==undefined||!(initargs instanceof Array)){
		this.initargs=[];
	}
	var l1=this.initargs.length;
	var l2=this.parameterTypes.length;
	if(l1<l2){
		for(var i=l1;i<l2;i++){
			this.initargs[i]=undefined;
		}		
	}
	var instanceStr="new "+this.className+"(";
	for(var i=0;i<l2;i++){
		instanceStr+="this.initargs["+i+"],";
	}
	if(instanceStr.lastIndexOf(",")==instanceStr.length-1){
		instanceStr=instanceStr.substring(0,instanceStr.length-1);
	}
	instanceStr+=")";
	var instance=eval(instanceStr);
	return instance;
};
Constructor.prototype.getName=function(){
    return this.className;
};
Constructor.prototype.getParameterTypes=function(){
    return this.parameterTypes;
};
Constructor.prototype.getDeclaringClass=function(){
    return this.className;

};
ConvergenceException.prototype=new Error();
ConvergenceException.prototype.constructor=ConvergenceException;
ConvergenceException.ERROR=0;
function ConvergenceException(code,message){
	this.jsjava_class="org.apache.commons.math.ConvergenceException";
	this.code=code;
    this.message=message;
    this.name="org.apache.commons.math.ConvergenceException";

}
function Cookie(name,value){
	this.jsjava_class="jsjavax.servlet.http.Cookie";
    this.name=name;
    this.value=value;	
    this.secure=false;
    this.maxAge=0;
}
Cookie.prototype.clone=function(){
    var clonedCookie=new cookie(this.getName(),this.getValue());
    clonedCookie.setComment(this.getComment());
    clonedCookie.setDomain(this.getDomain());
    clonedCookie.setMaxAge(this.getMaxAge());
    clonedCookie.setPath(this.getPath());
    clonedCookie.setSecure(this.getSecure());
    clonedCookie.setVersion(this.getVersion());
    return clonedCookie;
};
Cookie.prototype.getComment=function(){
    return this.comment;
};
Cookie.prototype.setComment=function(comment){
    this.comment=comment;
};
Cookie.prototype.getDomain=function(){
    return this.domain;
};
Cookie.prototype.setDomain=function(domain){
    this.domain=domain;
};
Cookie.prototype.getMaxAge=function(){
    return this.maxAge;
};
Cookie.prototype.setMaxAge=function(maxAge){
    this.maxAge=maxAge;
};
Cookie.prototype.getName=function(){
    return this.name;
};
Cookie.prototype.getPath=function(){
    return this.path;
};
Cookie.prototype.setPath=function(path){
    this.path=path;
};
Cookie.prototype.getSecure=function(){
    return this.secure;
};
Cookie.prototype.setSecure=function(secure){
    this.secure=secure;
};
Cookie.prototype.getValue=function(){
    return this.value;
};
Cookie.prototype.setValue=function(value){
    this.value=value;
};
Cookie.prototype.getVersion=function(){
    return this.version;
};
Cookie.prototype.setVersion=function(version){
    this.version=version;

};
function CursorUtils(){
	this.jsjava_class="jsorg.eob.document.CursorUtils";
}
CursorUtils.getCursorPosition=function(textObj){
	var ps=CursorUtils.getSelectPositions(textObj);
	return ps[0];
};
CursorUtils.getSelectStartPosition=function(textObj){
	var ps=CursorUtils.getSelectPositions(textObj);
	return ps[0];
};
CursorUtils.getSelectEndPosition=function(textObj){
	var ps=CursorUtils.getSelectPositions(textObj);
	return ps[1];
};
CursorUtils.getSelectPositions=function(textObj){
	if(!DocumentUtils.isHTMLTextObject(textObj)){
		throw new IllegalArgumentException(IllegalArgumentException.ERROR,"The argument must be a text input object!");
	}
	var start = 0, end = 0;
    if(BrowserUtils.isFirefox()){
        start = textObj.selectionStart;
        end = textObj.selectionEnd;
    }else if(BrowserUtils.isIE()) {
        var textRange = document.selection.createRange();
        if(textRange.parentElement() == textObj) {
            var docRange = document.body.createTextRange();
            docRange.moveToElementText(textObj);
            for (start=0; docRange.compareEndPoints("StartToStart", textRange) < 0; start++){
                docRange.moveStart('character', 1);
            }
            for (var i = 0; i <= start; i ++) {
                if (textObj.value.charAt(i) == '\n'){
                	start++;
                }
            }         
            docRange = document.body.createTextRange();   
            docRange.moveToElementText(textObj);
            for (end = 0; docRange.compareEndPoints('StartToEnd', textRange) < 0; end ++) {
                docRange.moveStart('character', 1);
            }
            for (var i = 0; i <= end; i ++) {
                if (textObj.value.charAt(i) == '\n')
                    end ++;
            }
        }        
    }
    return [start,end];
};
CursorUtils.insertTextInCusorPosition=function(textObj,text){
	if(!(text instanceof String)&&typeof(text)!="string"){
		return;
	}
	var pos=CursorUtils.getCursorPosition(textObj);	
	textObj.value=textObj.value.slice(0,pos)+text+textObj.value.slice(pos);	
	CursorUtils.moveCursorTo(textObj,pos+text.length);
};
CursorUtils.moveCursorTo=function(textObj,pos){
	if(!DocumentUtils.isHTMLTextObject(textObj)){
		throw new IllegalArgumentException(IllegalArgumentException.ERROR,"The argument must be a text input object!");
	}
	if(isNaN(pos)){
		throw new IllegalArgumentException(IllegalArgumentException.ERROR,"position must be a number!");
	}
	if(BrowserUtils.isIE()){
		var textRange=textObj.createTextRange();
		textRange.collapse(true);
		textRange.moveStart("character",pos);		
		textRange.select();
	}else if(BrowserUtils.isFirefox()){
		textObj.setSelectionRange(pos,pos);
		textObj.focus();
	}
};
CursorUtils.textSelect=function(textObj,start,end){
	if(!DocumentUtils.isHTMLTextObject(textObj)){
		throw new IllegalArgumentException(IllegalArgumentException.ERROR,"The argument must be a text input object!");
	}
	if(isNaN(start)||isNaN(end)||start>end){
		throw new IllegalArgumentException(IllegalArgumentException.ERROR,"start and end must be a number!");
	}
	if(BrowserUtils.isIE()){
		var textRange=textObj.createTextRange();
		textRange.collapse(true);
		textRange.moveStart("character",start);	
		textRange.moveEnd("character",end-start);		
		textRange.select();
	}else if(BrowserUtils.isFirefox()){
		textObj.setSelectionRange(start,end);
		textObj.focus();
	}

};
function Format(){
     this.jsjava_class="jsjava.text.Format";
}
function DateFormat(){
    this.jsjava_class="jsjava.text.DateFormat";
}
DateFormat.prototype=new Format();
DateFormat.prototype.constructor=DateFormat;
DateFormat.zh_cn_month2=["01","02","03","04","05","06","07","08","09","10","11","12"];
DateFormat.zh_cn_month3=["\u4e00\u6708","\u4e8c\u6708","\u4e09\u6708","\u56db\u6708","\u4e94\u6708","\u516d\u6708","\u4e03\u6708","\u516b\u6708","\u4e5d\u6708","\u5341\u6708","\u5341\u4e00\u6708","\u5341\u4e8c\u6708"];
DateFormat.zh_cn_month4=["\u4e00\u6708","\u4e8c\u6708","\u4e09\u6708","\u56db\u6708","\u4e94\u6708","\u516d\u6708","\u4e03\u6708","\u516b\u6708","\u4e5d\u6708","\u5341\u6708","\u5341\u4e00\u6708","\u5341\u4e8c\u6708"];
DateFormat.us_en_month4=["Janu","Febr","Marc","Apri","May","Juhn","July","Augu","Sept","Octo","Nove","Dece"];
DateFormat.us_en_month3=["Jan","Feb","Mar","Apr","May","Juh","Jul","Aug","Sep","Oct","Nov","Dec"];
DateFormat.us_en_month2=["01","02","03","04","05","06","07","08","09","10","11","12"];
DateFormat.zh_cn_week=["\u661f\u671f\u65e5","\u661f\u671f\u4e00","\u661f\u671f\u4e8c","\u661f\u671f\u4e09","\u661f\u671f\u56db","\u661f\u671f\u4e94","\u661f\u671f\u516d"];
DateFormat.zh_cn_am="\u4e0b\u5348";
DateFormat.zh_cn_pm="\u4e0a\u5348"; 
DateFormat.language=(navigator.userLanguage==undefined?navigator.language:navigator.userLanguage).replace("-","_").toLowerCase();
DateFormat.prototype.format=function(date){
    var year4=date.getFullYear();
    var year2=year4.toString().substring(2);
    var pattern=this.pattern;
    pattern=pattern.replace(/yyyy/,year4);
    pattern=pattern.replace(/yy/,year2);
    var month=date.getMonth();
    pattern=pattern.replace(/MMMM/,eval("DateFormat."+DateFormat.language+"_month4[month]"));
    pattern=pattern.replace(/MMM/,eval("DateFormat."+DateFormat.language+"_month3[month]"));
    pattern=pattern.replace(/MM/,eval("DateFormat."+DateFormat.language+"_month2[month]"));
    var dayOfMonth=date.getDate();
    var dayOfMonth2=dayOfMonth;
    var dayOfMonthLength=dayOfMonth.toString().length;
    if(dayOfMonthLength==1){
        dayOfMonth2="0"+dayOfMonth;	
    }
    pattern=pattern.replace(/dd/,dayOfMonth2);
    pattern=pattern.replace(/d/,dayOfMonth);
    var hours=date.getHours();
    var hours2=hours;
    var hoursLength=hours.toString().length;
    if(hoursLength==1){
        hours2="0"+hours;	
    }
    pattern=pattern.replace(/HH/,hours2);
    pattern=pattern.replace(/H/,hours);
    var minutes=date.getMinutes();
    var minutes2=minutes;
    var minutesLength=minutes.toString().length;
    if(minutesLength==1){
        minutes2="0"+minutes;	
    }
    pattern=pattern.replace(/mm/,minutes2);
    pattern=pattern.replace(/m/,minutes);
    var seconds=date.getSeconds();
    var seconds2=seconds;
    var secondsLength=seconds.toString().length;
    if(secondsLength==1){
        seconds2="0"+seconds;	
    }
    pattern=pattern.replace(/ss/,seconds2);
    pattern=pattern.replace(/s/,seconds);
    var milliSeconds=date.getMilliseconds();
    pattern=pattern.replace(/S+/,milliSeconds);
    var day=date.getDay();
    pattern=pattern.replace(/E+/,eval("DateFormat."+DateFormat.language+"_week[day]"));
    if(hours>12){
        pattern=pattern.replace(/a+/,eval("DateFormat."+DateFormat.language+"_am"));	
    }else{
        pattern=pattern.replace(/a+/,eval("DateFormat."+DateFormat.language+"_pm"));  
    }
    var kHours=hours;
    if(kHours==0){
        kHours=24;	
    }
    var kHours2=kHours;
    var kHoursLength=kHours.toString().length;
    if(kHoursLength==1){
        kHours2="0"+kHours;	
    }
    pattern=pattern.replace(/kk/,kHours2);
    pattern=pattern.replace(/k/,kHours);
    var KHours=hours;
    if(hours>11){
        KHours=hours-12;	
    }
    var KHours2=KHours;
    var KHoursLength=KHours.toString().length;
    if(KHoursLength==1){
        KHours2="0"+KHours;	
    }
    pattern=pattern.replace(/KK/,KHours2);
    pattern=pattern.replace(/K/,KHours);
    var hHours=KHours;
    if(hHours==0){
        hHours=12;	
    }
    var hHours2=hHours;
    var hHoursLength=hHours.toString().length;
    if(KHoursLength==1){
        hHours2="0"+hHours;	
    }
    pattern=pattern.replace(/hh/,hHours2);
    pattern=pattern.replace(/h/,hHours);
    return pattern;

};
 function DecimalFormat(){
     this.jsjava_class="jsjava.text.DecimalFormat";
 }
 DecimalFormat.prototype=new NumberFormat();
 DecimalFormat.prototype.constructor=DecimalFormat;
 DecimalFormat.SPECIAL_CHARS=["0",".","-",",","E","%","\u00A4","\u2030"];
 DecimalFormat.prototype.applyPattern=function(pattern){
 	 if(pattern==undefined){
 	 	pattern="";
 	 }
 	 function contains(arr,char){
 	 	for(var i=0;i<arr.length;i++){
 	 		if(arr[i]==char){
 	 			return true;
 	 		}
 	 	}
 	 	return false;
 	 }
 	 for(var i=0;i<pattern.length;i++){
 	 	if(!contains(DecimalFormat.SPECIAL_CHARS,pattern.charAt(i))){
 	 		throw new IllegalArgumentException(IllegalArgumentException.ERROR,"Malformed pattern "+pattern);
 	 	}
 	 } 
     this.pattern=pattern;

};
function DefaultMutableTreeNode(userObject,allowsChildren){
	this.jsjava_class="jsjavax.swing.tree.DefaultMutableTreeNode";
	this.parent = null;
	this._children = null;
	this.allowsChildren = allowsChildren;
	if(allowsChildren==undefined){
		this.allowsChildren = false;
	}
	this.userObject = userObject;
	this.children=function(){
	    if (this._children == null) {
		    return new EMPTY_ENUMERATION();
		} else {
		    return this._children.elements();
		}	
	};
	this.getLeafCount=function(){
		var count = 0;
		var node;
		var enumer = new BreadthFirstEnumeration(this); // order matters not
		while (enumer.hasMoreElements()) {
		    node = enumer.nextElement();
		    if (node.isLeaf()) {
				count++;
		    }
		}
		if (count < 1) {
		    throw new Error("tree has zero leaves");
		}
		return count;
	};
	this.breadthFirstEnumeration=function(){
		return new BreadthFirstEnumeration(this);
	};
	this.getDepth=function(){
		var	last = null;
		var	enumer = new BreadthFirstEnumeration(this);	
		while (enumer.hasMoreElements()) {
		    last = enumer.nextElement();
		}	
		if (last == null) {
		    throw new Error ("nodes should be null");
		}	
		return last.getLevel() - this.getLevel();
	};
	this.pathFromAncestorEnumeration=function(ancestor){
		return new PathBetweenNodesEnumeration(ancestor, this);
	};
	this.postorderEnumeration=function(){
		return new PostorderEnumeration(this);
    };
	this.preorderEnumeration=function(){
		return new PreorderEnumeration(this);
	};
	function EMPTY_ENUMERATION(){
	}	
	EMPTY_ENUMERATION.prototype=new Enumeration();
	EMPTY_ENUMERATION.prototype.constructor=EMPTY_ENUMERATION;
	EMPTY_ENUMERATION.prototype.hasMoreElements=function(){
	    return false;
	};
	EMPTY_ENUMERATION.prototype.nextElement=function(){
		throw new NoSuchElementException(NoSuchMethodException.ERROR,"No more elements");
	};
	function BreadthFirstEnumeration(rootNode){
    	var v = new Vector(1);
	    v.addElement(rootNode);	// PENDING: don't really need a vector
	    this.queue = new Queue();
	    this.queue.enqueue(v.elements());
    }
    BreadthFirstEnumeration.prototype=new Enumeration();
    BreadthFirstEnumeration.prototype.constructor=BreadthFirstEnumeration;
    BreadthFirstEnumeration.prototype.hasMoreElements=function() {
	    return (!this.queue.isEmpty() && this.queue.firstObject().hasMoreElements());
	};
	BreadthFirstEnumeration.prototype.nextElement=function() {
	    var	enumer = this.queue.firstObject();
	    var	node = enumer.nextElement();
	    var	children = node.children();
	    if (!enumer.hasMoreElements()) {
			this.queue.dequeue();
	    }
	    if (children.hasMoreElements()) {
			this.queue.enqueue(children);
	    }
	    return node;
	};
	function PathBetweenNodesEnumeration(ancestor,descendant){
    	if (ancestor == null || descendant == null) {
			throw new IllegalArgumentException(IllegalArgumentException.ERROR,"argument is null");
	    }
	    var current;
	    this.stack = new Stack();
	    this.stack.push(descendant);
	    current = descendant;
	    while (current != ancestor) {
			current = current.getParent();
			if (current == null && descendant != ancestor) {
			    throw new IllegalArgumentException(IllegalArgumentException.ERROR,"node " + ancestor +
					" is not an ancestor of " + descendant);
			}
			this.stack.push(current);
	    }
    }
    PathBetweenNodesEnumeration.prototype=new Enumeration();
    PathBetweenNodesEnumeration.prototype.constructor=PathBetweenNodesEnumeration;
    PathBetweenNodesEnumeration.prototype.hasMoreElements=function(){
    	return this.stack.size() > 0;
    };
    PathBetweenNodesEnumeration.prototype.nextElement=function(){
    	try {
			return this.stack.pop();
	    } catch (e) {
			throw new NoSuchElementException(NoSuchElementException.ERROR,"No more elements");
	    }
    };
    function PostorderEnumeration(rootNode){
    	this.root = rootNode;
	    this.children = this.root.children();
	    this.subtree = new EMPTY_ENUMERATION();
    }
    PostorderEnumeration.prototype.hasMoreElements=function(){
    	return this.root != null;
    };
    PostorderEnumeration.prototype.nextElement=function(){
    	var retval;
	    if (this.subtree.hasMoreElements()) {
			retval = this.subtree.nextElement();
	    } else if (this.children.hasMoreElements()) {
			this.subtree = new PostorderEnumeration(
					this.children.nextElement());
			retval = this.subtree.nextElement();
	    } else {
			retval = this.root;
			this.root = null;
	    }
	    return retval;
    };
    function PreorderEnumeration(rootNode){
    	var v = new Vector(1);
	    v.addElement(rootNode);	// PENDING: don't really need a vector
	    this.stack = new Stack();
	    this.stack.push(v.elements());
    }
    PreorderEnumeration.prototype=new Enumeration();
    PreorderEnumeration.prototype.constructor=PreorderEnumeration;
    PreorderEnumeration.prototype.hasMoreElements=function(){
    	return (!this.stack.empty() && this.stack.peek().hasMoreElements());
    };
    PreorderEnumeration.prototype.nextElement=function(){
    	var	enumer = this.stack.peek();
	    var	node = enumer.nextElement();
	    var	children = node.children();
	    if (!enumer.hasMoreElements()) {
			this.stack.pop();
	    }
	    if (children.hasMoreElements()) {
			this.stack.push(children);
	    }
	    return node;
    };
  	function Queue(){
  		var head;	// null if empty
	    var tail;
  		function QNode(object, next) {
		    this.object = object;
		    this.next = next;
		}
		this.enqueue=function(anObject) {
			if (head == null) {
			    head = tail = new QNode(anObject, null);
			} else {
			    tail.next = new QNode(anObject, null);
			    tail = tail.next;
			}
	    };
	    this.dequeue=function() {
			if (head == null) {
			    throw new NoSuchElementException(NoSuchElementException.ERROR,"No more elements");
			}
			var retval = head.object;
			var oldHead = head;
			head = head.next;
			if (head == null) {
			    tail = null;
			} else {
			    oldHead.next = null;
			}
			return retval;
	    };
	    this.firstObject=function() {
			if (head == null) {
			    throw new NoSuchElementException(NoSuchElementException.ERROR,"No more elements");
			}	
			return head.object;
	    };
	    this.isEmpty=function() {
			return head == null;
	    };
  	}
}
DefaultMutableTreeNode.prototype=new MutableTreeNode();
DefaultMutableTreeNode.prototype.constructor=DefaultMutableTreeNode;
DefaultMutableTreeNode.prototype.add=function(newChild){
    if(newChild != null && newChild.getParent() == this)
	    this.insert(newChild, this.getChildCount() - 1);
	else
	    this.insert(newChild, this.getChildCount());
};
DefaultMutableTreeNode.prototype.clone=function(){
    return null;
};
DefaultMutableTreeNode.prototype.depthFirstEnumeration=function(){
    return postorderEnumeration();
};
DefaultMutableTreeNode.prototype.getAllowsChildren=function(aChild){
    return this.allowsChildren;
};
DefaultMutableTreeNode.prototype.getChildAfter=function(aChild){
    if (aChild == null) {
	    throw new IllegalArgumentException(IllegalArgumentException.ERROR,"argument is null");
	}
	var index = this.getIndex(aChild);		// linear search
	if (index == -1) {
	    throw new IllegalArgumentException(IllegalArgumentException.ERROR,"node is not a child");
	}
	if (index < this.getChildCount() - 1) {
	    return this.getChildAt(index + 1);
	} else {
	    return null;
	}
};
DefaultMutableTreeNode.prototype.getChildAt=function(index){
    if (this._children == null) {
	    throw new ArrayIndexOutOfBoundsException(ArrayIndexOutOfBoundsException.ERROR,"node has no children");
	}
	return this._children.elementAt(index);
};
DefaultMutableTreeNode.prototype.getChildBefore=function(aChild){
    if (aChild == null) {
	    throw new IllegalArgumentException(IllegalArgumentException.ERROR,"argument is null");
	}
	var index = this.getIndex(aChild);		// linear search
	if (index == -1) {
	    throw new IllegalArgumentException(IllegalArgumentException.ERROR,"argument is not a child");
	}
	if (index > 0) {
	    return this.getChildAt(index - 1);
	} else {
	    return null;
	}
};
DefaultMutableTreeNode.prototype.getChildCount=function(){
    if (this._children == null) {
	    return 0;
	} else {
	    return this._children.size();
	}
};
DefaultMutableTreeNode.prototype.getFirstChild=function(){
    if (getChildCount() == 0) {
	    throw new NoSuchElementException(NoSuchElementException.ERROR,"node has no children");
	}
	return this.getChildAt(0);
};
DefaultMutableTreeNode.prototype.getFirstLeaf=function(){
    var node = this;
	while (!node.isLeaf()) {
	    node = node.getFirstChild();
	}
	return node;
};
DefaultMutableTreeNode.prototype.getIndex=function(aChild){
    if (aChild == null) {
	    throw new IllegalArgumentException(IllegalArgumentException.ERROR,"argument is null");
	}
	if (!this.isNodeChild(aChild)) {
	    return -1;
	}
	return this._children.indexOf(aChild)
};
DefaultMutableTreeNode.prototype.getLastChild=function(){
    if (getChildCount() == 0) {
	    throw new NoSuchElementException(NoSuchElementException.ERROR,"node has no children");
	}
	return this.getChildAt(this.getChildCount()-1);
};
DefaultMutableTreeNode.prototype.getLastLeaf=function(){
    var node = this;
	while (!node.isLeaf()) {
	    node = node.getLastChild();
	}
	return node;
};
DefaultMutableTreeNode.prototype.getLevel=function(){
    var ancestor;
	var levels = 0;
	ancestor = this;
	while((ancestor = ancestor.getParent()) != null){
	    levels++;
	}
	return levels;
};
DefaultMutableTreeNode.prototype.getNextLeaf=function(){
    var nextSibling;
	var myParent = this.getParent();
	if (myParent == null)
	    return null;
	nextSibling = this.getNextSibling();	// linear search
	if (nextSibling != null)
	    return nextSibling.getFirstLeaf();
	return myParent.getNextLeaf();
};
DefaultMutableTreeNode.prototype.getNextNode=function(){
    if (this.etChildCount() == 0) {
	    // No children, so look for nextSibling
	    var nextSibling = this.getNextSibling();
	    if (nextSibling == null) {
			var aNode = this.getParent();
			do {
			    if (aNode == null) {
					return null;
			    }
			    nextSibling = aNode.getNextSibling();
			    if (nextSibling != null) {
					return nextSibling;
			    }
			    aNode = aNode.getParent();
			} while(true);
	    } else {
			return nextSibling;
	    }
	} else {
	    return this.getChildAt(0);
	}
};
DefaultMutableTreeNode.prototype.getNextSibling=function(){
    var retval;
	var myParent = this.getParent();
	if (myParent == null) {
	    retval = null;
	} else {
	    retval = myParent.getChildAfter(this);	// linear search
	}
	if (retval != null && !this.isNodeSibling(retval)) {
	    throw new Error("child of parent is not a sibling");
	}
	return retval;
};
DefaultMutableTreeNode.prototype.getParent=function(){
    return this.parent
};
DefaultMutableTreeNode.prototype.getPath=function(){
	return this.getPathToRoot(this, 0)
};
DefaultMutableTreeNode.prototype.getPathToRoot=function(aNode,depth){
    var retNodes;
	/* Check for null, in case someone passed in a null node, or
	   they passed in an element that isn't rooted at root. */
	if(aNode == null) {
	    if(depth == 0)
			return null;
	    else
			retNodes = new Array(depth);
	}
	else {
	    depth++;
	    retNodes = this.getPathToRoot(aNode.getParent(), depth);
	    retNodes[retNodes.length - depth] = aNode;
	}
	return retNodes
};
DefaultMutableTreeNode.prototype.getPreviousLeaf=function(){
    var previousSibling;
	var myParent = this.getParent();
	if (myParent == null)
	    return null;
	previousSibling = this.getPreviousSibling();	// linear search
	if (previousSibling != null)
	    return previousSibling.getLastLeaf();
	return myParent.getPreviousLeaf();
};
DefaultMutableTreeNode.prototype.getPreviousNode=function(){
    var previousSibling;
	var myParent = this.getParent();
	if (myParent == null) {
	    return null;
	}
	previousSibling = this.getPreviousSibling();
	if (previousSibling != null) {
	    if (previousSibling.getChildCount() == 0)
			return previousSibling;
	    else
			return previousSibling.getLastLeaf();
	} else {
	    return myParent;
	}
};
DefaultMutableTreeNode.prototype.getPreviousSibling=function(){
    var retval;
	var myParent = this.getParent();
	if (myParent == null) {
	    retval = null;
	} else {
	    retval = myParent.getChildBefore(this);	// linear search
	}
	if (retval != null && !this.isNodeSibling(retval)) {
	    throw new Error("child of parent is not a sibling");
	}
	return retval;
};
DefaultMutableTreeNode.prototype.getRoot=function(){
    var ancestor = this;
	var previous;
	do {
	    previous = ancestor;
	    ancestor = ancestor.getParent();
	} while (ancestor != null);
	return previous;
};
DefaultMutableTreeNode.prototype.getSharedAncestor=function(aNode){
    if (aNode == this) {
	    return this;
	} else if (aNode == null) {
	    return null;
	}
	var	level1, level2, diff;
	var	node1, node2;	
	level1 = this.getLevel();
	level2 = aNode.getLevel();	
	if (level2 > level1) {
	    diff = level2 - level1;
	    node1 = aNode;
	    node2 = this;
	} else {
	    diff = level1 - level2;
	    node1 = this;
	    node2 = aNode;
	}
	// Go up the tree until the nodes are at the same level
	while (diff > 0) {
	    node1 = node1.getParent();
	    diff--;
	}
	// Move up the tree until we find a common ancestor.  Since we know
	// that both nodes are at the same level, we won't cross paths
	// unknowingly (if there is a common ancestor, both nodes hit it in
	// the same iteration).
	do {
	    if (node1 == node2) {
			return node1;
	    }
	    node1 = node1.getParent();
	    node2 = node2.getParent();
	} while (node1 != null);// only need to check one -- they're at the
	// same level so if one is null, the other is
	if (node1 != null || node2 != null) {
	    throw new Error ("nodes should be null");
	}
	return null;
};
DefaultMutableTreeNode.prototype.getSiblingCount=function(){
    var myParent = this.getParent();
	if (myParent == null) {
	    return 1;
	} else {
	    return myParent.getChildCount();
	}
};
DefaultMutableTreeNode.prototype.getUserObject=function(){
    return this.userObject;
};
DefaultMutableTreeNode.prototype.getUserObjectPath=function(){
    var realPath = this.getPath();
	var retPath = new Array(realPath.length);
	for(var counter = 0; counter < realPath.length; counter++)
	    retPath[counter] = realPath[counter].getUserObject();
	return retPath;
};
DefaultMutableTreeNode.prototype.insert=function(newChild,childIndex){
    if (!this.allowsChildren) {
	    throw new IllegalStateException(IllegalStateException.ERROR,"node does not allow children");
	} else if (newChild == null) {
	    throw new IllegalArgumentException(IllegalArgumentException.ERROR,"new child is null");
	} else if (this.isNodeAncestor(newChild)) {
	    throw new IllegalArgumentException(IllegalArgumentException.ERROR,"new child is an ancestor");
	}
    var oldParent = newChild.getParent();
    if (oldParent != null) {
		oldParent.remove(newChild);
    }
    newChild.setParent(this);
    if (this._children == null) {
		this._children = new Vector();
    }
    this._children.insertElementAt(newChild, childIndex);
};
DefaultMutableTreeNode.prototype.isLeaf=function(){
    return (this.getChildCount() == 0);
};
DefaultMutableTreeNode.prototype.isNodeAncestor=function(anotherNode){
    if (anotherNode == null) {
	    return false;
	}
	var ancestor = this;
	do {
	    if (ancestor == anotherNode) {
			return true;
	    }
	} while((ancestor = ancestor.getParent()) != null);
	return false;
};
DefaultMutableTreeNode.prototype.isNodeChild=function(aNode){
    var retval;
	if (aNode == null) {
	    retval = false;
	} else {
	    if (this.getChildCount() == 0) {
			retval = false;
	    } else {
			retval = (aNode.getParent() == this);
	    }
	}
	return retval;
};
DefaultMutableTreeNode.prototype.isNodeDescendant=function(anotherNode){
    if (anotherNode == null)
	    return false;
	return anotherNode.isNodeAncestor(this);
};
DefaultMutableTreeNode.prototype.isNodeRelated=function(aNode){
    return (aNode != null) && (this.getRoot() == aNode.getRoot());
};
DefaultMutableTreeNode.prototype.isNodeSibling=function(anotherNode){
    var retval;
	if (anotherNode == null) {
	    retval = false;
	} else if (anotherNode == this) {
	    retval = true;
	} else {
	    var  myParent = this.getParent();
	    retval = (myParent != null && myParent == anotherNode.getParent());
	    if (retval && !this.getParent().isNodeChild(anotherNode)) {
			throw new Error("sibling has different parent");
	    }
	}
	return retval;
};
DefaultMutableTreeNode.prototype.isRoot=function(){
    return this.getParent() == null;
};
DefaultMutableTreeNode.prototype.remove=function(childIndex){
    var child = this.getChildAt(childIndex);
	this._children.removeElementAt(childIndex);
	child.setParent(null);
};
DefaultMutableTreeNode.prototype.remove=function(aChild){
    if (aChild == null) {
	    throw new IllegalArgumentException(IllegalArgumentException.ERROR,"argument is null");
	}
	if (!this.isNodeChild(aChild)) {
	    throw new IllegalArgumentException(IllegalArgumentException.ERROR,"argument is not a child");
	}
	this.remove(this.getIndex(aChild));	// linear search
};
DefaultMutableTreeNode.prototype.removeAllChildren=function(){
    for (var i = this.getChildCount()-1; i >= 0; i--) {
	    this.remove(i);
	}
};
DefaultMutableTreeNode.prototype.removeFromParent=function(){
    var parent = this.getParent();
	if (parent != null) {
	    parent.remove(this);
	}
};
DefaultMutableTreeNode.prototype.setAllowsChildren=function(allows){
    if (allows != this.llowsChildren) {
	    allowsChildren = allows;
	    if (!allowsChildren) {
			this.removeAllChildren();
	    }
	}
};
DefaultMutableTreeNode.prototype.setParent=function(newParent){
    this.parent = newParent;
};
DefaultMutableTreeNode.prototype.setUserObject=function(userObject){
    this.userObject = userObject;
};
DefaultMutableTreeNode.prototype.toString=function(){
    if (this.userObject == null) {
	    return null;
	} else {
	    return this.userObject.toString();
	}

};
function DegreeTransform(){
	this.jsjava_class="jsorg.eob.math.transform.DegreeTransform";
}
DegreeTransform.toDegree=function(radian){
	if(isNaN(radian)){
		throw new IllegalArgumentException(IllegalArgumentException.ERROR,
				"radian must be a number!");
	}
	return 180*radian/Math.PI;
};
DegreeTransform.toRadian=function(degree){
	if(isNaN(degree)){
		throw new IllegalArgumentException(IllegalArgumentException.ERROR,
				"degree must be a number!");
	}
	return Math.PI*degree/180;

};
function DistributionFactoryImpl(){
	this.jsjava_class="org.apache.commons.math.distribution.DistributionFactoryImpl";	
}
DistributionFactoryImpl.newInstance=function(){
	return new DistributionFactoryImpl();
};
DistributionFactoryImpl.prototype.createBinomialDistribution=function(numberOfTrials,probabilityOfSuccess){
	return new BinomialDistributionImpl(numberOfTrials,
            probabilityOfSuccess);
};
DistributionFactoryImpl.prototype.createChiSquareDistribution=function(degreesOfFreedom){
	return new ChiSquaredDistributionImpl(degreesOfFreedom);
};
DistributionFactoryImpl.prototype.createExponentialDistribution=function(mean){
	return new ExponentialDistributionImpl(mean);
};
DistributionFactoryImpl.prototype.createFDistribution=function(numeratorDegreesOfFreedom,denominatorDegreesOfFreedom){
	return new FDistributionImpl(numeratorDegreesOfFreedom,
            denominatorDegreesOfFreedom);
};
DistributionFactoryImpl.prototype.createGammaDistribution=function(alpha,beta){
	return new GammaDistributionImpl(alpha, beta);
};
DistributionFactoryImpl.prototype.createHypergeometricDistribution=function(populationSize,numberOfSuccesses,sampleSize){
	return new HypergeometricDistributionImpl(populationSize,
            numberOfSuccesses, sampleSize);
};
DistributionFactoryImpl.prototype.createNormalDistribution=function(mean,sd){
	return new NormalDistributionImpl(mean, sd);
};
DistributionFactoryImpl.prototype.createPoissonDistribution=function(lambda){
	return new PoissonDistributionImpl(lambda);
};
DistributionFactoryImpl.prototype.createTDistribution=function(degreesOfFreedom){
	return new TDistributionImpl(degreesOfFreedom);

};
function DocumentUtils(){
	this.jsjava_class="jsorg.eob.document.DocumentUtils";
}
DocumentUtils.getElementsByClassName=function(domObj,tagName,className){
	var elems=new ArrayList();
	var tagElems=domObj.getElementsByTagName(tagName.toUpperCase());
	for(var i=0;i<tagElems.length;i++){
		var tagElem=tagElems[i];
		if(tagElem.className==className){
		    elems.add(tagElem);
		}
	}
	return elems.toArray();
};
DocumentUtils.getFrameWindowObjectByName=function(winObj,frameName){
    var frameObj=eval("winObj."+frameName);
    return frameObj.window;
};
DocumentUtils.getFrameWindowObjectById=function(winObj,frameId){
    var frameTagObj=DocumentUtils.getFrameTagObjectById(winObj,frameId);
    return frameTagObj.contentWindow;
};
DocumentUtils.getFrameTagObjectById=function(winObj,frameId){
	return winObj.document.getElementById(frameId);
};
DocumentUtils.getFrameTagObjectByName=function(winObj,frameName){
	var elems=winObj.document.getElementsByName(frameName);
	return elems[0];
};
DocumentUtils.getTopWindowObjectOfCurrent=function(){
	return window.top;
};
DocumentUtils.getParentWindowObjectOfCurrent=function(){
	return window.parent;
};
DocumentUtils.getOpenerWindowObjectOfCurrent=function(){
    return window.opener;
};
DocumentUtils.getElementRectangle=function(elemObj){
	if(elemObj==undefined){
		return null;
	}
	var rect=null;
	if(BrowserUtils.isIE()){
		var orect=elemObj.getBoundingClientRect();
		var x=orect.left;
		var y=orect.top;
		var width=orect.right-orect.left;
		var height=orect.bottom-orect.top;
		rect=new Rectangle(x,y,width,height);
	}else{
		var orect=document.getBoxObjectFor(elemObj);
		var x=orect.x;
		var y=orect.y;
		var width=orect.width;
		var height=orect.height;
		rect=new Rectangle(x,y,width,height); 
	}
	return rect;
};
DocumentUtils.getOpenerWindowObjectOfCurrent=function(){
    return window.opener;
};
DocumentUtils.isHTMLTextObject=function(elemObj){
	var flag=elemObj==undefined||elemObj==null||elemObj.parentNode==undefined||elemObj.tagName==undefined;	
	if(flag){
		return false;
	}
	var tagName=elemObj.tagName.toUpperCase();
	if(tagName!="TEXTAREA"&&tagName!="INPUT"||tagName=="INPUT"&&elemObj.type.toUpperCase()!="text"){
		return false;
	}	
	return true;

};
function Double(value){
	this.jsjava_class="jsjava.lang.Double";
    this.value=value;
}
Double.MIN=Math.pow(2,-1074);
Double.MAX=(2-Math.pow(2,-52))*Math.pow(2,1023);
Double.MIN_VALUE=Math.pow(2,-1074);
Double.MAX_VALUE=(2-Math.pow(2,-52))*Math.pow(2,1023);
Double.POSITIVE_INFINITY=1.0/0.0;
Double.NEGATIVE_INFINITY=-1.0/0.0;
Double.NaN=0.0/0.0;
Double.checkValid=function(d){
	if(isNaN(d)){
		return false;
	}
	d=parseFloat(d);
    if(d<Double.POSITIVE_INFINITY&&d>Double.NEGATIVE_INFINITY){
        return true;
    }
    return false;
};
Double.isInfinite=function(d){
    return (d==Double.POSITIVE_INFINITY||d==Double.NEGATIVE_INFINITY);
};
Double.parseDouble=function(str){
    if(isNaN(str)){
		throw new NumberFormatException(NumberFormatException.NOT_NUMBER,"Not a number Exception!");
	}
    return parseFloat(str);
};
Double.prototype.compareTo=function(b){
    if(b==undefined){
        return -1; 
    }
    if(this.value>b.value){
        return 1; 
    }else if(this.value==b.value){
        return 0; 
    }else{
        return -1;  
    }
};
Double.prototype.isInfinite=function(){
    return (this.value==Double.POSITIVE_INFINITY||this.value==Double.NEGATIVE_INFINITY);
};
Double.prototype.DoubleValue=function(){
    return this.value;
};
Double.prototype.toString=function(){
    return this.value; 
};
Double.prototype.equals=function(o){
    if(o==undefined){
        return false; 
    }
    if(o.jsjava_class&&o.jsjava_class=="jsjava.lang.Double"){
        return this.value==o.value; 
    }
    return false;
};
Double.isNaN=function(v) {
	return (v!= v);

};
function DoubleValidator(){
	this.jsjava_class="jsorg.eob.validator.DoubleValidator";
}
DoubleValidator.validate=function(str){
	return ValidatorUtils.isDouble(str);

};
function EmailValidator(){
	this.jsjava_class="jsorg.eob.validator.EmailValidator";
}
EmailValidator.validate=function(str,pattern){
	return ValidatorUtils.isEmail(str,pattern);

};
EmptyStackException.prototype=new Error();
EmptyStackException.prototype.constructor=EmptyStackException;
EmptyStackException.ERROR=0;
function EmptyStackException(code,message){
	this.jsjava_class="jsjava.lang.EmptyStackException";
	this.code=code;
    this.message=message;
    this.name="jsjava.lang.EmptyStackException";

}
function Enumeration(list){
	this.jsjava_class="jsjava.util.Enumeration";
}
Enumeration.CONSTANT_ILLEGAL_INVOCATION="This is an interface method and you should use the concrete method";
Enumeration.prototype.hasMoreElements=function(){
    throw new IllegalStateException(IllegalStateException.ERROR,Enumeration.CONSTANT_ILLEGAL_INVOCATION);
};
Enumeration.prototype.nextElement=function(){
    throw new IllegalStateException(IllegalStateException.ERROR,Enumeration.CONSTANT_ILLEGAL_INVOCATION);

};
function Erf(){
	this.jsjava_class="org.apache.commons.math.special.Erf";
}
Erf.erf=function(x){
	var ret = Gamma.regularizedGammaP2(0.5, x * x, 1.0e-15, 10000);
    if (x < 0) {
        ret = -ret;
    }
    return ret;

};
function EventListener(){
	this.jsjava_class="jsjava.util.EventListener";

}
function EventObject(source){
	this.jsjava_class="jsjava.util.EventObject";
}
EventObject.prototype.getSource=function(){
	return this.source;

};
function EventUtils(){
	this.jsjava_class="jsorg.eob.event.EventUtils";
}
EventUtils.addDomEvent=function(domObj, eventName, funcName, isBroadcast){
	if(eventName.indexOf("on")==0){
		eventName=eventName.substring(2);
	}
	if (domObj.addEventListener) {
		domObj.addEventListener(eventName, funcName, isBroadcast);
		return true;
	} else if (domObj.attachEvent) {
		return domObj.attachEvent("on" + eventName, funcName);
	}
	else {
		element['on' + eventName] = funcName;
	}	
};
EventUtils.removeDomEvent=function(domObj, eventName, funcName,isBroadcast){
	if(eventName.indexOf("on")==0){
		eventName=eventName.substring(2);
	}
	if (domObj.removeEventListener) {
		domObj.removeEventListener(eventName, funcName,isBroadcast);
		return true;
	} else if (domObj.detachEvent) {
		return domObj.detachEvent("on" + eventName, funcName);
	}
	else {
		element['on' + eventName] = null;
	}	
};
EventUtils.isLeftClick=function(event){
	return event.which==1||event.button==0;
};
EventUtils.getEventSource=function(event){
	return event.srcElement||event.target;

};
Exception.prototype=new Error();
Exception.prototype.constructor=Exception;
function Exception(code,message){
	this.jsjava_class="jsjava.lang.Exception";
	this.code=code;
    this.message=message;
    this.name="jsjava.lang.Exception";

}
function ExclusiveGroupTrigger(){
    this.jsjava_class="jsorg.eob.component.trigger.ExclusiveGroupTrigger";
}
ExclusiveGroupTrigger.prototype.setExclusiveGroupForm=function(formName){
	this.formName=formName;
};
ExclusiveGroupTrigger.prototype.getExclusiveGroupForm=function(){
    return this.formName;	
};
ExclusiveGroupTrigger.prototype.setExclusiveGroupPositiveCheckbox=function(pc){
	this.pc=pc;
};
ExclusiveGroupTrigger.prototype.getExclusiveGroupPositiveCheckbox=function(){
    return this.pc;	
};
ExclusiveGroupTrigger.prototype.setExclusiveGroupMinusCheckbox=function(mc){
	this.mc=mc;
};
ExclusiveGroupTrigger.prototype.getExclusiveGroupMinusCheckbox=function(){
    return this.mc;	
};
ExclusiveGroupTrigger.prototype.setExclusiveGroupPositiveAllCheckbox=function(pac){
	this.pac=pac;
};
ExclusiveGroupTrigger.prototype.getExclusiveGroupPositiveAllCheckbox=function(){
    return this.pac;	
};
ExclusiveGroupTrigger.prototype.setExclusiveGroupMinusAllCheckbox=function(mac){
	this.mac=mac;
};
ExclusiveGroupTrigger.prototype.getExclusiveGroupMinusAllCheckbox=function(){
    return this.mac;	
};
ExclusiveGroupTrigger.prototype.setExclusiveGroupEventSource=function(eventSource){
	this.eventSource=eventSource;
};
ExclusiveGroupTrigger.prototype.getExclusiveGroupEventSource=function(){
    return this.eventSource;	
};
ExclusiveGroupTrigger.prototype.exclusiveGrouptrigger=function(command){
    if(command=="positive"){
    	this.positiveEventTrigger();
    }else if(command=="minus"){
    	this.minusEventTrigger();
    }else if(command=="positiveAll"){
    	this.positiveAllEventTrigger();
    }else if(command=="minusAll"){
    	this.minusAllEventTrigger();
    }	
};
ExclusiveGroupTrigger.prototype.positiveEventTrigger=function(){
	    var eventSource=this.getEventSource();
	    var formName=this.getForm();
	    var pcName=this.getPositiveCheckbox();
	    var mcName=this.getMinusCheckbox();
	    var pacName=this.getPositiveAllCheckbox();
	    var macName=this.getMinusAllCheckbox();
	    var formObj=document.forms(formName);
	    var pcObj=formObj.elements(pcName);
	    var mcObj=formObj.elements(mcName);
	    var pacObj=formObj.elements(pacName);
	    var macObj=formObj.elements(macName);
	    if(eventSource.checked==false){
            pacObj.checked=false;
        }else{
            var isAllSelected=true;
            for(var i=0;i<pcObj.length;i++){
                if(!pcObj[i].checked){
                    isAllSelected=false;
                }
            }
            if(isAllSelected){
                pacObj.checked=true;
            }
        }
        macObj.checked=false;
        var value=eventSource.value;
        if(mcObj.length){
            for(var i=0;i<mcObj.length;i++){
                if(mcObj[i].value==value){
                    mcObj[i].checked=false;
                }
            }
        }else{
            mcObj.checked=false;
        }
        return false;
};
ExclusiveGroupTrigger.prototype.minusEventTrigger=function(){
	    var eventSource=trigger.getEventSource();
	    var formName=this.getForm();
	    var pcName=this.getPositiveCheckbox();
	    var mcName=this.getMinusCheckbox();
	    var pacName=this.getPositiveAllCheckbox();
	    var macName=this.getMinusAllCheckbox();
	    var formObj=document.forms(formName);
	    var pcObj=formObj.elements(pcName);
	    var mcObj=formObj.elements(mcName);
	    var pacObj=formObj.elements(pacName);
	    var macObj=formObj.elements(macName);
	    if(eventSource.checked==false){
            macObj.checked=false;
        }else{
            var isAllSelected=true;
            for(var i=0;i<mcObj.length;i++){
                if(!mcObj[i].checked){
                    isAllSelected=false;
                }
            }
            if(isAllSelected){
                macObj.checked=true;
            }
        }
        pacObj.checked=false;
        var value=eventSource.value;
        if(formObj.allow.length){
            for(var i=0;i<pcObj.length;i++){
                if(pcObj[i].value==value){
                    pcObj[i].checked=false;
                }
            }
        }else{
            pcObj.checked=false;
        }
        return false;
};
ExclusiveGroupTrigger.prototype.positiveAllEventTrigger=function(){
	    var eventSource=this.getEventSource();
	    if(eventSource.checked){
            this.changeAllPositiveState(true);
        }else{
            this.changeAllPositiveState(false);
        }
        return false;
};
ExclusiveGroupTrigger.prototype.minusAllEventTrigger=function(){
	    var eventSource=this.getEventSource();
	    if(eventSource.checked){
            this.changeAllMinusState(true);
        }else{
            this.changeAllMinusState(false);
        }
        return false;
};
ExclusiveGroupTrigger.prototype.changeAllPositiveState=function(isChecked){
	var eventSource=this.getEventSource();
	    var formName=this.getForm();
	    var pcName=this.getPositiveCheckbox();
	    var mcName=this.getMinusCheckbox();
	    var pacName=this.getPositiveAllCheckbox();
	    var macName=this.getMinusAllCheckbox();
	    var formObj=document.forms(formName);
	    var pcObj=formObj.elements(pcName);
	    var mcObj=formObj.elements(mcName);
	    var pacObj=formObj.elements(pacName);
	    var macObj=formObj.elements(macName);
	if(isChecked){
        macObj.checked=false;
        if(pcObj.length){
            for(var i=0;i<pcObj.length;i++){
                pcObj[i].checked=true;
                mcObj[i].checked=false;
            }
        }else{
            pcObj.checked=true;
            mcObj.checked=false;
        }
    }else{
        pacObj.checked=false;
    }
};
ExclusiveGroupTrigger.prototype.changeAllMinusState=function(isChecked){
	var eventSource=this.getEventSource();
	    var formName=this.getForm();
	    var pcName=this.getPositiveCheckbox();
	    var mcName=this.getMinusCheckbox();
	    var pacName=this.getPositiveAllCheckbox();
	    var macName=this.getMinusAllCheckbox();
	    var formObj=document.forms(formName);
	    var pcObj=formObj.elements(pcName);
	    var mcObj=formObj.elements(mcName);
	    var pacObj=formObj.elements(pacName);
	    var macObj=formObj.elements(macName);
	    if(isChecked){
        pacObj.checked=false;
        if(mcObj.length){
            for(var i=0;i<mcObj.length;i++){
                mcObj[i].checked=true;
                pcObj[i].checked=false;
            }
        }else{
            pcObj.checked=false;
            mcObj.checked=true;
        }
    }else{
        macObj.checked=false;
    }

};
function ExponentialDistributionImpl(mean){
	this.jsjava_class="org.apache.commons.math.distribution.ExponentialDistributionImpl";	
	if (mean <= 0.0) {
        throw new IllegalArgumentException(IllegalArgumentException.ERROR,"mean must be positive.");
    }
    this.mean = mean;
}
ExponentialDistributionImpl.prototype.cumulativeProbability=function(x){
	var ret;
    if (x <= 0.0) {
        ret = 0.0;
    } else {
        ret = 1.0 - Math.exp(-x / this.getMean());
    }
    return ret;
};
ExponentialDistributionImpl.prototype.getDomainLowerBound=function(p){
	return 0;
};
ExponentialDistributionImpl.prototype.getDomainUpperBound=function(p){
	// NOTE: exponential is skewed to the left
    // NOTE: therefore, P(X < &mu;) > .5
    if (p < .5) {
        // use mean
        return this.getMean();
    } else {
        // use max
        return Double.MAX_VALUE;
    }
};
ExponentialDistributionImpl.prototype.getInitialDomain=function(p){
	// Exponential is skewed to the left, therefore, P(X < &mu;) > .5
    if (p < .5) {
        // use 1/2 mean
        return this.getMean() * .5;
    } else {
        // use mean
        return this.getMean();
    }
};
ExponentialDistributionImpl.prototype.getMean=function(){
	return this.mean;
};
ExponentialDistributionImpl.prototype.inverseCumulativeProbability=function(p){
	var ret;
    if (p < 0.0 || p > 1.0) {
        throw new IllegalArgumentException
            (IllegalArgumentException.ERROR,"probability argument must be between 0 and 1 (inclusive)");
    } else if (p == 1.0) {
        ret = Double.POSITIVE_INFINITY;
    } else {
        ret = -this.getMean() * Math.log(1.0 - p);
    }
    return ret;
};
ExponentialDistributionImpl.prototype.setMean=function(mean){
	if (mean <= 0.0) {
        throw new IllegalArgumentException(IllegalArgumentException.ERROR,"mean must be positive.");
    }
    this.mean = mean;

};
function FDistributionImpl(numeratorDegreesOfFreedom,denominatorDegreesOfFreedom){
	this.jsjava_class="org.apache.commons.math.distribution.FDistributionImpl";
	if (numeratorDegreesOfFreedom <= 0.0) {
        throw new IllegalArgumentException(
            IllegalArgumentException.ERROR,"degrees of freedom must be positive.");
    }
    this.numeratorDegreesOfFreedom = numeratorDegreesOfFreedom;	
    if (denominatorDegreesOfFreedom <= 0.0) {
        throw new IllegalArgumentException(
            IllegalArgumentException.ERROR,"degrees of freedom must be positive.");
    }
    this.denominatorDegreesOfFreedom = denominatorDegreesOfFreedom;
}
FDistributionImpl.prototype.cumulativeProbability=function(x){
	var ret;
    if (x <= 0.0) {
        ret = 0.0;
    } else {
        var n = this.getNumeratorDegreesOfFreedom();
        var m = this.getDenominatorDegreesOfFreedom();
        ret = Beta.regularizedBeta((n * x) / (m + n * x),
            0.5 * n,
            0.5 * m);
    }
    return ret;
};
FDistributionImpl.prototype.getDenominatorDegreesOfFreedom=function(){
	return this.denominatorDegreesOfFreedom;
};
FDistributionImpl.prototype.getDomainLowerBound=function(p){
	return 0.0;
};
FDistributionImpl.prototype.getDomainUpperBound=function(p){
	return Double.MAX_VALUE;
};
FDistributionImpl.prototype.getInitialDomain=function(p){
	return this.getDenominatorDegreesOfFreedom() /
            (this.getDenominatorDegreesOfFreedom() - 2.0);
};
FDistributionImpl.prototype.getNumeratorDegreesOfFreedom=function(){
	return this.numeratorDegreesOfFreedom;
};
FDistributionImpl.prototype.setDenominatorDegreesOfFreedom=function(degreesOfFreedom){
	if (degreesOfFreedom <= 0.0) {
        throw new IllegalArgumentException(
            IllegalArgumentException.ERROR,"degrees of freedom must be positive.");
    }
    this.denominatorDegreesOfFreedom = degreesOfFreedom;
};
FDistributionImpl.prototype.setNumeratorDegreesOfFreedom=function(degreesOfFreedom){
	if (degreesOfFreedom <= 0.0) {
        throw new IllegalArgumentException(
            IllegalArgumentException.ERROR,"degrees of freedom must be positive.");
    }
    this.numeratorDegreesOfFreedom = degreesOfFreedom;

};
function Float(value){
	this.jsjava_class="jsjava.lang.Float";
    this.value=value;
}
Float.MIN=Math.pow(2,-149);
Float.MAX=(2-Math.pow(2,-23))*Math.pow(2,127);
Float.MIN_VALUE=Math.pow(2,-149);
Float.MAX_VALUE=(2-Math.pow(2,-23))*Math.pow(2,127);
Float.POSITIVE_INFINITY=1.0/0.0;
Float.NEGATIVE_INFINITY=-1.0/0.0;
Float.checkValid=function(f){
	if(isNaN(f)){
		return false;
	}
	f=parseFloat(f);
    if(f<Float.POSITIVE_INFINITY&&f>Float.NEGATIVE_INFINITY){
    	return true;
	}
	return false;
};
Float.isInfinite=function(f){
    return (f==Float.POSITIVE_INFINITY||f==Float.NEGATIVE_INFINITY);
};
Float.parseFloat=function(str){
    if(isNaN(str)){
		throw new NumberFormatException(NumberFormatException.NOT_NUMBER,"Not a number Exception!");
	}
    return parseFloat(str);
};
Float.prototype.compareTo=function(b){
    if(b==undefined){
        return -1; 
    }
    if(this.value>b.value){
        return 1; 
    }else if(this.value==b.value){
        return 0; 
    }else{
        return -1;  
    }
};
Float.prototype.floatValue=function(){
    return this.value;
};
Float.prototype.isInfinite=function(){
    return (this.value==Float.POSITIVE_INFINITY||this.value==Float.NEGATIVE_INFINITY);
};
Float.prototype.toString=function(){
    return this.value; 
};
Float.prototype.equals=function(o){
    if(o==undefined){
        return false; 
    }
    if(o.jsjava_class&&o.jsjava_class=="jsjava.lang.Float"){
        return this.value==o.value; 
    }
    return false;

};
function FloatValidator(){
	this.jsjava_class="jsorg.eob.validator.FloatValidator";
}
FloatValidator.validate=function(str){
	return ValidatorUtils.isFloat(str);

};
function Font(name,style,size){
	this.jsjava_class="jsjava.awt.Font";
    this.name=name;
    this.style=style;
    this.size=size;
}
Font.PLAIN=0;
Font.BOLD=1;
Font.ITALIC=2;
Font.prototype.getFamily=function(){
    return this.name;	
};
Font.prototype.getFontName=function(){
    return this.name;	
};
Font.prototype.getStyle=function(){
    return this.style;	
};
Font.prototype.getSize=function(){
    return this.size;	

};
function Fraction(num,den){
	this.jsjava_class="org.apache.commons.math.fraction.Fraction";
	if (den == 0) {
        throw new ArithmeticException(ArithmeticException.ERROR,"The denominator must not be zero");
    }
    if (den < 0) {
        if (num == Integer.MIN_VALUE ||
                den == Integer.MIN_VALUE) {
            throw new ArithmeticException(ArithmeticException.ERROR,"overflow: can't negate");
        }
        num = -num;
        den = -den;
    }
    this.numerator = num;
    this.denominator = den;
    var d = MathUtils.gcd(this.numerator, this.denominator);
    if (d > 1) {
        this.numerator /= d;
        this.denominator /= d;
    }
    // move sign to numerator.
    if (this.denominator < 0) {
        this.numerator *= -1;
        this.denominator *= -1;
    }
}
Fraction.ONE = new Fraction(1, 1);
Fraction.ZERO = new Fraction(0, 1);
Fraction.prototype.abs=function(){
	var ret;
    if (this.numerator >= 0) {
        ret = this;
    } else {
        ret = this.negate();
    }
    return ret;
};
Fraction.prototype.compareTo=function(o){
	if(!o||!o.jsjava_class||o.jsjava_class!="org.apache.commons.math.fraction.Fraction"){
		return -1;
	}
	var ret = 0;   
    var first = this.doubleValue();
    var second = o.doubleValue();    
    if (first < second) {
        ret = -1;
    } else if (first > second) {
        ret = 1;
    }
    return ret;
};
Fraction.prototype.doubleValue=function(){
	return this.numerator / this.denominator;
};
Fraction.prototype.equals=function(o){
	if(!o||!o.jsjava_class||o.jsjava_class!="org.apache.commons.math.fraction.Fraction"){
		return false;
	}
	if(this.numerator==o.numerator&&this.denominator==o.denominator){
		return true;
	}
	return false;
};
Fraction.prototype.floatValue=function(){
	return this.doubleValue();
};
Fraction.prototype.getDenominator=function(){
	return this.denominator;
};
Fraction.prototype.getNumerator=function(){
	return this.numerator;
};
Fraction.prototype.intValue=function(){
	return Math.round(this.doubleValue());
};
Fraction.prototype.longValue=function(){
	return Math.round(this.doubleValue());
};
Fraction.prototype.negate=function(){
	if (this.numerator==Integer.MIN_VALUE) {
        throw new ArithmeticException(ArithmeticException.ERROR,"overflow: too large to negate");
    }
    return new Fraction(-this.numerator, this.denominator);
};
Fraction.prototype.reciprocal=function(){
	return new Fraction(this.denominator, this.numerator);
};
Fraction.prototype.add=function(fraction){
	return this.addSub(fraction, true);
};
Fraction.prototype.subtract=function(fraction){
	return this.addSub(fraction, false);
};
Fraction.prototype.addSub=function(fraction,isAdd){
	if (fraction == null) {
        throw new IllegalArgumentException(IllegalArgumentException.ERROR,"The fraction must not be null");
    }
    // zero is identity for addition.
    if (this.numerator == 0) {
        return isAdd ? fraction : fraction.negate();
    }
    if (fraction.numerator == 0) {
        return this;
    }     
    // if denominators are randomly distributed, d1 will be 1 about 61%
    // of the time.
    var d1 = MathUtils.gcd(this.denominator, fraction.denominator);
    if (d1==1) {
        // result is ( (u*v' +/- u'v) / u'v')
        var uvp = this.numerator*fraction.denominator;
        var upv = fraction.numerator*this.denominator;
        return new Fraction
            (isAdd ? (uvp+upv) : (uvp-upv),this.denominator*fraction.denominator);
    }
    // the quantity 't' requires 65 bits of precision; see knuth 4.5.1
    // exercise 7.  we're going to use a BigInteger.
    // t = u(v'/d1) +/- v(u'/d1)
    var uvp = this.numerator*fraction.denominator/d1;
    var upv = fraction.numerator*this.denominator/d1;
    var t = isAdd ? (uvp+upv) : (uvp-upv);
    // but d2 doesn't need extra precision because
    // d2 = gcd(t,d1) = gcd(t mod d1, d1)
    var tmodd1 = t%d1;
    var d2 = (tmodd1==0)?d1:MathUtils.gcd(tmodd1, d1);
    // result is (t/d2) / (u'/d1)(v'/d2)
    var w = t/d2;
    return new Fraction (w, this.denominator/d1*fraction.denominator/d2);
};
Fraction.prototype.multiply=function(fraction){
	if (fraction == null) {
        throw new IllegalArgumentException(IllegalArgumentException.ERROR,"The fraction must not be null");
    }
    if (this.numerator == 0 || fraction.numerator == 0) {
        return Fraction.ZERO;
    }
    // knuth 4.5.1
    // make sure we don't overflow unless the result *must* overflow.
    var d1 = MathUtils.gcd(this.numerator, fraction.denominator);
    var d2 = MathUtils.gcd(fraction.numerator, this.denominator);
    return Fraction.getReducedFraction
    (this.numerator/d1*fraction.numerator/d2,
            this.denominator/d2*fraction.denominator/d1);
};
Fraction.prototype.divide=function(fraction){
	if (fraction==undefined||fraction == null) {
        throw new IllegalArgumentException(IllegalArgumentException.ERROR,"The fraction must not be null");
    }
    if (fraction.numerator == 0) {
        throw new ArithmeticException(IllegalArgumentException.ERROR,"The fraction to divide by must not be zero");
    }
    return this.multiply(fraction.reciprocal());
};
Fraction.getReducedFraction=function(numerator,denominator){
	if (denominator == 0) {
        throw new ArithmeticException(ArithmeticException.ERROR,"The denominator must not be zero");
    }
    if (numerator==0) {
        return Fraction.ZERO; // normalize zero.
    }
    // allow 2^k/-2^31 as a valid fraction (where k>0)
    if (denominator==Integer.MIN_VALUE && (numerator&1)==0) {
        numerator/=2; denominator/=2;
    }
    if (denominator < 0) {
        if (numerator==Integer.MIN_VALUE ||
                denominator==Integer.MIN_VALUE) {
            throw new ArithmeticException(ArithmeticException.ERROR,"overflow: can't negate");
        }
        numerator = -numerator;
        denominator = -denominator;
    }
    // simplify fraction.
    var gcd = MathUtils.gcd(numerator, denominator);
    numerator /= gcd;
    denominator /= gcd;
    return new Fraction(numerator, denominator);
};
Fraction.prototype.toString=function(){
	return this.numerator+"/"+this.denominator;

};
FunctionEvaluationException.prototype=new Error();
FunctionEvaluationException.prototype.constructor=FunctionEvaluationException;
FunctionEvaluationException.ERROR=0;
function FunctionEvaluationException(code,message){
	this.jsjava_class="org.apache.commons.math.FunctionEvaluationException";
	this.code=code;
    this.message=message;
    this.name="org.apache.commons.math.FunctionEvaluationException";

}
function Gamma(){
	this.jsjava_class="org.apache.commons.math.special.Erf";
}
Gamma.DEFAULT_EPSILON = 10e-9;
Gamma.lanczos =
    [
        0.99999999999999709182,
        57.156235665862923517,
        -59.597960355475491248,
        14.136097974741747174,
        -0.49191381609762019978,
        .33994649984811888699e-4,
        .46523628927048575665e-4,
        -.98374475304879564677e-4,
        .15808870322491248884e-3,
        -.21026444172410488319e-3,
        .21743961811521264320e-3,
        -.16431810653676389022e-3,
        .84418223983852743293e-4,
        -.26190838401581408670e-4,
        .36899182659531622704e-5
    ];
Gamma.HALF_LOG_2_PI = 0.5 * Math.log(2.0 * Math.PI);
Gamma.logGamma=function(x){
	var ret;
    if (Double.isNaN(x) || (x <= 0.0)) {
        ret = Double.NaN;
    } else {
        var g = 607.0 / 128.0;        
        var sum = 0.0;
        for (var i = Gamma.lanczos.length - 1; i > 0; --i) {
        	sum = sum + (Gamma.lanczos[i] / (x + i));
        }
        sum = sum + Gamma.lanczos[0];
        var tmp = x + g + .5;
        ret = ((x + .5) * Math.log(tmp)) - tmp +
            Gamma.HALF_LOG_2_PI + Math.log(sum / x);
    }
    return ret;Gamma.js
};
Gamma.regularizedGammaP=function(a,x){
	return Gamma.regularizedGammaP2(a, x, Gamma.DEFAULT_EPSILON, Integer.MAX_VALUE);
};
Gamma.regularizedGammaP2=function(a,x,epsilon,maxIterations){
	var ret;
    if (Double.isNaN(a) || Double.isNaN(x) || (a <= 0.0) || (x < 0.0)) {
        ret = Double.NaN;
    } else if (x == 0.0) {
        ret = 0.0;
    } else if (a >= 1.0 && x > a) {
        // use regularizedGammaQ because it should converge faster in this
        // case.
        ret = 1.0 - Gamma.regularizedGammaQ2(a, x, epsilon, maxIterations);
    } else {
        // calculate series
        var n = 0.0; // current element index
        var an = 1.0 / a; // n-th element in the series
        var sum = an; // partial sum
        while (Math.abs(an) > epsilon && n < maxIterations) {
            // compute next element in the series
            n = n + 1.0;
            an = an * (x / (a + n));
            // update partial sum
            sum = sum + an;
        }
        if (n >= maxIterations) {
            throw new ConvergenceException(ConvergenceException.ERROR,
                "maximum number of iterations reached");
        } else {
            ret = Math.exp(-x + (a * Math.log(x)) - Gamma.logGamma(a)) * sum;
        }
    }
    return ret;
};
Gamma.regularizedGammaQ=function(a,x){
	return Gamma.regularizedGammaQ2(a, x, Gamma.DEFAULT_EPSILON, Integer.MAX_VALUE);
};
Gamma.regularizedGammaQ2=function(a,x,epsilon,maxIterations){
	function ContinuedFraction(){
	}
	ContinuedFraction.DEFAULT_EPSILON = 10e-9;
	ContinuedFraction.prototype.evaluate=function(x){
		return this.evaluate(x, ContinuedFraction.DEFAULT_EPSILON, Integer.MAX_VALUE);
	};
	ContinuedFraction.prototype.evaluate2=function(x,epsilon){
		return this.evaluate(x, epsilon, Integer.MAX_VALUE);
	};
	ContinuedFraction.prototype.evaluate3=function(x,maxIterations){
		return this.evaluate(x, ContinuedFraction.DEFAULT_EPSILON, maxIterations);
	};
	ContinuedFraction.prototype.evaluate4=function(x,epsilon,maxIterations){
		var p0 = 1.0;
        var p1 = this.getA(0, x);
        var q0 = 0.0;
        var q1 = 1.0;
        var c = p1 / q1;
        var n = 0;
        var relativeError = Double.MAX_VALUE;
        while (n < maxIterations && relativeError > epsilon) {
            ++n;
            var a = this.getA(n, x);
            var b = this.getB(n, x);
            var p2 = a * p1 + b * p0;
            var q2 = a * q1 + b * q0;
            if (Double.isInfinite(p2) || Double.isInfinite(q2)) {
                // need to scale
                if (a != 0.0) {
                    p2 = p1 + (b / a * p0);
                    q2 = q1 + (b / a * q0);
                } else if (b != 0) {
                    p2 = (a / b * p1) + p0;
                    q2 = (a / b * q1) + q0;
                } else {
                    // can not scale an convergent is unbounded.
                    throw new ConvergenceException(ConvergenceException.ERROR,
                        "Continued fraction convergents diverged to +/- " +
                        "infinity.");
                }
            }
            var r = p2 / q2;
            relativeError = Math.abs(r / c - 1.0);
            // prepare for next iteration
            c = p2 / q2;
            p0 = p1;
            p1 = p2;
            q0 = q1;
            q1 = q2;
        }
        if (n >= maxIterations) {
            throw new ConvergenceException(ConvergenceException.ERROR,
                "Continued fraction convergents failed to converge.");
        }
        return c;
	};
	ContinuedFraction.prototype.getA=function(n,x){
		return ((2.0 * n) + 1.0) - a + x;
	};
	ContinuedFraction.prototype.getB=function(n,x){
		return n * (a - n);
	};
	var ret;
    if (Double.isNaN(a) || Double.isNaN(x) || (a <= 0.0) || (x < 0.0)) {
        ret = Double.NaN;
    } else if (x == 0.0) {
        ret = 1.0;
    } else if (x < a || a < 1.0) {
        // use regularizedGammaP because it should converge faster in this
        // case.
        ret = 1.0 - Gamma.regularizedGammaP2(a, x, epsilon, maxIterations);
    } else {
        // create continued fraction
        var cf = new ContinuedFraction();        
        ret = 1.0 / cf.evaluate4(x, epsilon, maxIterations);
        ret = Math.exp(-x + (a * Math.log(x)) - Gamma.logGamma(a)) * ret;
    }    
    return ret;

};
function GammaDistributionImpl(alpha,beta){
	this.jsjava_class="org.apache.commons.math.distribution.GammaDistributionImpl";		
	if (alpha <= 0.0) {
        throw new IllegalArgumentException(IllegalArgumentException.ERROR,"alpha must be positive");
    }
    this.alpha = alpha;
    if (beta <= 0.0) {
        throw new IllegalArgumentException(IllegalArgumentException.ERROR,"beta must be positive");
    }
    this.beta = beta;
}
GammaDistributionImpl.prototype.cumulativeProbability=function(x){
	var ret;
    if (x <= 0.0) {
        ret = 0.0;
    } else {
        ret = Gamma.regularizedGammaP(this.getAlpha(), x / this.getBeta());
    }
    return ret;
};
GammaDistributionImpl.prototype.getAlpha=function(){
	return this.alpha;
};
GammaDistributionImpl.prototype.getBeta=function(){
	return this.beta;
};
GammaDistributionImpl.prototype.getDomainLowerBound=function(p){
	return Double.MIN_VALUE;
};
GammaDistributionImpl.prototype.getDomainUpperBound=function(p){
	var ret;
    if (p < .5) {
        // use mean
        ret = this.getAlpha() * this.getBeta();
    } else {
        // use max value
        ret = Double.MAX_VALUE;
    }
    return ret;
};
GammaDistributionImpl.prototype.getInitialDomain=function(p){
	var ret;
    if (p < .5) {
        // use 1/2 mean
        ret = this.getAlpha() * this.getBeta() * .5;
    } else {
        // use mean
        ret = this.getAlpha() * this.getBeta();
    }
    return ret;
};
GammaDistributionImpl.prototype.setAlpha=function(alpha){
	if (alpha <= 0.0) {
        throw new IllegalArgumentException(IllegalArgumentException.ERROR,"alpha must be positive");
    }
    this.alpha = alpha;
};
GammaDistributionImpl.prototype.setBeta=function(beta){
	if (beta <= 0.0) {
        throw new IllegalArgumentException(IllegalArgumentException.ERROR,"beta must be positive");
    }
    this.beta = beta;

};
function GregorianCalendar(){
	this.jsjava_class="jsjava.util.GregorianCalendar";
	this._date=new Date();
	this.time=this._date.getTime();
	this.year=this._date.getYear();
	this.month=this._date.getMonth();
	this.date=this._date.getDate();
	this.day=this._date.getDay();
	this.hours=this._date.getHours();
	this.minutes=this._date.getMinutes();
	this.seconds=this._date.getSeconds();
}
GregorianCalendar.prototype=new Calendar();
function HTMLMenu(id,capacity){
	  this.jsjava_class="jsorg.eob.component.menu.HTMLMenu";
      this.id=id;                        
      this.capacity=capacity;            
      this.children=new Array(capacity); 
      this.size=0;                       
      this.isLeaf=false;
      if(capacity==0)
      {
         this.isLeaf=true;
      }  
      this.parent=null;
      this._isURLForbid=false;
      this._isScriptForbid=false;
      this._isPassURLScriptArgsOnly=false;
   }
   HTMLMenu.prototype.setTitle=function (title){
      this.title=title;
   };  
   HTMLMenu.prototype.getTitle=function(){
      return this.title;
   };  
   HTMLMenu.prototype.addChild=function (childNode){
      this.children[this.size]=childNode;
      this.size=this.size+1;
      childNode.parent=this;
   };   
   HTMLMenu.prototype.getChildren=function (){
      var children=new Array(this.size);
      for(var i=0;i<children.length;i++)
      {
         children[i]=this.children[i];
      }
      return children;
   };    
   HTMLMenu.prototype.getParent=function (){
      return this.parent;
   };   
   HTMLMenu.prototype.setIcon=function (icon){
      this.icon=icon;
   };    
   HTMLMenu.prototype.getIcon=function (){
      return this.icon;
   };  
   HTMLMenu.prototype.setDefaultIcon=function (defaultIcon){
      this.defaultIcon=defaultIcon;
   };
   HTMLMenu.prototype.getDefaultIcon=function (){
      return this.defaultIcon;
   };
   HTMLMenu.prototype.setLink=function (url){
      this.url=url;
   };    
   HTMLMenu.prototype.getLink=function (){
      return this.url;
   };      
   HTMLMenu.prototype.setTarget=function (target){
      this.target=target;	
   };   
   HTMLMenu.prototype.getTarget=function (){
      return this.target;	
   };    
   HTMLMenu.prototype.setFeature=function (feature){
      this.feature=feature;	
   };
   HTMLMenu.prototype.getFeature=function (){
      return this.feature;	
   };
   HTMLMenu.prototype.setScriptName=function (scriptName){
      this.scriptName=scriptName;	
   };  
   HTMLMenu.prototype.getScriptName=function (){
      return this.scriptName;	
   };  
   HTMLMenu.prototype.setScriptArgs=function (scriptArgs){
      this.scriptArgs=scriptArgs;	
   };  
   HTMLMenu.prototype.getScriptArgs=function (){
      return this.scriptArgs;	
   };  	
   HTMLMenu.prototype.setBackground=function (background){
      this.background=background;	
   };
   HTMLMenu.prototype.getBackground=function (){
      return this.background;	
   };
   HTMLMenu.prototype.setMouseRender=function (isRender){
      this.mouseRender=isRender;	
   };
   HTMLMenu.prototype.isMouseRender=function(){
      return this.mouseRender;	
   };
   HTMLMenu.prototype.getContent=function (){
   	var topNode=this.getTop();
        var content="<table width='100%' cellpadding='3' cellspacing='0' borderColor='#316AC5' class='WindowMenu' background='"+this.getBackground()+"'>";
    	for(var i=0;i<this.size;i++){
    	    var child=this.children[i];
    	    var linkUrl=child.getLink();
    	    var linkTarget=child.getTarget();
    	    var clickStr=child.getScriptName();
    	    var scriptArgs=child.getScriptArgs();
    	    if(clickStr==null||clickStr==""){
    	        clickStr=topNode.getScriptName();	
    	        scriptArgs=topNode.getScriptArgs();
    	    }
    	    var cursor="default";
    	    if(clickStr==null||clickStr==undefined){
    	    	clickStr="";
    	    }else{    	        
    	        if(topNode.isPassURLScriptArgsOnly()){
    	            clickStr+="(\""+linkUrl+"\","+"\""+linkTarget+"\")";	
    	        }else{
    	            clickStr+="("+scriptArgs+")";
    	        }
    	        cursor="hand";
    	    }
    	    var linkLeftStr="";
    	    var linkRightStr="";
    	    var isURLForbid=topNode.isURLForbid();
    	    if(linkUrl!=null&&linkUrl!=undefined&&!isURLForbid){
    	    	if(linkTarget==null||linkTarget==undefined){
    	    	    linkTarget="_self";	
    	    	}
    	    	var openStr="\""+linkUrl+"\",\""+linkTarget+"\","+"\"\"";
    	        linkLeftStr="<span style='text-decoration:none;cursor:hand' onclick='window.open("+openStr+")'>";
    	        linkRightStr="</span>";
    	    }
    	    var icon=child.getIcon();
    	    if(icon==null||icon==undefined){
    	        icon=topNode.getDefaultIcon();
    	    }
    	    content+="<tr>";
    	    content+="<td id='node_0_"+this.id+"' width='1'>";
    	    content+="<img id='node_0_1"+this.id+"' src='"+icon+"' nowrap/>";
    	    content+="</td>";
    	    content+="<td id='node_1_"+this.id+"' nowrap valign='middle' style='cursor:"+cursor+"' onclick='"+clickStr+"'";
    	    if(this.isMouseRender()){
    	    	content+=" onmouseover='parentElement.className=\"WindowMenuMouseOver\"' onmouseout='parentElement.className=\"WindowMenuMouseOut\"'";
    	    }
    	    content+=">";
    	    content+=linkLeftStr+child.getTitle()+linkRightStr;
    	    content+="</td>";
    	    content+="</tr>";
    	}    
    	content+="</table>";
    	return content;
   };
   HTMLMenu.prototype.getTop=function (){
      var parentNode=this.getParent();
      if(parentNode==null||parentNode==undefined){
      	 return this;
      }
      return parentNode.getTop();
   };
   HTMLMenu.prototype.forbidURL=function(){
       this._isURLForbid=true;	
   };
   HTMLMenu.prototype.enableURL=function(){
       this._isURLForbid=false;	
   };
   HTMLMenu.prototype.isURLForbid=function(){
       return this._isURLForbid;
   };
   HTMLMenu.prototype.forbidScript=function(){
       this._isScriptForbid=true;	
   };
   HTMLMenu.prototype.enableScript=function(){
       this._isScriptForbid=false;	
   };
   HTMLMenu.prototype.isScriptForbid=function(){
       return this._isScriptForbid;	
   };
   HTMLMenu.prototype.passURLScriptArgsOnly=function(){
       this._isPassURLScriptArgsOnly=true;
   };
   HTMLMenu.prototype.isPassURLScriptArgsOnly=function(){
       return this._isPassURLScriptArgsOnly;
   };
   HTMLMenu.prototype.init=function (capacity){
      this.capacity=capacity;
   };        
function HtmlPrint(){
	  this.jsjava_class="jsorg.eob.component.print.HtmlPrint";
}
HtmlPrint.prototype.setArea=function(area){
	this.area=area;
};
HtmlPrint.prototype.preview=function(title,preWinFeatures){
	var isNoneIE=navigator.userAgent.indexOf("MSIE")==-1;
	var areaId=this.area.getAreaId();
	var headObj=document.getElementsByTagName("HEAD");
	if(headObj){
		headObj=headObj[0];
	}
	var areaObj=document.getElementById(areaId);
	var preWin=window.open("about:blank","_blank",preWinFeatures);
	var preWinConent="<html><head>";
	preWinConent+=headObj.innerHTML;
	preWinConent+="</head><body>";
	preWinConent+=areaObj.outerHTML;
	preWinConent+="</body></html>";
	if(isNoneIE){
		preWin.document.open();
		preWin.document.write(preWinConent);
		reWin.document.close();
	}else{
		preWin.document.body.innerHTML=preWinConent;
	}
	if(title!=undefined){
		preWin.document.title=title;
	}
};
HtmlPrint.prototype.print=function(){  
	var isNoneIE=navigator.userAgent.indexOf("MSIE")==-1;
    var iframeElem=null;
    if(isNoneIE){
	    iframeElem=document.createElement("iframe");
	    iframeElem.setAttribute("name","jsjava_print_iframe");
	    iframeElem.setAttribute("src","about:blank");
	    iframeElem.setAttribute("style","position:absolute;top:-5;left:-5;display:inline;width:0;height:0");
    }else{
    	iframeElem=document.createElement("<iframe name='jsjava_print_iframe' src='about:blank' style='position:absolute;top:-5;left:-5;display:inline;width:0;height:0'></iframe>"); 
    }
    document.body.appendChild(iframeElem);
    var areaId=this.area.getAreaId();
	var headObj=document.getElementsByTagName("HEAD");
	if(headObj){
		headObj=headObj[0];
	}
	var areaObj=document.getElementById(areaId);	    
	var preWinConent="<html><head>";
	preWinConent+=headObj.innerHTML;
	preWinConent+="</head><body>";
	preWinConent+=areaObj.outerHTML;
	preWinConent+="</body></html>";
	var preWin=window.jsjava_print_iframe;
	if(!preWin.document||!preWin.document.body){
		setTimeout("jsjava_htmlprint_print('"+areaId+"')",200);
	}else{
		preWin.document.body.innerHTML=preWinConent;
		preWin.focus();
	    preWin.print();
	}	
};
function jsjava_htmlprint_print(areaId){
	var headObj=document.getElementsByTagName("HEAD");
	if(headObj){
		headObj=headObj[0];
	}
	var areaObj=document.getElementById(areaId);	    
	var preWinConent="<html><head>";
	preWinConent+=headObj.innerHTML;
	preWinConent+="</head><body>";
	preWinConent+=areaObj.outerHTML;
	preWinConent+="</body></html>";
	var preWin=window.jsjava_print_iframe;
	if(!preWin.document||!preWin.document.body){
		setTimeout("jsjava_htmlprint_print('"+areaId+"')",200);
	}else{
		preWin.document.body.innerHTML=preWinConent;
		preWin.focus();
	    preWin.print();
	}

}
function HtmlPrintArea(areaId){
	  this.jsjava_class="jsorg.eob.component.print.HtmlPrintArea";
	  this.areaId=areaId;
}
HtmlPrintArea.prototype.getAreaId=function(){
	return this.areaId;

};
function HTMLTextDevice(id){
	this.jsjava_class="jsjava.io.HTMLTextDevice";
	var textObj=document.getElementById(id);
	if(textObj){
		this.textObj=textObj;
	}else{
		throw new IOException(IOException.ERROR,"Text device not found!");
	}
}
HTMLTextDevice.prototype=new OutputDevice();
HTMLTextDevice.prototype.constructor=HTMLTextDevice;
HTMLTextDevice.prototype.println=function(str,append){
    if(this.textObj.value!=""){
    	this.textObj.value+="\n";
    }
	if(append&&append==true){
		this.textObj.value+=str;
	}else{
		this.textObj.value=str;
	}
};
HTMLTextDevice.prototype.print=function(str,append){
    if(append&&append==true){
		this.textObj.value+=str;
	}else{
		this.textObj.value=str;
	}

};
function HTMLTextOutputStream(outputStream,append){
	this.jsjava_class="jsjava.io.HTMLTextOutputStream";
	this.outputStream=outputStream;
	this.append=false;
	if(append&&append==true){
		this.append=true;
	}
}
HTMLTextOutputStream.prototype=new OutputStream();
HTMLTextOutputStream.prototype.constructor=HTMLTextOutputStream;
HTMLTextOutputStream.prototype.println=function(str){
	this.outputStream.outputDevice.println(str,this.append);
};
HTMLTextOutputStream.prototype.print=function(str){
	this.outputStream.outputDevice.print(str,this.append);
};
   function HttpRequest(url){
   	  this.jsjava_class="jsjavax.servlet.http.HttpRequest";
      this.url=url;
      if(!url||url==""){
          this.url=location.href;
      }
      this.pos=url.indexOf("?");    
      this.length=url.length;
      this.method="GET";
      this.queryString=this.url.substring(this.pos+1,this.length);
      this.parameterEntries=this.queryString.split("&");
   }
   HttpRequest.prototype.getParameter=function (paramName){
       if(!this.hasQuery){
           return null;
       }
       for(var i=0;i<this.parameterEntries.length;i++){
           var param=this.parameterEntries[i];
           var paramNameValue=param.split("=");
           if(paramNameValue[0]==paramName){
              return paramNameValue[1];
           }
       }
       return null;
   };
   HttpRequest.prototype.getParameterValues=function (paramName){
       if(!this.hasQuery){
           return null;
       }
       var paramNameCounter=0;
       for(var i=0;i<this.parameterEntries.length;i++){
           var param=this.parameterEntries[i];
           var paramNameValue=param.split("=");
           if(paramNameValue[0]==paramName){
               paramNameCounter++;
           }
       }
       var paramValues=new Array(paramNameCounter);
       paramValueCounter=0;
       for(var i=0;i<this.parameterEntries.length;i++){
           var param=this.parameterEntries[i];
           var paramNameValue=param.split("=");
           if(paramNameValue[0]==paramName){
              paramValues[paramValueCounter++]=paramNameValue[1];
           }
       }
       if(paramValueCounter==0){
           return null;
       }
       return paramValues;
   };
   HttpRequest.prototype.hasQuery=function (){
       return this.pos!=-1
   };
   HttpRequest.prototype.queryString=function (){
       return this.queryString;
   };
   HttpRequest.prototype.getMethod=function (){
       return this.method;
   };
   HttpRequest.prototype.getRequestURL=function (){
       return this.url; 
   };
   HttpRequest.prototype.getRequestURI=function (){
       var pos=this.url.indexOf("://");
       var uriPos=this.url.indexOf("/",pos+3);
       return this.url.substring(uriPos,this.pos);
   };
   HttpRequest.prototype.getContextPath=function (){
       var pos=this.url.indexOf("://");
       var uriPos=this.url.indexOf("/",pos+3);
       var contextPathEndPos=this.url.indexOf("/",uriPos+1);
       return this.url.substring(uriPos,contextPathEndPos);
   };
   HttpRequest.prototype.getContextName=function (){
       var contextPath=this.getContextPath();
       return contextPath.substring(1);
   };
   HttpRequest.prototype.getCookies=function (){
       var cookies=document.cookie.split(";");
       return cookies; 
   };
   HttpRequest.prototype.getCookie=function(name){
       var dc = document.cookie;
       var prefix = name + "=";
       var begin = dc.indexOf("; " + prefix);
       if (begin == -1) {
	   begin = dc.indexOf(prefix);
	   if (begin != 0) {
	       return null;
	   }
       } else {
	   begin += 2;
       }
       var end = document.cookie.indexOf(";", begin);
       if (end == -1) {
	   end = dc.length;
       }
       return unescape(dc.substring(begin + prefix.length, end));	
   };
   HttpRequest.prototype.removeCookie=function(name,path,domain){
       if (this.getCookie(name)) {
           document.cookie = name + "=" +
           ((path) ? "; path=" + path : "") +
           ((domain) ? "; domain=" + domain : "") +
           "; expires=Thu, 01-Jan-70 00:00:01 GMT";
       }
   };
function HttpResponse(){     
	this.jsjava_class="jsjavax.servlet.http.HttpResponse";
}
HttpResponse.prototype.addCookieByItems=function (name, value, expires, path, domain, secure){
    var curCookie = name + "=" + escape(value) +
      ((expires) ? "; expires=" + expires.toGMTString() : "") +
      ((path) ? "; path=" + path : "") +
      ((domain) ? "; domain=" + domain : "") +
      ((secure) ? "; secure" : "");
    document.cookie = curCookie;
};
HttpResponse.prototype.addCookie=function (cookie){
    if(cookie==null||cookie==undefined||cookie==""){
        return;
    }
    var cName=cookie.getName();
    var cValue=cookie.getValue();
    var cExpires=cookie.getMaxAge();
    var cPath=cookie.getPath();
    var cDomain=cookie.getDomain();
    var cSecure=cookie.getSecure();
    this.addCookieByItems(cName,cValue,cExpires,cPath,cDomain,cSecure);

};
function HypergeometricDistributionImpl(populationSize,numberOfSuccesses,sampleSize){
	this.jsjava_class="org.apache.commons.math.distribution.HypergeometricDistributionImpl";	
	if (numberOfSuccesses > populationSize) {
        throw new IllegalArgumentException(
            IllegalArgumentException.ERROR,"number of successes must be less than or equal to " +
            "population size");
    }
    if (sampleSize > populationSize) {
        throw new IllegalArgumentException(
        IllegalArgumentException.ERROR,"sample size must be less than or equal to population size");
    }
    if(populationSize <= 0){
        throw new IllegalArgumentException(
            IllegalArgumentException.ERROR,"population size must be positive.");
    }
    this.populationSize = populationSize;
    if (sampleSize < 0) {
        throw new IllegalArgumentException(
            IllegalArgumentException.ERROR,"sample size must be non-negative.");
    }    
    this.sampleSize = sampleSize;
    if(numberOfSuccesses < 0){
        throw new IllegalArgumentException(
            IllegalArgumentException.ERROR,"number of successes must be non-negative.");
    }
    this.numberOfSuccesses = numberOfSuccesses;
}
HypergeometricDistributionImpl.prototype.cumulativeProbability=function(x){
	var ret;
    var sx=new String(x);
	if(sx.indexOf(".")!=-1){
		x=Math.floor(x);
	}    
    var n = this.getPopulationSize();
    var m = this.getNumberOfSuccesses();
    var k = this.getSampleSize();
    var domain = this.getDomain(n, m, k);
    if (x < domain[0]) {
        ret = 0.0;
    } else if(x >= domain[1]) {
        ret = 1.0;
    } else {
        ret = this.innerCumulativeProbability(domain[0], x, 1, n, m, k);
    }
    return ret;
};
HypergeometricDistributionImpl.prototype.getDomain=function(n,m,k){
	var arr=new Array(2);
	arr[0]=this.getLowerDomain(n, m, k);
	arr[1]=this.getUpperDomain(m, k);
	return arr;
};
HypergeometricDistributionImpl.prototype.getDomainLowerBound=function(p){
	return this.getLowerDomain(this.getPopulationSize(), this.getNumberOfSuccesses(),
            this.getSampleSize());
};
HypergeometricDistributionImpl.prototype.getDomainUpperBound=function(p){
	return this.getUpperDomain(this.getSampleSize(), this.getNumberOfSuccesses());
};
HypergeometricDistributionImpl.prototype.getLowerDomain=function(n,m,k){
	return Math.max(0, m - (n - k));
};
HypergeometricDistributionImpl.prototype.getNumberOfSuccesses=function(){
	return this.numberOfSuccesses;
};
HypergeometricDistributionImpl.prototype.getPopulationSize=function(){
	return this.populationSize;
};
HypergeometricDistributionImpl.prototype.getSampleSize=function(){
	return this.sampleSize;
};
HypergeometricDistributionImpl.prototype.getUpperDomain=function(m,k){
	return Math.min(k, m);
};
HypergeometricDistributionImpl.prototype.probability=function(x){
	var ret;       
    var n = this.getPopulationSize();
    var m = this.getNumberOfSuccesses();
    var k = this.getSampleSize();
	var domain = this.getDomain(n, m, k);
    if(x < domain[0] || x > domain[1]){
        ret = 0.0;
    } else {
        ret = this.probability2(n, m, k, x);
    }
    return ret;
};
HypergeometricDistributionImpl.prototype.probability2=function(n, m, k, x){
	return Math.exp(MathUtils.binomialCoefficientLog(m, x) +
            MathUtils.binomialCoefficientLog(n - m, k - x) -
            MathUtils.binomialCoefficientLog(n, k));
};
HypergeometricDistributionImpl.prototype.setNumberOfSuccesses=function(num){
	if(num < 0){
        throw new IllegalArgumentException(
            IllegalArgumentException.ERROR,"number of successes must be non-negative.");
    }
    this.numberOfSuccesses = num;
};
HypergeometricDistributionImpl.prototype.setPopulationSize=function(size){
	if(size <= 0){
        throw new IllegalArgumentException(
            IllegalArgumentException.ERROR,"population size must be positive.");
    }
    this.populationSize = size;
};
HypergeometricDistributionImpl.prototype.setSampleSize=function(size){
	if (size < 0) {
        throw new IllegalArgumentException(
            IllegalArgumentException.ERROR,"sample size must be non-negative.");
    }    
    this.sampleSize = size;
};
HypergeometricDistributionImpl.prototype.upperCumulativeProbability=function(x){
	var ret;
    var sx=new String(x);
	if(sx.indexOf(".")!=-1){
		x=Math.floor(x);
	}     
    var n = this.getPopulationSize();
    var m = this.getNumberOfSuccesses();
    var k = this.getSampleSize();
    var domain = this.getDomain(n, m, k);
    if (x < domain[0]) {
        ret = 1.0;
    } else if(x > domain[1]) {
        ret = 0.0;
    } else {
        ret = this.innerCumulativeProbability(domain[1], x, -1, n, m, k);
    }
    return ret;
};
HypergeometricDistributionImpl.prototype.innerCumulativeProbability=function(
	x0, x1, dx, n, m, k){
	var ret = this.probability2(n, m, k, x0);
    while (x0 != x1) {
        x0 += dx;
        ret += this.probability2(n, m, k, x0);
    }
    return ret;

};
IllegalArgumentException.prototype=new Error();
IllegalArgumentException.prototype.constructor=IllegalArgumentException;
IllegalArgumentException.ERROR=0;
function IllegalArgumentException(code,message){
	this.jsjava_class="jsjava.lang.IllegalArgumentException";
	this.code=code;
    this.message=message;
    this.name="jsjava.lang.IllegalArgumentException";

}
IllegalStateException.prototype=new Error();
IllegalStateException.prototype.constructor=IllegalStateException;
IllegalStateException.ERROR=0;
function IllegalStateException(code,message){
	this.jsjava_class="jsjava.lang.IllegalStateException";
	this.code=code;
    this.message=message;
    this.name="jsjava.lang.IllegalStateException";

}
function Inet4Address(str){
	this.jsjava_class="jsjava.net.Inet4Address";
    this.ip=str;
}
Inet4Address.prototype.getAddress=function(){
    return this.ip; 
};
Inet4Address.prototype.getBytesAddress=function(){
    return this.ip.split("."); 
};
Inet4Address.prototype.toString=function(){
    return this.ip; 
};
Inet4Address.isIpAddress=function(IPvalue,strict){
    if(strict != null  && strict == ""){
  if (IPvalue == "0.0.0.0")
   return false;
  else if (IPvalue == "255.255.255.255")
   return false;
 };
 theName = "IPaddress";
 var ipPattern = /^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/;
 var ipArray = IPvalue.match(ipPattern);
 if (ipArray == null){
  return false;
 }else {
  for (i = 1; i < 5; i++)
  {
   thisSegment = parseInt(ipArray[i]);
   if (thisSegment > 255) {
    return false;
   }
   if (i == 1 && parseInt(ipArray[1]) == 0 ) {
    return false ;
   }
  }
 }
 return true; 
};
Inet4Address.isIpMask=function(mask){
    var _maskTable = new Array("0.0.0.0", "128.0.0.0", "192.0.0.0", "224.0.0.0",
"240.0.0.0", "248.0.0.0", "252.0.0.0", "254.0.0.0", "255.0.0.0", "255.128.0.0",
"255.192.0.0", "255.224.0.0", "255.240.0.0", "255.248.0.0", "255.252.0.0",
"255.254.0.0", "255.255.0.0", "255.255.128.0", "255.255.192.0", "255.255.224.0",
"255.255.240.0", "255.255.248.0", "255.255.252.0", "255.255.254.0", "255.255.255.0",
"255.255.255.128", "255.255.255.192", "255.255.255.224", "255.255.255.240",
"255.255.255.248", "255.255.255.252", "255.255.255.254", "255.255.255.255");
 var i;
 for(i = 1; i< _maskTable.length -1; i++){
  if(mask == _maskTable[i]){
   return true;
  }
 }
 return(false); 
};
function Insets(top,left,bottom,right){
	this.jsjava_class="jsjava.awt.Insets";
    this.top=top;
    this.left=left;
    this.bottom=bottom;
    this.right=right;	
}
Insets.prototype.getTop=function(){
    return this.top;	
};
Insets.prototype.getLeft=function(){
    return this.left;	
};
Insets.prototype.getBottom=function(){
    return this.bottom;	
};
Insets.prototype.getRight=function(){
    return this.right;	

};
function Integer(value){
	this.jsjava_class="jsjava.lang.Integer";
    this.value=value;
}
Integer.MIN=-Math.pow(2,31);
Integer.MAX=Math.pow(2,31)-1;
Integer.MIN_VALUE=-Math.pow(2,31);
Integer.MAX_VALUE=Math.pow(2,31)-1;
Integer.digits = [
	'0' , '1' , '2' , '3' , '4' , '5' ,
	'6' , '7' , '8' , '9' , 'a' , 'b' ,
	'c' , 'd' , 'e' , 'f' , 'g' , 'h' ,
	'i' , 'j' , 'k' , 'l' , 'm' , 'n' ,
	'o' , 'p' , 'q' , 'r' , 's' , 't' ,
	'u' , 'v' , 'w' , 'x' , 'y' , 'z'
    ];
Integer.checkValid=function(i){
	if(isNaN(i)){
		return false;
	}
	if(typeof(i)=="number"){
		if(Math.floor(i)!=i){
			return false;
		}
	}else{
		if(i.indexOf(".")!=-1){
			return false;
		}
	}
	i=parseInt(i);
	if(i<=Integer.MAX&&i>=Integer.MIN){
    	return true;
    }
    return false;
};
Integer.parseInt=function(str){
    if(isNaN(str)){
		throw new NumberFormatException(NumberFormatException.NOT_NUMBER,"Not a number Exception!");
	}
    var i=parseInt(str);
    if(!Integer.checkValid(i)){
        return;
    }
    return i;
};
Integer.prototype.compareTo=function(b){
    if(b==undefined){
        return -1; 
    }
    if(this.value>b.value){
        return 1; 
    }else if(this.value==b.value){
        return 0; 
    }else{
        return -1;  
    }
};
Integer.prototype.intValue=function(){
    return this.value; 
};
Integer.prototype.toString=function(){
    return this.value; 
};
Integer.prototype.equals=function(o){
    if(o==undefined){
        return false; 
    }
    if(o.jsjava_class&&o.jsjava_class=="jsjava.lang.Integer"){
        return this.value==o.value; 
    }
    return false;
};
Integer.toHexString=function(i){
    return Integer.toUnsignedString(i, 4);
};
Integer.toOctalString=function(i){
    return Integer.toUnsignedString(i, 3);
};
Integer.toBinaryString=function(i){
    return Integer.toUnsignedString(i, 1);
};
Integer.toUnsignedString=function(i,shift){
	var buf = new Array(32);
	var charPos = 32;
	var radix = 1 << shift;
	var mask = radix - 1;
	do {
	    buf[--charPos] = Integer.digits[i & mask];
	    i >>>= shift;
	} while (i != 0);
	var count=32 - charPos;
	var carray=new Array(count);
	for(var j=0;j<count;j++){
		carray[j]=buf[j+charPos];
	}
	return carray.join("");

};
function IntegerValidator(){
	this.jsjava_class="jsorg.eob.validator.IntegerValidator";
}
IntegerValidator.validate=function(str){
	return ValidatorUtils.isInt(str);

};
InvalidMatrixException.prototype=new Error();
InvalidMatrixException.prototype.constructor=InvalidMatrixException;
InvalidMatrixException.ERROR=0;
function InvalidMatrixException(code,message){
	this.jsjava_class="org.apache.commons.math.linear.InvalidMatrixException";
	this.code=code;
    this.message=message;
    this.name="org.apache.commons.math.linear.InvalidMatrixException";

}
IOException.prototype=new Error();
IOException.prototype.constructor=IOException;
IOException.ERROR=0;
function IOException(code,message){
	this.jsjava_class="jsjava.io.IOException";
	this.code=code;
    this.message=message;
    this.name="jsjava.io.IOException";

}
function IP4Validator(){
	this.jsjava_class="jsorg.eob.validator.IP4Validator";
}
IP4Validator.validate=function(str,strict){
	return ValidatorUtils.isIP4(str,strict);

};
function Iterator(list){
	this.jsjava_class="jsjava.util.Iterator";
}
Iterator.CONSTANT_ILLEGAL_INVOCATION="This is an interface method and you should use the concrete method";
Iterator.prototype.hasNext=function(){
    throw new IllegalStateException(IllegalStateException.ERROR,Iterator.CONSTANT_ILLEGAL_INVOCATION);
};
Iterator.prototype.next=function(){
    throw new IllegalStateException(IllegalStateException.ERROR,Iterator.CONSTANT_ILLEGAL_INVOCATION);
};
Iterator.prototype.moveTo=function(index){
    throw new IllegalStateException(IllegalStateException.ERROR,Iterator.CONSTANT_ILLEGAL_INVOCATION);	

};
function JLabel(text){
	this.jsjava_class="jsjavax.swing.JLabel";
    this.text=text;    
    this.invisible=true;
}
JLabel.prototype.getText=function(){
    return this.text;	
};
JLabel.prototype.setText=function(text){
    this.text=text;	
};
JLabel.prototype.setFont=function(font){
    this.font=font;	
};
JLabel.prototype.getFont=function(){
    return this.font;	
};
JLabel.prototype.setForeground=function(foreground){
    this.foreground=foreground;	
};
JLabel.prototype.getForeground=function(){
    return this.foreground;	
};
JLabel.prototype.setBorder=function(border){
    this.border=border;	
};
JLabel.prototype.getBorder=function(){
    return this.border;	
};
JLabel.prototype.setBackground=function(background){
    this.background=background;	
};
JLabel.prototype.getBackground=function(){
    return this.background;	
};
JLabel.prototype.setInsets=function(insets){
    this.insets=insets;	
};
JLabel.prototype.getInsets=function(){
    return this.insets;	
};
JLabel.prototype.setInvisible=function(invisible){
    this.invisible=invisible;	
};
JLabel.prototype.getInvisible=function(){
    return this.invisible;	
};
JLabel.prototype.show=function(){
    var border=this.getBorder();
    var font=this.getFont();
    var foreground=this.getForeground();
    var background=this.getBackground();
    var insets=this.getInsets();
    var invisible=this.getInvisible();
    var display="inline";
    if(!invisible){
        display="none";	
    }
    var str="";
    str+="<span style='border-width:";
    str+=border.getWidth();
    str+=";border-color:";
    str+="#"+border.getColor().toHexValue();
    str+=";border-style:";
    str+=border.getStyle();
    str+=";color:";
    str+=foreground.toHexValue();
    str+=";font-family:";
    str+=font.getFamily();
    str+=";font-size:";
    str+=font.getSize()+"pt";
    str+=";background-color:";
    str+=background.toHexValue();
    str+=";padding:";
    str+=insets.getTop()+" "+insets.getRight()+" "+insets.getBottom()+" "+insets.getLeft();
    str+=";display:";
    str+=display;
    str+=";'>";
    str+=this.getText();
    str+="</span>";
    document.writeln(str);

};
function JTextField(text){
	this.jsjava_class="jsjavax.swing.JTextField";
    this.text=text;    
    this.invisible=true;
}
JTextField.prototype.getText=function(){
    return this.text;	
};
JTextField.prototype.setText=function(text){
    this.text=text;	
};
JTextField.prototype.setFont=function(font){
    this.font=font;	
};
JTextField.prototype.getFont=function(){
    return this.font;	
};
JTextField.prototype.setForeground=function(foreground){
    this.foreground=foreground;	
};
JTextField.prototype.getForeground=function(){
    return this.foreground;	
};
JTextField.prototype.setBorder=function(border){
    this.border=border;	
};
JTextField.prototype.getBorder=function(){
    return this.border;	
};
JTextField.prototype.setBackground=function(background){
    this.background=background;	
};
JTextField.prototype.getBackground=function(){
    return this.background;	
};
JTextField.prototype.setInsets=function(insets){
    this.insets=insets;	
};
JTextField.prototype.getInsets=function(){
    return this.insets;	
};
JTextField.prototype.setInvisible=function(invisible){
    this.invisible=invisible;	
};
JTextField.prototype.getInvisible=function(){
    return this.invisible;	
};
JTextField.prototype.show=function(){
    var border=this.getBorder();
    var font=this.getFont();
    var foreground=this.getForeground();
    var background=this.getBackground();
    var insets=this.getInsets();
    var invisible=this.getInvisible();
    var display="inline";
    if(!invisible){
        display="none";	
    }
    var str="";
    str+="<input style='border-width:";
    str+=border.getWidth();
    str+=";border-color:";
    str+=border.getColor().toHexValue();
    str+=";border-style:";
    str+=border.getStyle();
    str+=";color:";
    str+=foreground.toHexValue();
    str+=";font-family:";
    str+=font.getFamily();
    str+=";font-size:";
    str+=font.getSize()+"pt";
    str+=";background-color:";
    str+=background.toHexValue();
    str+=";padding:";
    str+=insets.getTop()+" "+insets.getRight()+" "+insets.getBottom()+" "+insets.getLeft();
    str+=";display:";
    str+=display;
    str+=";'";
    str+="value='"+this.getText()+"'";
    str+="/>";
    document.writeln(str);

};
function ListIterator(list){
	this.jsjava_class="jsjava.util.ListIterator";
}
ListIterator.prototype=new Iterator();
ListIterator.prototype.constructor=ListIterator;
ListIterator.CONSTANT_ILLEGAL_INVOCATION="This is an interface method and you should use the concrete method";
ListIterator.prototype.add=function(o){
    throw new IllegalStateException(IllegalStateException.ERROR,ListIterator.CONSTANT_ILLEGAL_INVOCATION);
};
ListIterator.prototype.hasNext=function(){
    throw new IllegalStateException(IllegalStateException.ERROR,ListIterator.CONSTANT_ILLEGAL_INVOCATION);
};
ListIterator.prototype.hasPrevious=function(){
    throw new IllegalStateException(IllegalStateException.ERROR,ListIterator.CONSTANT_ILLEGAL_INVOCATION);
};
ListIterator.prototype.next=function(){
    throw new IllegalStateException(IllegalStateException.ERROR,ListIterator.CONSTANT_ILLEGAL_INVOCATION);
};
ListIterator.prototype.nextIndex=function(){
    throw new IllegalStateException(IllegalStateException.ERROR,ListIterator.CONSTANT_ILLEGAL_INVOCATION);
};
ListIterator.prototype.previous=function(){
    throw new IllegalStateException(IllegalStateException.ERROR,ListIterator.CONSTANT_ILLEGAL_INVOCATION);
};
ListIterator.prototype.previousIndex=function(){
    throw new IllegalStateException(IllegalStateException.ERROR,ListIterator.CONSTANT_ILLEGAL_INVOCATION);
};
ListIterator.prototype.remove=function(index){
    throw new IllegalStateException(IllegalStateException.ERROR,ListIterator.CONSTANT_ILLEGAL_INVOCATION);	
};
ListIterator.prototype.set=function(o){
    throw new IllegalStateException(IllegalStateException.ERROR,ListIterator.CONSTANT_ILLEGAL_INVOCATION);	

};
function Locale(language,country,variant){
	this.jsjava_class="jsjava.util.Locale";
	this.language=language;
	this.country=country;
	this.variant=variant;
	this.displayLanguage="";
	this.displayCountry="";
	this.displayVariant="";
}
Locale.locales=[["ar","Arabic","","","",""],["ar","Arabic","AE","United Arab Emirates","",""],["ar","Arabic","BH","Bahrain","",""],["ar","Arabic","DZ","Algeria","",""],["ar","Arabic","EG","Egypt","",""],["ar","Arabic","IQ","Iraq","",""],["ar","Arabic","JO","Jordan","",""],["ar","Arabic","KW","Kuwait","",""],["ar","Arabic","LB","Lebanon","",""],["ar","Arabic","LY","Libya","",""],["ar","Arabic","MA","Morocco","",""],["ar","Arabic","OM","Oman","",""],["ar","Arabic","QA","Qatar","",""],["ar","Arabic","SA","Saudi Arabia","",""],["ar","Arabic","SD","Sudan","",""],["ar","Arabic","SY","Syria","",""],["ar","Arabic","TN","Tunisia","",""],["ar","Arabic","YE","Yemen","",""],["hi","Hindi","IN","India","",""],["iw","Hebrew","","","",""],["iw","Hebrew","IL","Israel","",""],["ja","Japanese","","","",""],["ja","Japanese","JP","Japan","",""],["ko","Korean","","","",""],["ko","Korean","KR","South Korea","",""],["th","Thai","","","",""],["th","Thai","TH","Thailand","",""],["th","Thai","TH","Thailand","TH","TH"],["zh","Chinese","","","",""],["zh","Chinese","CN","China","",""],["zh","Chinese","HK","Hong Kong","",""],["zh","Chinese","TW","Taiwan","",""],["be","Byelorussian","","","",""],["be","Byelorussian","BY","Belarus","",""],["bg","Bulgarian","","","",""],["bg","Bulgarian","BG","Bulgaria","",""],["ca","Catalan","","","",""],["ca","Catalan","ES","Spain","",""],["cs","Czech","","","",""],["cs","Czech","CZ","Czech Republic","",""],["da","Danish","","","",""],["da","Danish","DK","Denmark","",""],["de","German","","","",""],["de","German","AT","Austria","",""],["de","German","CH","Switzerland","",""],["de","German","DE","Germany","",""],["de","German","LU","Luxembourg","",""],["el","Greek","","","",""],["el","Greek","GR","Greece","",""],["en","English","AU","Australia","",""],["en","English","CA","Canada","",""],["en","English","GB","United Kingdom","",""],["en","English","IE","Ireland","",""],["en","English","IN","India","",""],["en","English","NZ","New Zealand","",""],["en","English","ZA","South Africa","",""],["es","Spanish","","","",""],["es","Spanish","AR","Argentina","",""],["es","Spanish","BO","Bolivia","",""],["es","Spanish","CL","Chile","",""],["es","Spanish","CO","Colombia","",""],["es","Spanish","CR","Costa Rica","",""],["es","Spanish","DO","Dominican Republic","",""],["es","Spanish","EC","Ecuador","",""],["es","Spanish","ES","Spain","",""],["es","Spanish","GT","Guatemala","",""],["es","Spanish","HN","Honduras","",""],["es","Spanish","MX","Mexico","",""],["es","Spanish","NI","Nicaragua","",""],["es","Spanish","PA","Panama","",""],["es","Spanish","PE","Peru","",""],["es","Spanish","PR","Puerto Rico","",""],["es","Spanish","PY","Paraguay","",""],["es","Spanish","SV","El Salvador","",""],["es","Spanish","UY","Uruguay","",""],["es","Spanish","VE","Venezuela","",""],["et","Estonian","","","",""],["et","Estonian","EE","Estonia","",""],["fi","Finnish","","","",""],["fi","Finnish","FI","Finland","",""],["fr","French","","","",""],["fr","French","BE","Belgium","",""],["fr","French","CA","Canada","",""],["fr","French","CH","Switzerland","",""],["fr","French","FR","France","",""],["fr","French","LU","Luxembourg","",""],["hr","Croatian","","","",""],["hr","Croatian","HR","Croatia","",""],["hu","Hungarian","","","",""],["hu","Hungarian","HU","Hungary","",""],["is","Icelandic","","","",""],["is","Icelandic","IS","Iceland","",""],["it","Italian","","","",""],["it","Italian","CH","Switzerland","",""],["it","Italian","IT","Italy","",""],["lt","Lithuanian","","","",""],["lt","Lithuanian","LT","Lithuania","",""],["lv","Latvian (Lettish)","","","",""],["lv","Latvian (Lettish)","LV","Latvia","",""],["mk","Macedonian","","","",""],["mk","Macedonian","MK","Macedonia","",""],["nl","Dutch","","","",""],["nl","Dutch","BE","Belgium","",""],["nl","Dutch","NL","Netherlands","",""],["no","Norwegian","","","",""],["no","Norwegian","NO","Norway","",""],["no","Norwegian","NO","Norway","NY","Nynorsk"],["pl","Polish","","","",""],["pl","Polish","PL","Poland","",""],["pt","Portuguese","","","",""],["pt","Portuguese","BR","Brazil","",""],["pt","Portuguese","PT","Portugal","",""],["ro","Romanian","","","",""],["ro","Romanian","RO","Romania","",""],["ru","Russian","","","",""],["ru","Russian","RU","Russia","",""],["sh","Serbo-Croatian","","","",""],["sh","Serbo-Croatian","YU","Yugoslavia","",""],["sk","Slovak","","","",""],["sk","Slovak","SK","Slovakia","",""],["sl","Slovenian","","","",""],["sl","Slovenian","SI","Slovenia","",""],["sq","Albanian","","","",""],["sq","Albanian","AL","Albania","",""],["sr","Serbian","","","",""],["sr","Serbian","YU","Yugoslavia","",""],["sv","Swedish","","","",""],["sv","Swedish","SE","Sweden","",""],["tr","Turkish","","","",""],["tr","Turkish","TR","Turkey","",""],["uk","Ukrainian","","","",""],["uk","Ukrainian","UA","Ukraine","",""],["en","English","","","",""],["en","English","US","United States","",""]];
Locale.getAvailableLocales=function(){
	var length=Locale.locales.length;
	var larr=new Array(length);
	for(var i=0;i<length;i++){
		var arr=Locale.locales[i];
		var locale=new Locale(arr[0],arr[2],arr[4]);
		locale.displayLanguage=arr[1];
		locale.displayCountry=arr[3];
		locale.displayVariant=arr[5];
		larr[i]=locale;
	}
	return larr;
};
Locale.prototype.getCountry=function(){
	return this.country;
};
Locale.prototype.getDisplayCountry=function(){
	return this.displayCountry;
};
Locale.prototype.getLanguage=function(){
	return this.language;
};
Locale.prototype.getDisplayLanguage=function(){
	return this.displayLanguage;
};
Locale.prototype.getVariant=function(){
	return this.variant;
};
Locale.prototype.getDisplayVariant=function(){
	return this.displayVariant;
};
Locale.prototype.toString=function(){
	var str="";
	var language=this.language
	if(language!=""){
		str+=language;
	}
	var country=this.country;
	if(country!=""){
		str+="-"+country;
	}
	return str;
};
Locale.prototype.equals=function(o){
	if(!o){
		return false;
	}
	if(o.jsjava_class&&o.jsjava_class=="jsjava.util.Locale"){
        if(this.language==o.language&&this.country==o.country&&this.variant==o.variant){
			return true;
		}	
	}
	return false;

};
function LocaleUtils(){
	this.jsjava_class="jsorg.apache.commons.lang.LocaleUtils";
}
LocaleUtils.availableLocaleList=function(){
	var list=new ArrayList();
	list.addAll(Arrays.asList(Locale.getAvailableLocales()));
	return list;
};
LocaleUtils.availableLocaleSet=function(){
	var set=new HashSet();
	set.addAll(Arrays.asList(Locale.getAvailableLocales()));
	return set;
};
LocaleUtils.countriesByLanguage=function(language){
	var larr=Locale.getAvailableLocales();
	var length=larr.length;
	var list=new ArrayList();
	for(var i=0;i<length;i++){
		var locale=larr[i];
		if(locale.getLanguage()==language){
			list.add(locale);
		}
	}
	return list;
};
LocaleUtils.isAvailableLocale=function(locale){
	var larr=Locale.getAvailableLocales();
	var length=larr.length;
	for(var i=0;i<length;i++){
		var clocale=larr[i];
		if(clocale.equals(locale)){
			return true;
		}
	}
	return false;
};
LocaleUtils.languagesByCountry=function(country){
	var larr=Locale.getAvailableLocales();
	var length=larr.length;
	var list=new ArrayList();
	for(var i=0;i<length;i++){
		var locale=larr[i];
		if(locale.getCountry()==country){
			list.add(locale);
		}
	}
	return list;
};
LocaleUtils.toLocale=function(str){
	var arr=str.split("_");
	var length=arr.length;
	var language="";
	var country="";
	var variant="";
	if(length>=1){
		language=arr[0];
	}
	if(length>=2){
		country=arr[1];
	}
	if(length>=3){
		variant=arr[2];
	}
	var locale=new Locale(language,country,variant);
	if(LocaleUtils.isAvailableLocale(locale)){
		return locale;
	}
	return null;

};
function Long(value){
	this.jsjava_class="jsjava.lang.Long";
    this.value=value;
}
Long.MIN=-Math.pow(2,63);
Long.MAX=Math.pow(2,63)-1;
Long.MIN_VALUE=-Math.pow(2,63);
Long.MAX_VALUE=Math.pow(2,63)-1;
Long.checkValid=function(l){
	if(isNaN(l)){
		return false;
	}
	if(typeof(l)=="number"){
		if(Math.floor(l)!=l){
			return false;
		}
	}else{
		if(l.indexOf(".")!=-1){
			return false;
		}
	}
	l=parseInt(l);
	if(l<=Long.MAX&&l>=Long.MIN){
    	return true;
    }
    return false;
};
Long.parseLong=function(str){
    if(isNaN(str)){
		throw new NumberFormatException(NumberFormatException.NOT_NUMBER,"Not a number Exception!");
	}
    var l=parseInt(str);
    if(!Long.checkValid(l)){
        return;
    }
    return l;
};
Long.prototype.compareTo=function(b){
    if(b==undefined){
        return -1; 
    }
    if(this.value>b.value){
        return 1; 
    }else if(this.value==b.value){
        return 0; 
    }else{
        return -1;  
    }
};
Long.prototype.longValue=function(){
    return this.value;
};
Long.prototype.toString=function(){
    return this.value; 
};
Long.prototype.equals=function(o){
    if(o==undefined){
        return false; 
    }
    if(o.jsjava_class&&o.jsjava_class=="jsjava.lang.Long"){
        return this.value==o.value; 
    }
    return false;

};
function LongValidator(){
	this.jsjava_class="jsorg.eob.validator.LongValidator";
}
LongValidator.validate=function(str){
	return ValidatorUtils.isLong(str);

};
MathException.prototype=new Error();
MathException.prototype.constructor=MathException;
MathException.ERROR=0;
function MathException(code,message){
	this.jsjava_class="org.apache.commons.math.MathException";
	this.code=code;
    this.message=message;
    this.name="org.apache.commons.math.MathException";

}
MatrixIndexException.prototype=new Error();
MatrixIndexException.prototype.constructor=MatrixIndexException;
MatrixIndexException.ERROR=0;
function MatrixIndexException(code,message){
	this.jsjava_class="org.apache.commons.math.linear.MatrixIndexException";
	this.code=code;
    this.message=message;
    this.name="org.apache.commons.math.linear.MatrixIndexException";

}
function MatrixUtils(){
	this.jsjava_class="jsorg.apache.commons.math.linear.MatrixUtils";
}
MatrixUtils.createRowRealMatrix=function(rowData){
	var nCols = rowData.length;
    var data=new Array(1);
    for(var i=0;i<1;i++){
    	data[i]=new Array(nCols);
    }
    for(var j=0;j<nCols;j++){
    	data[0][j]=rowData[j];
    }
    return RealMatrixImpl.CreateRealMatrixImplByFullArray(data);
};
MatrixUtils.createColumnRealMatrix=function(columnData){
	var nRows = columnData.length;
    var data=new Array(nRows);
    for(var i=0;i<nRows;i++){
    	data[i]=new Array(1);
    }
    for (var row = 0; row < nRows; row++) {
        data[row][0] = columnData[row];
    }
    return RealMatrixImpl.CreateRealMatrixImplByFullArray(data);
};
MatrixUtils.createRealIdentityMatrix=function(dimension){
	var out = new RealMatrixImpl(dimension, dimension);
    var d = out.getDataRef();
    for (var row = 0; row < dimension; row++) {
        for (var col = 0; col < dimension; col++) {
            d[row][col] = row == col ? 1 : 0;
        }
    }
    return out;

};
function Menu(label){
	this.jsjava_class="jsjava.awt.Menu";
    this.label=label;
    this.items=new ArrayList();
    this.listeners=new ArrayList();
}
Menu.prototype=new MenuItem();
Menu.prototype.constructor=Menu;
Menu.prototype.addActionListener=function(listener){
    this.listeners.add(listener);
};
Menu.prototype.getActionListeners=function(){
    return this.label;	
};
Menu.prototype.add=function(item){
    if(item instanceof MenuItem){
    	this.items.add(item);
    	return;
    }
    if(item instanceof String){
    	var im=new MenuItem(item);
    	this.items.add(im);
    	return;
    }
    throw new IllegalArgumentException(IllegalArgumentException.ERROR,"Invalid arguments");
};
Menu.prototype.deleteShortcut=function(s){
    var nitems = this.getItemCount();
	for (var i = 0 ; i < nitems ; i++) {
	    this.getItem(i).deleteShortcut(s);
	}
};
Menu.prototype.getItem=function(index){
    return this.items.get(index);
};
Menu.prototype.getItemCount=function(){
    return this.items.size();
};
Menu.prototype.getListeners=function(listenerType){
    return this.listeners;
};
Menu.prototype.insert=function(item,index){
    if(item instanceof MenuItem){
    	this.items.addIndexOf(index,item);
    	return;
    }
    if(item instanceof String){
    	var im=new MenuItem(item);
    	this.items.addIndexOf(index,im);
    	return;
    }
    throw new IllegalArgumentException(IllegalArgumentException.ERROR,"Invalid arguments");
};
Menu.prototype.processActionEvent=function(actionEvent){
    for(var i=0;i<this.listeners.size();i++){
    	var listener=this.listeners.get(i);
    	listener.actionPerformed(actionEvent);
    }
};
Menu.prototype.remove=function(item){
    this.items.remove(item);	
};
Menu.prototype.removeActionListener=function(listener){
   this.listeners.remove(listener);	
};
Menu.prototype.removeAll=function(){
    this.items.removeAll();	
};
Menu.prototype.removeIndexOf=function(index){
    this.items.removeIndexOf(index);	
};
Menu.prototype.shortcuts=function(){
	var _shortcuts=new Vector();
    var nitems = this.getItemCount();
    for(var i=0;i<nitems;i++){
    	var item=this.getItem(i);
    	if(item instanceof Menu){
    		var ss=item.shortcuts();
    		while(ss.hasMoreElements()){
    			var s=ss.nextElement();
    			_shortcuts.addElement(s);
    		}
    	}else if(item instanceof MenuItem){
    		var s=item.getShortcut();
    		if(s!=undefined&&s!=null){
    			_shortcuts.addElement(s);
    		}
    	}else{
    	}
    }	
    return _shortcuts.elements();

};
function MenuBar(){
	this.jsjava_class="jsjava.awt.MenuBar";
    this.menus=new ArrayList();
}
MenuBar.prototype.add=function(menu){
    if(menu instanceof Menu){
    	this.menus.add(menu);
    	return;
    }
    throw new IllegalArgumentException(IllegalArgumentException.ERROR,"Invalid arguments");
};
MenuBar.prototype.deleteShortcut=function(shortCut){
    var nmenus = this.getMenuCount();
	for (var i = 0 ; i < nmenus ; i++) {
	    this.getMenu(i).deleteShortcut(s);
    }
};
MenuBar.prototype.getHelpMenu=function(){
    return this.helpMenu;
};
MenuBar.prototype.getMenu=function(index){
    return this.menus.get(index);
};
MenuBar.prototype.getMenuCount=function(){
    return this.menus.size();
};
MenuBar.prototype.getName=function(){
    return this.name;	
};
MenuBar.prototype.getShortcutMenuItem=function(shortCut){
};
MenuBar.prototype.remove=function(menu){
    this.menus.remove(menu);
};
MenuBar.prototype.removeIndexOf=function(index){
    this.menus.removeIndexOf(index);
};
MenuBar.prototype.setHelpMenu=function(menu){
    this.helpMenu=menu;
};
MenuBar.prototype.setName=function(name){
    this.name=name;	
};
MenuBar.prototype.shortcuts=function(){
    var _shortcuts=new Vector();
    var nmenus = this.getMenuCount();
	for (var i = 0 ; i < nmenus ; i++) {
	    var e = this.getMenu(i).shortcuts();
	    while (e.hasMoreElements()) {
	        _shortcuts.addElement(e.nextElement());
	    }
	}
    return _shortcuts.elements();

};
function MenuItem(label,shortCut){
	this.jsjava_class="jsjava.awt.MenuItem";
    this.label=label;
    this.shortCut=shortCut;
    this.listeners=new ArrayList();
}
MenuItem.prototype.addActionListener=function(listener){
    this.listeners.add(listener);
};
MenuItem.prototype.deleteShortcut=function(s){
    if(this.shortcut.equals(s)){
    	this.shortcut=null;
    }
};
MenuItem.prototype.getActionCommand=function(){
    return this.command;	
};
MenuItem.prototype.getActionListeners=function(){
    return this.label;	
};
MenuItem.prototype.getLabel=function(){
    return this.label;	
};
MenuItem.prototype.getListeners=function(listenerType){
    return this.listeners;
};
MenuItem.prototype.getName=function(){
    return this.name;	
};
MenuItem.prototype.getShortcut=function(){
    return this.shortCut;	
};
MenuItem.prototype.processActionEvent=function(actionEvent){
    for(var i=0;i<this.listeners.size();i++){
    	var listener=this.listeners.get(i);
    	listener.actionPerformed(actionEvent);
    }
};
MenuItem.prototype.removeActionListener=function(listener){
   this.listeners.remove(listener);	
};
MenuItem.prototype.isEnabled=function(){
    return this.enabled;	
};
MenuItem.prototype.setActionCommand=function(command){
    this.command=command;	
};
MenuItem.prototype.setEnabled=function(enabled){
    this.enabled=enabled;	
};
MenuItem.prototype.setLabel=function(label){
    this.label=label;	
};
MenuItem.prototype.setName=function(name){
    this.name=name;	
};
MenuItem.prototype.setShortcut=function(shortCut){
	if(shortCut instanceof MenuShortcut){
    	this.shortCut=shortCut;	
    }

};
function MenuShortcut(key,useShiftModifier){
	this.jsjava_class="jsjava.awt.MenuShortcut";
    this.key=key;
    this.useShiftModifier=useShiftModifier;
}
MenuShortcut.prototype.getKey=function(){
    return this.key;
};
MenuShortcut.prototype.usesShiftModifier=function(){
    return this.useShiftModifier;	
};
MenuShortcut.prototype.toString=function(){
    return this.key;

};
function MozillaHTMLElementPrototype(){
	this.jsjava_class="jsorg.eob.prototype.MozillaHTMLElementPrototype";
}
MozillaHTMLElementPrototype.load=function(){
	var isNoneIE=navigator.userAgent.indexOf("MSIE")==-1;
	if(isNoneIE){
		HTMLElement.prototype.__defineSetter__("outerHTML",function(sHTML){
        var r=this.ownerDocument.createRange();
        r.setStartBefore(this);
        var df=r.createContextualFragment(sHTML);
        this.parentNode.replaceChild(df,this);
        return sHTML;
        });
	    HTMLElement.prototype.__defineGetter__("outerHTML",function(){
	     var attr;
	        var attrs=this.attributes;
	        var str="<"+this.tagName.toLowerCase();
	        for(var i=0;i<attrs.length;i++){
	            attr=attrs[i];
	            if(attr.specified)
	                str+=" "+attr.name+'="'+attr.value+'"';
	            }
	        if(!this.canHaveChildren)
	            return str+">";
	        return str+">"+this.innerHTML+"</"+this.tagName.toLowerCase()+">";
	        });		
        HTMLElement.prototype.__defineGetter__("canHaveChildren",function(){
		  switch(this.tagName.toLowerCase()){
	            case "area":
	            case "base":
	         	case "basefont":
	            case "col":
	            case "frame":
	            case "hr":
	            case "img":
	            case "br":
	            case "input":
	            case "isindex":
	            case "link":
	            case "meta":
	            case "param":
	            return false;
	        }
	        return true;		
     	});        
	}
};

MozillaHTMLElementPrototype.load();
function MozillaXMLDOMPrototype(){
	this.jsjava_class="jsorg.eob.prototype.MozillaXMLDOMPrototype";
}
MozillaXMLDOMPrototype.load=function(){
	var isNoneIE=navigator.userAgent.indexOf("MSIE")==-1;
	if(isNoneIE){
		XMLDocument.prototype.selectNodes=function(xpath){
			var nsResolver = this.createNSResolver(this.documentElement);
			var elems=document.evaluate(xpath, this, nsResolver, XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE,null);
			var elemsLength=elems.snapshotLength;			 
			var arr=new Array(elemsLength);
			for(var i=0;i<elemsLength;i++){
				arr[i]=elems.snapshotItem(i);
			}
			return arr;	
		};
		XMLDocument.prototype.selectSingleNode=function(xpath){
			var nsResolver = this.createNSResolver(this.documentElement);
			var elem=document.evaluate(xpath, this, nsResolver, XPathResult.ANY_UNORDERED_NODE_TYPE,null);
			if(elem){
				elem=elem.singleNodeValue
			}
			return elem;
		};
		Element.prototype.selectNodes=function(xpath){
			var ownerDom=this.ownerDocument;
			var nsResolver = ownerDom.createNSResolver(ownerDom.documentElement);
			var elems=document.evaluate(xpath, this, nsResolver, XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE,null);
			var elemsLength=elems.snapshotLength;			 
			var arr=new Array(elemsLength);
			for(var i=0;i<elemsLength;i++){
				arr[i]=elems.snapshotItem(i);
			}
			return arr;
		};
		Element.prototype.selectSingleNode=function(xpath){
			var ownerDom=this.ownerDocument;
			var nsResolver = ownerDom.createNSResolver(ownerDom.documentElement);
			var elem=document.evaluate(xpath, this, nsResolver, XPathResult.ANY_UNORDERED_NODE_TYPE,null);
			if(elem){
				elem=elem.singleNodeValue
			}
			return elem;
		};
	}
};

MozillaXMLDOMPrototype.load();
function MultiDimensionArrayUtils(){
	this.jsjava_class="jsorg.eob.lang.MultiDimensionArrayUtils";	
}
MultiDimensionArrayUtils.createTwoDimensionArray=function(n,m){
	if(n<0||m<0){
		throw new IllegalArgumentException(
	            IllegalArgumentException.ERROR,"n and m must be postive");
	}
	var arr=new Array(n);
	for(var i=0;i<n;i++){
		arr[i]=new Array(m);
	}
	return arr;
};
MultiDimensionArrayUtils.createThreeDimensionArray=function(n,m,k){
	if(n<0||m<0||k<0){
		throw new IllegalArgumentException(
	            IllegalArgumentException.ERROR,"n and m and k must be postive");
	}
	var arr=new Array(n);
	for(var i=0;i<n;i++){
		arr[i]=new Array(m);
		for(var j=0;j<m;j++){
			arr[i][j]=new Array(k);
		}
	}
	return arr;

};
function MutableTreeNode(){
	this.jsjava_class="jsjavax.swing.tree.MutableTreeNode";
}
MutableTreeNode.prototype=new TreeNode();
MutableTreeNode.prototype.constructor=MutableTreeNode;
MutableTreeNode.prototype.insert=function(child,index){
    throw new IllegalStateException(IllegalStateException.ERROR,"This is an interface method and you should use the concrete method");	
};
MutableTreeNode.prototype.remove=function(index){
    throw new IllegalStateException(IllegalStateException.ERROR,"This is an interface method and you should use the concrete method");	
};
MutableTreeNode.prototype.remove=function(node){
    throw new IllegalStateException(IllegalStateException.ERROR,"This is an interface method and you should use the concrete method");	
};
MutableTreeNode.prototype.removeFromParent=function(){
    throw new IllegalStateException(IllegalStateException.ERROR,"This is an interface method and you should use the concrete method");	
};
MutableTreeNode.prototype.setParent=function(newParent){
    throw new IllegalStateException(IllegalStateException.ERROR,"This is an interface method and you should use the concrete method");	
};
MutableTreeNode.prototype.setUserObject=function(object){
    throw new IllegalStateException(IllegalStateException.ERROR,"This is an interface method and you should use the concrete method");	

};
function NormalDistributionImpl(mean,sd){
	this.jsjava_class="org.apache.commons.math.distribution.NormalDistributionImpl";	
	this.mean = mean;
    if (sd <= 0.0) {
        throw new IllegalArgumentException(
            IllegalArgumentException.ERROR,"Standard deviation must be positive.");
    }       
    this.standardDeviation = sd;
}
NormalDistributionImpl.prototype.cumulativeProbability=function(x){
	return 0.5 * (1.0 + Erf.erf((x - this.mean) /
            (this.standardDeviation * Math.sqrt(2.0))));
};
NormalDistributionImpl.prototype.getDomainLowerBound=function(p){
	var ret;
    if (p < .5) {
        ret = -Double.MAX_VALUE;
    } else {
        ret = this.getMean();
    }
    return ret;
};
NormalDistributionImpl.prototype.getDomainUpperBound=function(p){
	var ret;
    if (p < .5) {
        ret = this.getMean();
    } else {
        ret = Double.MAX_VALUE;
    }
    return ret;
};
NormalDistributionImpl.prototype.getInitialDomain=function(p){
	var ret;
    if (p < .5) {
        ret = this.getMean() - this.getStandardDeviation();
    } else if (p > .5) {
        ret = this.getMean() + this.getStandardDeviation();
    } else {
        ret = this.getMean();
    }
    return ret;
};
NormalDistributionImpl.prototype.getMean=function(){
	return this.mean;
};
NormalDistributionImpl.prototype.getStandardDeviation=function(){
	return this.standardDeviation;
};
NormalDistributionImpl.prototype.setMean=function(mean){
	this.mean = mean;
};
NormalDistributionImpl.prototype.setStandardDeviation=function(sd){
	if (sd <= 0.0) {
        throw new IllegalArgumentException(
            IllegalArgumentException.ERROR,"Standard deviation must be positive.");
    }       
    this.standardDeviation = sd;

};
EmptyStackException.prototype=new Error();
EmptyStackException.prototype.constructor=EmptyStackException;
EmptyStackException.ERROR=0;
function EmptyStackException(code,message){
	this.jsjava_class="jsjava.lang.EmptyStackException";
	this.code=code;
    this.message=message;
    this.name="jsjava.lang.EmptyStackException";

}
NoSuchElementException.prototype=new Error();
NoSuchElementException.prototype.constructor=NoSuchElementException;
NoSuchElementException.ERROR=0;
function NoSuchElementException(code,message){
	this.jsjava_class="jsjava.util.NoSuchElementException";
	this.code=code;
    this.message=message;
    this.name="jsjava.util.NoSuchElementException";
}
NoSuchMethodException.prototype=new Error();
NoSuchMethodException.prototype.constructor=NoSuchMethodException;
NoSuchMethodException.ERROR=0;
function NoSuchMethodException(code,message){
	this.jsjava_class="jsjava.lang.NoSuchMethodException";
	this.code=code;
    this.message=message;
    this.name="jsjava.lang.NoSuchMethodException";

}
NullPointerException.prototype=new Error();
NullPointerException.prototype.constructor=NullPointerException;
NullPointerException.ERROR=0;
function NullPointerException(code,message){
	this.jsjava_class="jsjava.lang.NullPointerException";
	this.code=code;
    this.message=message;
    this.name="jsjava.lang.NullPointerException";

}
function NullValidator(){
	this.jsjava_class="jsorg.eob.validator.NullValidator";
}
NullValidator.validate=function(str){
	return ValidatorUtils.isNull(str);

};
 function NumberFormat(){
     this.jsjava_class="jsjava.text.NumberFormat";
 }
 NumberFormat.prototype=new Format();
 NumberFormat.prototype.constructor=NumberFormat;
 NumberFormat.prototype.format=function(number){
 	 if(isNaN(number)){
     	throw new IllegalArgumentException(IllegalArgumentException.ERROR,"The argument must be a number");
     }
     var pattern=this.pattern;
     if(pattern==""){
     	return number;
     }
     var strNum=new String(number);
     var numNum=parseFloat(number);
     var isNegative=false;
     if(numNum<0){
     	isNegative=true;
     }
     if(isNegative){
     	strNum=strNum.substring(1,strNum.length);
     	numNum=-numNum;
     }
     var ePos=pattern.indexOf("E");
     var pPos=pattern.indexOf("%");
     if(ePos!=-1&&pPos!=-1){
     	throw new IllegalArgumentException(IllegalArgumentException.ERROR,"Malformed exponential pattern : E and % can not be existed at the same time");
     }
     if(ePos!=-1){
     	if(ePos==pattern.length-1){
     		throw new IllegalArgumentException(IllegalArgumentException.ERROR,"Malformed exponential pattern "+this.pattern);
     	}
     	beStr=pattern.substring(0,ePos);
     	aeStr=pattern.substring(ePos+1);
     	var dPos=beStr.indexOf(".");
     	var dPosOfNum=strNum.indexOf(".");
     	if(dPos!=-1){     		
     		if(dPosOfNum==-1){
     			dPosOfNum=strNum.length-1;
     		}
     		var strNumBuffer=new StringBuffer(strNum);
     		strNumBuffer.deleteCharAt(dPosOfNum);
     		strNumBuffer.insert(dPos,".");
     		var snbStr=strNumBuffer.getValue();
     		var adStrLength=beStr.length-dPos;
     		var snbFixed=new Number(parseFloat(snbStr)).toFixed(adStrLength-1);     		
     		var aeLabel=dPosOfNum-dPos;
	     	if(isNegative){
	     		return "-"+snbFixed+"e"+(aeLabel);
	     	}else{
	     		return snbFixed+"e"+(aeLabel);
	     	}
     	}else{
     		if(dPosOfNum==-1){
     			dPosOfNum=strNum.length-1;
     		}
     		var strNumBuffer=new StringBuffer(strNum);
     		strNumBuffer.deleteCharAt(dPosOfNum);
     		strNumBuffer.insert(beStr.length,".");
     		var snbStr=strNumBuffer.getValue();
     		var adStrLength=beStr.length-beStr.length;
     		var snbFixed=-1;
     		if(adStrLength==0){
     			snbFixed=new Number(parseFloat(snbStr)).toFixed();     		
     		}else{
     			snbFixed=new Number(parseFloat(snbStr)).toFixed(adStrLength-1);
     		}
     		var aeLabel=dPosOfNum-beStr.length;
	     	if(isNegative){
	     		return "-"+snbFixed+"e"+(aeLabel);
	     	}else{
	     		return snbFixed+"e"+(aeLabel);
	     	}
     	}    	
     }
     if(pPos!=-1){
     	if(pPos!=pattern.length-1){
     		throw new IllegalArgumentException(IllegalArgumentException.ERROR,"Malformed exponential pattern "+this.pattern);
     	}
   	 	pattern=pattern.substring(0,pattern.length-1);
   	 	numNum=parseFloat(number)*100;
     	strNum=new String(numNum);
     	if(isNegative){
	     	strNum=strNum.substring(1,strNum.length);
	     	numNum=-numNum;
	    }
   	 }    
     var dPos=pattern.indexOf(".");
   	 var dPosOfNum=strNum.indexOf(".");   	
   	 var result=""; 
   	 if(dPos!=-1){     		
   		if(dPosOfNum==-1){
   			dPosOfNum=strNum.length-1;
   		}
   		var adStrLength=pattern.length-dPos;
   		var snbFixed=new Number(parseFloat(strNum)).toFixed(adStrLength-1);   
   		if(isNegative){
     		result="-"+snbFixed;
     	}else{
     		result=snbFixed;
     	}
   	 }else{
   	 	if(dPosOfNum==-1){
   			dPosOfNum=strNum.length-1;
   		}
   		var snbFixed=new Number(parseFloat(strNum)).toFixed();   
   		if(isNegative){
     		result="-"+snbFixed;
     	}else{
     		result=snbFixed;
     	}
   	 }
   	 if(pPos!=-1){
   	 	result+="%";
   	 }
   	 return result;

};
NumberFormatException.prototype=new Error();
NumberFormatException.prototype.constructor=NumberFormatException;
NumberFormatException.NOT_NUMBER=1;
function NumberFormatException(code,message){
	this.jsjava_class="jsjava.lang.NumberFormatException";
	this.code=code;
    this.message=message;
    this.name="jsjava.lang.NumberFormatException";

}
function ObjectPrototype(){
	this.jsjava_class="jsorg.eob.prototype.ObjectPrototype";
}
ObjectPrototype.load=function(){
	
};

ObjectPrototype.load();
function OSUtils(){
	this.jsjava_class="jsorg.eob.os.OSUtils";
}
OSUtils.isWindows=function(){
	return navigator.userAgent.indexOf("Win")!=-1;
};
OSUtils.isMac=function(){
	return navigator.userAgent.indexOf("Mac")!=-1;
};
OSUtils.isUnix=function(){
	return navigator.userAgent.indexOf("X11")!=-1;

};
function OutputDevice(){
	this.jsjava_class="jsjava.io.OutputDevice";
}
OutputDevice.CONSTANT_ILLEGAL_INVOCATION="This is an interface method and you should use the concrete method";
OutputDevice.prototype.println=function(str){
	throw new IllegalStateException(IllegalStateException.ERROR,OutputDevice.CONSTANT_ILLEGAL_INVOCATION);
};
OutputDevice.prototype.print=function(str){
	throw new IllegalStateException(IllegalStateException.ERROR,OutputDevice.CONSTANT_ILLEGAL_INVOCATION);
};
function OutputStream(outputDevice){
	this.jsjava_class="jsjava.io.OutputStream";
	this.outputDevice=outputDevice;
}
function Point(x,y){
	this.jsjava_class="jsjava.awt.Point";
	this.x=x;
	this.y=y;
}
Point.prototype.getX=function(){
    return this.x;
};
Point.prototype.getY=function(){
    return this.y;
};
Point.prototype.getLocation=function(){
    return new Point(this.x,this,y);	
};
Point.prototype.setLocation=function(x,y){
    this.x=x;	
    this.y=y;
};
Point.prototype.translate=function(dx,dy){
    this.x+=dx;
    this.y+=dy;
};
Point.prototype.toString=function(){
    return "{x="+this.x+",y="+this.y+"}"; 

};
function PoissonDistributionImpl(p){
	this.jsjava_class="org.apache.commons.math.distribution.PoissonDistributionImpl";	
	if (p <= 0) {
        throw new IllegalArgumentException(
                IllegalArgumentException.ERROR,"The Poisson mean must be positive");
    }
    this.mean = p;
}
PoissonDistributionImpl.prototype.cumulativeProbability=function(x){
	if (x < 0) {
        return 0;
    }
    if (x == Integer.MAX_VALUE) {
        return 1;
    }
    var sx=new String(x);
	if(sx.indexOf(".")!=-1){
		x=Math.floor(x);
	}
    return Gamma.regularizedGammaQ2(x + 1, this.mean, 
            1E-12, Integer.MAX_VALUE);
};
PoissonDistributionImpl.prototype.getDomainLowerBound=function(p){
	return 0;
};
PoissonDistributionImpl.prototype.getDomainUpperBound=function(p){
	return Integer.MAX_VALUE;
};
PoissonDistributionImpl.prototype.getMean=function(){
	return this.mean;
};
PoissonDistributionImpl.prototype.normalApproximateProbability=function(x){
	var normal = DistributionFactoryImpl.newInstance()
            .createNormalDistribution(this.getMean(),
                    Math.sqrt(this.getMean()));
    // calculate the probability using half-correction
    return normal.cumulativeProbability(x + 0.5);
};
PoissonDistributionImpl.prototype.probability=function(x){
	if (x < 0 || x == Integer.MAX_VALUE) {
        return 0;
    }
    return Math.pow(this.getMean(), x) / 
        MathUtils.factorialDouble(x) * Math.exp(-this.mean);
};
PoissonDistributionImpl.prototype.setMean=function(p){
	if (p <= 0) {
        throw new IllegalArgumentException(
                IllegalArgumentException.ERROR,"The Poisson mean must be positive");
    }
    this.mean = p;

};
function PolynomialFunction(arr){
	this.jsjava_class="jsorg.apache.commons.math.analysis.PolynomialFunction";
	if (arr.length < 1) {
        throw new IllegalArgumentException(IllegalArgumentException.ERROR,"Polynomial coefficient array must have postive length.");
    }
    this.coefficients = new Array(arr.length);
    for(var i=0;i<arr.length;i++){
    	this.coefficients[i]=arr[i];
    }
}
PolynomialFunction.prototype.degree=function(){
	return this.coefficients.length - 1;
};
PolynomialFunction.prototype.derivative=function(){
	return this.polynomialDerivative();
};
PolynomialFunction.prototype.getCoefficients=function(){
	var out = new Array(this.coefficients.length);
	for(var i=0;i<this.coefficients.length;i++){
    	out[i]=this.coefficients[i];
    }
    return out;
};
PolynomialFunction.prototype.polynomialDerivative=function(){
	return new PolynomialFunction(PolynomialFunction.differentiate(this.coefficients));
};
PolynomialFunction.prototype.value=function(x){
	return PolynomialFunction.evaluate(this.coefficients, x);
};
PolynomialFunction.differentiate=function(coefficients){
	var n = coefficients.length;
    if (n < 1) {
        throw new IllegalArgumentException(IllegalArgumentException.ERROR,"Coefficient array must have positive length for differentiation");
    }
    if (n == 1) {
        return [0];
    }
    var result = new Array(n - 1);
    for (var i = n - 1; i  > 0; i--) {
        result[i - 1] = i * coefficients[i];
    }
    return result;
};
PolynomialFunction.evaluate=function(coefficients,argument){
	var n = coefficients.length;
    if (n < 1) {
        throw new IllegalArgumentException(IllegalArgumentException.ERROR,"Coefficient array must have positive length for evaluation");
    }
    var result = coefficients[n - 1];
    for (var j = n -2; j >=0; j--) {
        result = argument * result + coefficients[j];
    }
    return result;

};
function PolynomialSplineFunction(knots,polynomials){
	this.jsjava_class="jsorg.apache.commons.math.analysis.PolynomialSplineFunction";
	if (knots.length < 2) {
        throw new IllegalArgumentException
            (IllegalArgumentException.ERROR,"Not enough knot values -- spline partition must have at least 2 points.");
    }
    if (knots.length - 1 != polynomials.length) {
        throw new IllegalArgumentException 
        (IllegalArgumentException.ERROR,"Number of polynomial interpolants must match the number of segments.");
    }
    if (!PolynomialSplineFunction.isStrictlyIncreasing(knots)) {
        throw new IllegalArgumentException 
            (IllegalArgumentException.ERROR,"Knot values must be strictly increasing.");
    }
    this.n = knots.length -1;
    this.knots = new Array(this.n + 1);
    for(var i=0;i<knots.length;i++){
    	this.knots[i]=knots[i];
    }
    this.polynomials = new Array(this.n);
    for(var i=0;i<polynomials.length;i++){
    	this.polynomials[i]=polynomials[i];
    }
}
PolynomialSplineFunction.prototype.derivative=function(){
	return this.polynomialSplineDerivative();
};
PolynomialSplineFunction.prototype.getKnots=function(){
	var out = new Array(this.n + 1);
    for(var i=0;i<out.length;i++){
    	out[i]=this.knots[i];
    }
    return out;
};
PolynomialSplineFunction.prototype.getPolynomials=function(){
	var p = new Array(this.n);
    for(var i=0;i<p.length;i++){
    	p[i]=this.polynomials[i];
    }
    return p;
};
PolynomialSplineFunction.prototype.polynomialSplineDerivative=function(){
	var derivativePolynomials = new Array(this.n);
    for (var i = 0; i < this.n; i++) {
        derivativePolynomials[i] = this.polynomials[i].polynomialDerivative();
    }
    return new PolynomialSplineFunction(this.knots, derivativePolynomials);
};
PolynomialSplineFunction.prototype.value=function(v){
	if (v < this.knots[0] || v > this.knots[this.n]) {
        throw new FunctionEvaluationException(FunctionEvaluationException.ERROR,"Argument outside domain");
    }
    var i=-1;
    for(var m=0;m<this.knots.length;m++){
    	if(v==this.knots[m]){
    		i=m;
    		break;
    	}
    }
    if (i < 0) {
        i = -i - 2;
    }
    //This will handle the case where v is the last knot value
    //There are only n-1 polynomials, so if v is the last knot
    //then we will use the last polynomial to calculate the value.
    if ( i >= this.polynomials.length ) {
        i--;
    }
    return this.polynomials[i].value(v - this.knots[i]);
};
PolynomialSplineFunction.isStrictlyIncreasing=function(arr) {
    for (var i = 1; i < arr.length; ++i) {
        if (arr[i - 1] >= arr[i]) {
            return false;
        }
    }
    return true;

};
function PrintStream(outputStream){
	this.jsjava_class="jsjava.io.PrintStream";
	this.outputStream=outputStream;
}
PrintStream.prototype=new OutputStream();
PrintStream.prototype.constructor=PrintStream;
PrintStream.prototype.println=function(str){
	this.outputStream.outputDevice.println(str);
};
PrintStream.prototype.print=function(str){
	this.outputStream.outputDevice.print(str);
};
function RandomStringUtils(){
	this.jsjava_class="jsorg.apache.commons.lang.RandomStringUtils";
}
RandomStringUtils.random=function(count,letters,numbers){
	if(isNaN(count)){
		return;
	}
	if(count<0){
		return;
	}
	if(count==0){
		return "";
	}
	var minAlpha="a".charCodeAt(0);
	var maxAlpha="z".charCodeAt(0);
	var alphas=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
	var digits=["0","1","2","3","4","5","6","7","8","9"];
	if(!letters&&numbers){
		var str="";
		for(var i=0;i<count;i++){
			str+=digits[Math.floor(Math.random()*10)];
		}
		return str;
	}
	if(letters&&!numbers){
		var str="";
		for(var i=0;i<count;i++){
			str+=alphas[Math.floor(Math.random()*26)];
		}
		return str;
	}
	if(letters&&numbers||!letters&&!numbers){
		var str="";
		for(var i=0;i<count;i++){
			var r=Math.floor(Math.random()*2);
			if(r==0){
				str+=alphas[Math.floor(Math.random()*26)];
			}else if(r==1){
				str+=digits[Math.floor(Math.random()*10)];
			}
		}
		return str;
	}
	return "";
};
RandomStringUtils.randomAlphabetic=function(count){
	return RandomStringUtils.random(count,true,false);
};
RandomStringUtils.randomAlphanumeric=function(count){
	return RandomStringUtils.random(count,true,true);
};
RandomStringUtils.randomNumeric=function(count){
	return RandomStringUtils.random(count,false,true);

};
function RealMatrixImpl(rowDimension,columnDimension){
	this.jsjava_class="org.apache.commons.math.linear.RealMatrixImpl";
	if(rowDimension==undefined||columnDimension==undefined){
	}else{
		if (rowDimension <= 0 || columnDimension <= 0) {
		    throw new IllegalArgumentException(
		            IllegalArgumentException.ERROR,"row and column dimensions must be postive");
		}
		this.data = new Array(rowDimension);
		for(var i=0;i<rowDimension;i++){
			this.data[i]=new Array(columnDimension);
		}
		this.lu = null;
    }
    this.parity=1;
}
RealMatrixImpl.TOO_SMALL= 10E-12;
RealMatrixImpl.CreateBlankRealMatrixImpl=function(){
	return new RealMatrixImpl();
};
RealMatrixImpl.CreateRealMatrixImplByFullArray=function(d){
	var row=0;
	var column=0;
	if ((row < 0) || (column < 0)){
        throw new MatrixIndexException
            (MatrixIndexException.ERROR,"invalid row or column index selection");          
    }
    var subMatrix=d;
    var nRows = subMatrix.length;
    if (nRows == 0) {
        throw new IllegalArgumentException(IllegalArgumentException.ERROR,
        "Matrix must have at least one row."); 
    }
    var nCols = subMatrix[0].length;
    if (nCols == 0) {
        throw new IllegalArgumentException(IllegalArgumentException.ERROR,
        "Matrix must have at least one column."); 
    }    
    var matrix=new RealMatrixImpl(nRows,nCols);
    for (var r = 1; r < nRows; r++) {
        if (subMatrix[r].length != nCols) {
            throw new IllegalArgumentException(IllegalArgumentException.ERROR,
            "All input rows must have the same length.");
        }
    }        
    if ((row > 0)||(column > 0)) {
    	throw new MatrixIndexException(MatrixIndexException.ERROR,"matrix must be initialized to perfom this method");
    }
    matrix.data = new Array(nRows);
    for(var i=0;i<nRows;i++){
		matrix.data[i]=new Array(nCols);
	}
    for(var i=0;i<nRows;i++){
    	for(var j=0;j<nCols;j++){
    		matrix.data[i][j]=subMatrix[i][j];
    	}
    }     
    if (((nRows + row) > matrix.getRowDimension()) ||(nCols + column > matrix.getColumnDimension())){
        throw new MatrixIndexException(MatrixIndexException.ERROR,"invalid row or column index selection");  
    }                 
    for (var i = 0; i < nRows; i++) {
        for(var j=0;j<nCols;j++){
        	matrix.data[row + i][j]=subMatrix[i][j];
        }
    } 
    matrix.lu = null;
    return matrix;
};
RealMatrixImpl.prototype.copy=function(){
	return RealMatrixImpl.CreateRealMatrixImplByFullArray(this.copyOut());
};
RealMatrixImpl.prototype.add=function(m){
	if (this.getColumnDimension() != m.getColumnDimension() ||
            this.getRowDimension() != m.getRowDimension()) {
        throw new IllegalArgumentException(IllegalArgumentException.ERROR,"matrix dimension mismatch");
    }
    var rowCount = this.getRowDimension();
    var columnCount = this.getColumnDimension();
    var outData = new Array(rowCount);
    for(var i=0;i<rowCount;i++){
    	outData[i]=new Array(columnCount);
    }
    for (var row = 0; row < rowCount; row++) {
        for (var col = 0; col < columnCount; col++) {
            outData[row][col] = this.data[row][col] + m.getEntry(row, col);
        }  
    }
    return RealMatrixImpl.CreateRealMatrixImplByFullArray(outData);
};
RealMatrixImpl.prototype.subtract=function(m){
	if (this.getColumnDimension() != m.getColumnDimension() ||
            this.getRowDimension() != m.getRowDimension()) {
        throw new IllegalArgumentException(IllegalArgumentException.ERROR,"matrix dimension mismatch");
    }
    var rowCount = this.getRowDimension();
    var columnCount = this.getColumnDimension();
    var outData = new Array(rowCount);
    for(var i=0;i<rowCount;i++){
    	outData[i]=new Array(columnCount);
    }
    for (var row = 0; row < rowCount; row++) {
        for (var col = 0; col < columnCount; col++) {
            outData[row][col] = this.data[row][col] - m.getEntry(row, col);
        }
    }
    return RealMatrixImpl.CreateRealMatrixImplByFullArray(outData);
};
RealMatrixImpl.prototype.scalarAdd=function(d){
	var rowCount = this.getRowDimension();
    var columnCount = this.getColumnDimension();
    var outData = new Array(rowCount);
    for(var i=0;i<rowCount;i++){
    	outData[i]=new Array(columnCount);
    }
    for (var row = 0; row < rowCount; row++) {
        for (var col = 0; col < columnCount; col++) {
            outData[row][col] = this.data[row][col] + d;
        }
    }
    return RealMatrixImpl.CreateRealMatrixImplByFullArray(outData);
};
RealMatrixImpl.prototype.scalarMultiply=function(d){
	var rowCount = this.getRowDimension();
    var columnCount = this.getColumnDimension();
    var outData = new Array(rowCount);
    for(var i=0;i<rowCount;i++){
    	outData[i]=new Array(columnCount);
    }
    for (var row = 0; row < rowCount; row++) {
        for (var col = 0; col < columnCount; col++) {
            outData[row][col] = this.data[row][col] * d;
        }
    }
    return RealMatrixImpl.CreateRealMatrixImplByFullArray(outData);
};
RealMatrixImpl.prototype.multiply=function(m){
	if (this.getColumnDimension() != m.getRowDimension()) {
        throw new IllegalArgumentException(IllegalArgumentException.ERROR,"Matrices are not multiplication compatible.");
    }
    var nRows = this.getRowDimension();
    var nCols = m.getColumnDimension();
    var nSum = this.getColumnDimension();
    var outData = new Array(nRows);
    for(var i=0;i<nRows;i++){
    	outData[i]=new Array(nCols);
    }
    var sum = 0;
    for (var row = 0; row < nRows; row++) {
        for (var col = 0; col < nCols; col++) {
            sum = 0;
            for (var i = 0; i < nSum; i++) {
                sum += this.data[row][i] * m.getEntry(i, col);
            }
            outData[row][col] = sum;
        }
    }
    return RealMatrixImpl.CreateRealMatrixImplByFullArray(outData);
};
RealMatrixImpl.prototype.preMultiply=function(m){
	return m.multiply(this);
};
RealMatrixImpl.prototype.getData=function(){
	return this.copyOut();
};
RealMatrixImpl.prototype.getDataRef=function(){
	return this.data;
};
RealMatrixImpl.prototype.getNorm=function(){
	var maxColSum = 0;
    for (var col = 0; col < this.getColumnDimension(); col++) {
        var sum = 0;
        for (var row = 0; row < this.getRowDimension(); row++) {
            sum += Math.abs(this.data[row][col]);
        }
        maxColSum = Math.max(maxColSum, sum);
    }
    return maxColSum;
};
RealMatrixImpl.prototype.getSubMatrix=function(startRow,endRow,startColumn,endColumn){
	if (startRow < 0 || startRow > endRow || endRow > this.data.length ||
         startColumn < 0 || startColumn > endColumn ||
         endColumn > this.data[0].length ) {
        throw new MatrixIndexException(MatrixIndexException.ERROR,
                "invalid row or column index selection");
    }
    var subMatrix = new RealMatrixImpl(endRow - startRow+1,
            endColumn - startColumn+1);
    var subMatrixData = subMatrix.getDataRef();
    for (var i = startRow; i <= endRow; i++) {
        for (var j = startColumn; j <= endColumn; j++) {
                subMatrixData[i - startRow][j - startColumn] = this.data[i][j];
            }
        }
    return subMatrix;
};
RealMatrixImpl.prototype.getSubMatrix2=function(selectedRows,selectedColumns){
	if (selectedRows.length * selectedColumns.length == 0) {
        throw new MatrixIndexException(MatrixIndexException.ERROR,
                "selected row and column index arrays must be non-empty");
    }
    var subMatrix = new RealMatrixImpl(selectedRows.length,
            selectedColumns.length);
    var subMatrixData = subMatrix.getDataRef();
    try  {
        for (var i = 0; i < selectedRows.length; i++) {
            for (var j = 0; j < selectedColumns.length; j++) {
                subMatrixData[i][j] = this.data[selectedRows[i]][selectedColumns[j]];
            }
        }
    } catch (e) {
        throw new MatrixIndexException(MatrixIndexException.ERROR,"matrix dimension mismatch");
    }
    return subMatrix;
};
RealMatrixImpl.prototype.setSubMatrix=function(subMatrix,row,column){
	if ((row < 0) || (column < 0)){
        throw new MatrixIndexException
            (MatrixIndexException.ERROR,"invalid row or column index selection");          
    }
    var nRows = subMatrix.length;
    if (nRows == 0) {
        throw new IllegalArgumentException(IllegalArgumentException.ERROR,
        "Matrix must have at least one row."); 
    }
    var nCols = subMatrix[0].length;
    if (nCols == 0) {
        throw new IllegalArgumentException(IllegalArgumentException.ERROR,
        "Matrix must have at least one column."); 
    }
    for (var r = 1; r < nRows; r++) {
        if (subMatrix[r].length != nCols) {
            throw new IllegalArgumentException(IllegalArgumentException.ERROR,
            "All input rows must have the same length.");
        }
    }       
    if (this.data == null) {
        if ((row > 0)||(column > 0)) throw new MatrixIndexException
            (MatrixIndexException.ERROR,"matrix must be initialized to perfom this method");
        this.data = new Array(nRows);		    
		for(var i=0;i<nRows;i++){
			outData[i]=new Array(nCols);
		}
        var values=subMatrix.getData();
        for (var i = 0; i < nRows; i++) {
		    for (var j = 0; j < nCols; j++) {
		        this.data[i][j]=values[i][j];
		    }
		}   
    }   
    if (((nRows + row) > this.getRowDimension()) ||
        (nCols + column > this.getColumnDimension()))
        throw new MatrixIndexException(MatrixIndexException.ERROR,
                "invalid row or column index selection");                   
    for (var i = 0; i < nRows; i++) {
        for(var j=0;j<nCols;j++){
        	this.data[row + i][j]=subMatrix[i][j];
        }
    } 
    this.lu = null;
};
RealMatrixImpl.prototype.getRowMatrix=function(row){
	if ( !this.isValidCoordinate( row, 0)) {
        throw new MatrixIndexException(MatrixIndexException.ERROR,"illegal row argument");
    }
    var ncols = this.getColumnDimension();
    var out=new Array(row);
    for(var i=0;i<row;i++){
    	out[i]=new Array(1);
    }
    for(var j=0;j<ncols;j++){
    	out[0][j]=this.data[row][j];
    }
    return RealMatrixImpl.CreateRealMatrixImplByFullArray(out);
};
RealMatrixImpl.prototype.getColumnMatrix=function(column){
	if ( !this.isValidCoordinate( 0, column)) {
        throw new MatrixIndexException("illegal column argument");
    }
    var nRows = this.getRowDimension();
    var out=new Array(nRows);
    for(var i=0;i<nRows;i++){
    	out[i]=new Array(1);
    }
    for (var i = 0; i < nRows; i++) {
        out[i][0] = this.data[i][column];
    }
    return RealMatrixImpl.CreateRealMatrixImplByFullArray(out);
};
RealMatrixImpl.prototype.getRow=function(row){
	if ( !this.isValidCoordinate( row, 0 ) ) {
        throw new MatrixIndexException(MatrixIndexException.ERROR,"illegal row argument");
    }
    var ncols = this.getColumnDimension();
    var out = new Array(ncols);
    for(var j=0;j<ncols;j++){
    	out[j]=this.data[row][j];
    }
    return out;
};
RealMatrixImpl.prototype.getColumn=function(col){
	if ( !this.isValidCoordinate(0, col) ) {
        throw new MatrixIndexException(MatrixIndexException.ERROR,"illegal column argument");
    }
    var nRows = this.getRowDimension();
    var out = new Array(nRows);
    for (var i = 0; i < nRows; i++) {
        out[i] = this.data[i][col];
    }
    return out;
};
RealMatrixImpl.prototype.getEntry=function(row,column){
	if (!this.isValidCoordinate(row,column)) {
        throw new MatrixIndexException(MatrixIndexException.ERROR,"matrix entry does not exist");
    }
    return this.data[row][column];
};
RealMatrixImpl.prototype.transpose=function(){
	var nRows = this.getRowDimension();
    var nCols = this.getColumnDimension();
    var out = new RealMatrixImpl(nCols, nRows);
    var outData = out.getDataRef();
    for (var row = 0; row < nRows; row++) {
        for (var col = 0; col < nCols; col++) {
            outData[col][row] = this.data[row][col];
        }
    }
    return out;
};
RealMatrixImpl.prototype.inverse=function(){
	return this.solveMatrix(MatrixUtils.createRealIdentityMatrix
            (this.getRowDimension()));
};
RealMatrixImpl.prototype.getDeterminant=function(){
	if (!this.isSquare()) {
        throw new InvalidMatrixException(InvalidMatrixException.ERROR,"matrix is not square");
    }
    if (this.isSingular()) {   // note: this has side effect of attempting LU decomp if lu == null
        return 0;
    } else {
        var det = this.parity;
        for (var i = 0; i < this.getRowDimension(); i++) {
            det *= this.lu[i][i];
        }
        return det;
    }
};
RealMatrixImpl.prototype.isSquare=function(){
	return (this.getColumnDimension() == this.getRowDimension());
};
RealMatrixImpl.prototype.isSingular=function(){
	if (this.lu == undefined||this.lu==null) {
        try {
            this.luDecompose();
            return false;
        } catch (ex) {
            return true;
        }
    } else { // LU decomp must have been successfully performed
        return false; // so the matrix is not singular
    }
};
RealMatrixImpl.prototype.getRowDimension=function(){
	return this.data.length;
};
RealMatrixImpl.prototype.getColumnDimension=function(){
	return this.data[0].length;
};
RealMatrixImpl.prototype.getTrace=function(){
	if (!this.isSquare()) {
        throw new IllegalArgumentException(IllegalArgumentException.ERROR,"matrix is not square");
    }
    var trace = this.data[0][0];
    for (var i = 1; i < this.getRowDimension(); i++) {
        trace += this.data[i][i];
    }
    return trace;
};
RealMatrixImpl.prototype.operate=function(v){
	if (v.length != this.getColumnDimension()) {
        throw new IllegalArgumentException(IllegalArgumentException.ERROR,"vector has wrong length");
    }
    var nRows = this.getRowDimension();
    var nCols = this.getColumnDimension();
    var out = new Array(v.length);
    for (var row = 0; row < nRows; row++) {
        var sum = 0;
        for (var i = 0; i < nCols; i++) {
            sum += this.data[row][i] * v[i];
        }
        out[row] = sum;
    }
    return out;
};
RealMatrixImpl.prototype.preMultiplyArray=function(v){
	var nRows = this.getRowDimension();
    if (v.length != nRows) {
        throw new IllegalArgumentException(IllegalArgumentException.ERROR,"vector has wrong length");
    }
    var nCols = this.getColumnDimension();
    var out = new Array(nCols);
    for (var col = 0; col < nCols; col++) {
        var sum = 0;
        for (var i = 0; i < nRows; i++) {
            sum += this.data[i][col] * v[i];
        }
        out[col] = sum;
    }
    return out;
};
RealMatrixImpl.prototype.solve=function(b){	
	var nRows = this.getRowDimension();
	if (b.length != nRows) {
        throw new IllegalArgumentException(IllegalArgumentException.ERROR,"constant vector has wrong length");
    }
    var bMatrix = RealMatrixImpl.CreateRealMatrixImplByFullArray(b);
    var solution =  this.solveMatrix(bMatrix).getDataRef();
    var out = new Array(nRows);
    for (var row = 0; row < nRows; row++) {
        out[row] = solution[row][0];
    }
    return out;
};
RealMatrixImpl.prototype.solveMatrix=function(b){
	if (b.getRowDimension() != this.getRowDimension()) {
        throw new IllegalArgumentException(IllegalArgumentException.ERROR,"Incorrect row dimension");
    }
    if (!this.isSquare()) {
        throw new InvalidMatrixException(InvalidMatrixException.ERROR,"coefficient matrix is not square");
    }
    if (this.isSingular()) { // side effect: compute LU decomp
        throw new InvalidMatrixException(InvalidMatrixException.ERROR,"Matrix is singular.");
    }
    var nCol = this.getColumnDimension();
    var nColB = b.getColumnDimension();
    var nRowB = b.getRowDimension();
    // Apply permutations to b
    var bp=new Array(nRowB);
    for(var i=0;i<nRowB;i++){
    	bp[i]=new Array(nColB);
    }
    for (var row = 0; row < nRowB; row++) {
        for (var col = 0; col < nColB; col++) {
            bp[row][col] = b.getEntry(this.permutation[row], col);
        }
    }
    // Solve LY = b
    for (var col = 0; col < nCol; col++) {
        for (var i = col + 1; i < nCol; i++) {
            for (var j = 0; j < nColB; j++) {
                bp[i][j] -= bp[col][j] * this.lu[i][col];
            }
        }
    }
    // Solve UX = Y
    for (var col = nCol - 1; col >= 0; col--) {
        for (var j = 0; j < nColB; j++) {
            bp[col][j] /= this.lu[col][col];
        }
        for (var i = 0; i < col; i++) {
            for (var j = 0; j < nColB; j++) {
                bp[i][j] -= bp[col][j] * this.lu[i][col];
            }
        }
    }
    var outMat = RealMatrixImpl.CreateRealMatrixImplByFullArray(bp);
    return outMat;
};
RealMatrixImpl.prototype.luDecompose=function(){
	var nRows = this.getRowDimension();
    var nCols = this.getColumnDimension();
    if (nRows != nCols) {
        throw new InvalidMatrixException(InvalidMatrixException.ERROR,"LU decomposition requires that the matrix be square.");
    }
    this.lu = this.getData();
    // Initialize permutation array and parity
    this.permutation = new Array(nRows);
    for (var row = 0; row < nRows; row++) {
        this.permutation[row] = row;
    }
    this.parity = 1;
    // Loop over columns
    for (var col = 0; col < nCols; col++) {
        var sum = 0;
        // upper
        for (var row = 0; row < col; row++) {
            sum = this.lu[row][col];
            for (var i = 0; i < row; i++) {
                sum -= this.lu[row][i] * this.lu[i][col];
            }
            this.lu[row][col] = sum;
        }
        // lower
        var max = col; // permutation row
        var largest = 0;
        for (var row = col; row < nRows; row++) {
            sum = this.lu[row][col];
            for (var i = 0; i < col; i++) {
                sum -= this.lu[row][i] * this.lu[i][col];
            }
            this.lu[row][col] = sum;
            // maintain best permutation choice
            if (Math.abs(sum) > largest) {
                largest = Math.abs(sum);
                max = row;
            }
        }
        // Singularity check
        if (Math.abs(this.lu[max][col]) < RealMatrixImpl.TOO_SMALL) {
            this.lu = null;
            throw new InvalidMatrixException(InvalidMatrixException.ERROR,"matrix is singular");
        }
        // Pivot if necessary
        if (max != col) {
            var tmp = 0;
            for (var i = 0; i < nCols; i++) {
                tmp = this.lu[max][i];
                this.lu[max][i] = this.lu[col][i];
                this.lu[col][i] = tmp;
            }
            var temp = this.permutation[max];
            this.permutation[max] = this.permutation[col];
            this.permutation[col] = temp;
            this.parity = -this.parity;
        }
        //Divide the lower elements by the "winning" diagonal elt.
        for (var row = col + 1; row < nRows; row++) {
            this.lu[row][col] /= this.lu[col][col];
        }
    }
};
RealMatrixImpl.prototype.toString=function(){
	var res = new StringBuffer();
    res.append("RealMatrixImpl{");
    if (this.data != null) {
        for (var i = 0; i < this.data.length; i++) {
            if (i > 0)
                res.append(",");
            res.append("{");
            for (var j = 0; j < this.data[0].length; j++) {
                if (j > 0)
                    res.append(",");
                res.append(this.data[i][j]);
            } 
            res.append("}");
        } 
    }
    res.append("}");
    return res.toString();
};
RealMatrixImpl.prototype.equals=function(o){
	if(!o||!o.jsjava_class||o.jsjava_class!="org.apache.commons.math.linear.RealMatrixImpl"){
		return false;
	}
	var nRows = this.getRowDimension();
    var nCols = this.getColumnDimension();
    if (o.getColumnDimension() != nCols || o.getRowDimension() != nRows) {
        return false;
    }
    for (var row = 0; row < nRows; row++) {
        for (var col = 0; col < nCols; col++) {
            if (this.data[row][col] != o.getEntry(row, col)) {
                return false;
            }
        }
    }
    return true;
};
RealMatrixImpl.prototype.getLUMatrix=function(){
	if (this.lu == null) {
        this.luDecompose();
    }
    return RealMatrixImpl.CreateRealMatrixImplByFullArray(this.lu);
};
RealMatrixImpl.prototype.getPermutation=function(){
	var out = new Array(this.permutation.length);
	for(var i=0;i<this.permutation.length;i++){
		out[i]=this.permutation[i];
	}
    return out;
};
RealMatrixImpl.prototype.copyOut=function(){
	var nRows = this.getRowDimension();
	var nCols=this.getColumnDimension();
    var out=new Array(nRows);
    for(var i=0;i<nRows;i++){
    	out[i]=new Array(nCols);
    }
    // can't copy 2-d array in one shot, otherwise get row references
    for (var i = 0; i < nRows; i++) {
        for(var j=0;j<nCols;j++){
        	out[i][j]=this.data[i][j];
        }
    }
    return out;
};
RealMatrixImpl.prototype.copyIn=function(ins){
	this.setSubMatrix(ins,0,0);
};
RealMatrixImpl.prototype.isValidCoordinate=function(row,col){
	var nRows = this.getRowDimension();
    var nCols = this.getColumnDimension();
    return !(row < 0 || row > nRows - 1 || col < 0 || col > nCols -1);

};
function Rectangle(x,y,width,height){
	this.jsjava_class="jsjava.awt.Rectangle";
	this.x=x;
	this.y=y;
	this.width=width;
	this.height=height;
}
Rectangle.prototype.add=function(newx,newy){
    var x1 = Math.min(this.x, newx);
	var x2 = Math.max(this.x + this.width, newx);
	var y1 = Math.min(this.y, newy);
	var y2 = Math.max(this.y + this.height, newy);
	x = x1;
	y = y1;
	this.width = x2 - x1;
	this.height = y2 - y1;	
};
Rectangle.prototype.contains=function(X,Y,W,H){
	if(W==undefined){
		W=0;
	}
	if(H==undefined){
		H=0;
	}
    var w = this.width;
	var h = this.height;
	if ((w | h | W | H) < 0) {
	    return false;
	}
	var x = this.x;
	var y = this.y;
	if (X < x || Y < y) {
	    return false;
	}
	w += x;
	W += X;
	if (W <= X) {
	   if (w >= x || W > w) return false;
	} else {
	    if (w >= x && W > w) return false;
	}
	h += y;
	H += Y;
	if (H <= Y) {
	    if (h >= y || H > h) return false;
	} else {
	    if (h >= y && H > h) return false;
	}
	return true;	
};
Rectangle.prototype.getHeight=function(){
    return this.height;	
};
Rectangle.prototype.getWidtht=function(){
    return this.width;	
};
Rectangle.prototype.getX=function(){
    return this.x;	
};
Rectangle.prototype.getY=function(){
    return this.y;	
};
Rectangle.prototype.grow=function(h,v){
    this.x -= h;
	this.y -= v;
	this.width += h * 2;
	this.height += v * 2;	
};
Rectangle.prototype.intersection=function(r){
    var tx1 = this.x;
	var ty1 = this.y;
	var rx1 = r.x;
	var ry1 = r.y;
	var tx2 = tx1; tx2 += this.width;
	var ty2 = ty1; ty2 += this.height;
	var rx2 = rx1; rx2 += r.width;
	var ry2 = ry1; ry2 += r.height;
	if (tx1 < rx1) tx1 = rx1;
	if (ty1 < ry1) ty1 = ry1;
	if (tx2 > rx2) tx2 = rx2;
	if (ty2 > ry2) ty2 = ry2;
	tx2 -= tx1;
	ty2 -= ty1;
	if (tx2 < Integer.MIN_VALUE) tx2 = Integer.MIN_VALUE;
	if (ty2 < Integer.MIN_VALUE) ty2 = Integer.MIN_VALUE;
	return new Rectangle(tx1, ty1, tx2, ty2);	
};
Rectangle.prototype.intersects=function(r){
	var tw = this.width;
	var th = this.height;
	var rw = r.width;
	var rh = r.height;
	if (rw <= 0 || rh <= 0 || tw <= 0 || th <= 0) {
	    return false;
	}
	var tx = this.x;
	var ty = this.y;
	var rx = r.x;
	var ry = r.y;
	rw += rx;
	rh += ry;
	tw += tx;
	th += ty;
	return ((rw < rx || rw > tx) &&
		(rh < ry || rh > ty) &&
		(tw < tx || tw > rx) &&
		(th < ty || th > ry));    	
};
Rectangle.prototype.isEmpty=function(r){
    return (this.width <= 0) || (this.height <= 0);
};
Rectangle.prototype.setBounds=function(x,y,width,height){
    this.x = x;
	this.y = y;
	this.width = width;
	this.height = height;
};
Rectangle.prototype.setLocation=function(x,y){
    this.x = x;
	this.y = y;
};
Rectangle.prototype.setSize=function(width,height){
    this.width=width;
    this.height=height;	
};
Rectangle.prototype.union=function(r){
    var x1 = Math.min(this.x, r.x);
	var x2 = Math.max(this.x + this.width, r.x + r.width);
	var y1 = Math.min(this.y, r.y);
	var y2 = Math.max(this.y + this.height, r.y + r.height);
	return new Rectangle(x1, y1, x2 - x1, y2 - y1);
};
Rectangle.prototype.toString=function(){
    return "{x="+this.x+",y="+this.y+",width="+this.width+",height="+this.height+"}"; 

};
SecurityException.prototype=new Error();
SecurityException.prototype.constructor=SecurityException;
SecurityException.ERROR=0;
function SecurityException(code,message){
	this.jsjava_class="jsjava.lang.SecurityException";
	this.code=code;
    this.message=message;
    this.name="jsjava.lang.SecurityException";

}
function Short(value){
	this.jsjava_class="jsjava.lang.Short";
    this.value=value;
}
Short.MIN=-Math.pow(2,15);
Short.MAX=Math.pow(2,15)-1;
Short.MIN_VALUE=-Math.pow(2,15);
Short.MAX_VALUE=Math.pow(2,15)-1;
Short.checkValid=function(s){
	if(isNaN(s)){
		return false;
	}
	if(typeof(s)=="number"){
		if(Math.floor(s)!=s){
			return false;
		}
	}else{
		if(s.indexOf(".")!=-1){
			return false;
		}
	}
	s=parseInt(s);
	if(s<=Short.MAX&&s>=Short.MIN){
    	return true;
    }
    return false;
};
Short.parseShort=function(str){
    if(isNaN(str)){
		throw new NumberFormatException(NumberFormatException.NOT_NUMBER,"Not a number Exception!");
	}
    var s=parseInt(str);
    if(!Short.checkValid(s)){
        return;
    }
    return s;
};
Short.prototype.compareTo=function(b){
    if(b==undefined){
        return -1; 
    }
    if(this.value>b.value){
        return 1; 
    }else if(this.value==b.value){
        return 0; 
    }else{
        return -1;  
    }
};
Short.prototype.shortValue=function(){
    return this.value; 
};
Short.prototype.toString=function(){
    return this.value; 
};
Short.prototype.equals=function(o){
    if(o==undefined){
        return false; 
    }
    if(o.jsjava_class&&o.jsjava_class=="jsjava.lang.Short"){
        return this.value==o.value; 
    } 
    return false;

};
function ShortValidator(){
	this.jsjava_class="jsorg.eob.validator.ShortValidator";
}
ShortValidator.validate=function(str){
	return ValidatorUtils.isShort(str);

};
 function SimpleDateFormat(){
     this.jsjava_class="jsjava.text.SimpleDateFormat";
 }
 SimpleDateFormat.prototype=new DateFormat();
 SimpleDateFormat.prototype.constructor=SimpleDateFormat;
 SimpleDateFormat.prototype.applyPattern=function(pattern){
     this.pattern=pattern;

};
function SplineInterpolator(){
	this.jsjava_class="jsorg.apache.commons.math.analysis.SplineInterpolator";
}
SplineInterpolator.prototype.interpolate=function(arrx,arry){
	if (arrx.length != arry.length) {
            throw new IllegalArgumentException(IllegalArgumentException.ERROR,"Dataset arrays must have same length.");
        }
        if (arrx.length < 3) {
            throw new IllegalArgumentException
                (IllegalArgumentException.ERROR,"At least 3 datapovars are required to compute a spline varerpolant");
        }
        // Number of varervals.  The number of data povars is n + 1.
        var n = arrx.length - 1;   
        for (var i = 0; i < n; i++) {
            if (arrx[i]  >= arrx[i + 1]) {
                throw new IllegalArgumentException(IllegalArgumentException.ERROR,"Dataset arrx values must be strictly increasing.");
            }
        }
        // Differences between knot povars
        var h = new Array(n);
        for (var i = 0; i < n; i++) {
            h[i] = arrx[i + 1] - arrx[i];
        }
        var mu = new Array(n);
        var z = new Array(n + 1);
        mu[0] = 0;
        z[0] = 0;
        var g = 0;
        for (var i = 1; i < n; i++) {
            g = 2 * (arrx[i+1]  - arrx[i - 1]) - h[i - 1] * mu[i -1];
            mu[i] = h[i] / g;
            z[i] = (3 * (arry[i + 1] * h[i - 1] - arry[i] * (arrx[i + 1] - arrx[i - 1])+ arry[i - 1] * h[i]) /
                    (h[i - 1] * h[i]) - h[i - 1] * z[i - 1]) / g;
        }
        // cubic spline coefficients --  b is linear, c quadratic, d is cubic (original arry's are constants)
        var b = new Array(n);
        var c = new Array(n+1);
        var d = new Array(n);
        z[n] = 0;
        c[n] = 0;
        for (var j = n -1; j >=0; j--) {
            c[j] = z[j] - mu[j] * c[j + 1];
            b[j] = (arry[j + 1] - arry[j]) / h[j] - h[j] * (c[j + 1] + 2 * c[j]) / 3;
            d[j] = (c[j + 1] - c[j]) / (3 * h[j]);
        }
        var polynomials = new Array(n);
        var coefficients = new Array(4);
        for (var i = 0; i < n; i++) {
            coefficients[0] = arry[i];
            coefficients[1] = b[i];
            coefficients[2] = c[i];
            coefficients[3] = d[i];
            polynomials[i] = new PolynomialFunction(coefficients);
        }
        return new PolynomialSplineFunction(arrx, polynomials);

};
function StatUtils(){
	this.jsjava_class="org.apache.commons.math.stat.StatUtils";
}
StatUtils.geometricMean=function(values){
	return Math.pow(StatUtils.product(values),1/values.length);
};
StatUtils.max=function(values){
	var max=Double.MIN_VALUE;
	for(var i=0;i<values.length;i++){
		var value=values[i];
		if(value>max){
			max=value;
		}
	}
	return max;
};
StatUtils.mean=function(values){
	return StatUtils.sum(values)/values.length;
};
StatUtils.meanDifference=function(sample1,sample2){
	var length1=sample1.length;
	var length2=sample2.length;
	if(!length1||!length2||length1!=length2){
		return new IllegalArgumentException ("Input arrays must have the same (positive) length.");
	}
	var sample=new Array(length1);
	for(var i=0;i<length1;i++){
		sample[i]=sample1[i]-sample2[i];
	}
	return StatUtils.mean(sample);
};
StatUtils.min=function(values){
	var min=Double.MAX_VALUE;
	for(var i=0;i<values.length;i++){
		var value=values[i];
		if(value<min){
			min=value;
		}
	}
	return min;
};
StatUtils.percentile=function(values,p){
	if ((p > 100) || (p <= 0)) {
        throw new IllegalArgumentException("invalid quantile value: " + p);
    }
    var length=values.length;
    if (length == 0) {
        return Double.NaN;
    }
    if (length == 1) {
        return values[0]; // always return single value for n = 1
    }
    var n =  length;
    var pos = p * (n + 1) / 100;
    var fpos = Math.floor(pos);
    var intPos =  fpos;
    var dif = pos - fpos;
    var sorted = new Array(length);
    for(var i=0;i<length;i++){
    	sorted[i]=values[i];
    }
    sorted.sort();
    if (pos < 1) {
        return sorted[0];
    }
    if (pos >= n) {
        return sorted[length - 1];
    }
    var lower = sorted[intPos - 1];
    var upper = sorted[intPos];
    return lower + dif * (upper - lower);
};
StatUtils.product=function(values){
	var value=1;
	for(var i=0;i<values.length;i++){
		value*=values[i];
	}
	return value;
};
StatUtils.sum=function(values){
	var sum=0;
	for(var i=0;i<values.length;i++){
		sum+=values[i];
	}
	return sum;
};
StatUtils.sumDifference=function(sample1,sample2){
	var length1=sample1.length;
	var length2=sample2.length;
	if(!length1||!length2||length1!=length2){
		return new IllegalArgumentException ("Input arrays must have the same (positive) length.");
	}
    var result = 0;
    for (var i = 0; i < length1; i++) {
        result += sample1[i] - sample2[i];
    }
    return result;
};
StatUtils.sumLog=function(values){
	var sumLog=0;
	for(var i=0;i<values.length;i++){
		sumLog+=Math.log(values[i]);
	}
	return sumLog;
};
StatUtils.sumSq=function(values){
	var sumLog=0;
	for(var i=0;i<values.length;i++){
		sumLog+=values[i]*values[i];
	}
	return sumLog;
};
StatUtils.variance=function(values){
	var v;
	var length=values.length;
	if(length==1){
		return 0.0;
	}
	var mean=StatUtils.mean(values);
	var accum = 0.0;
    var accum2 = 0.0;
    for (var i = 0; i < length; i++) {
        accum += Math.pow((values[i] - mean), 2.0);
        accum2 += (values[i] - mean);
    }
    v=(accum - (Math.pow(accum2, 2) / (length))) /(length - 1);    
    return v;
};
StatUtils.varianceDifference=function(sample1,sample2,meanDifference){
	var sum1 = 0;
    var sum2 = 0;
    var diff = 0;
    var length1=sample1.length;
	var length2=sample2.length;
	if(!length1||!length2||length1!=length2){
		return new IllegalArgumentException ("Input arrays must have the same (positive) length.");
	}
    for (var i = 0; i < length1; i++) {
        diff = sample1[i] - sample2[i];
        sum1 += (diff - meanDifference) *(diff - meanDifference);
        sum2 += diff - meanDifference;
    }
    return (sum1 - (sum2 * sum2 / length1)) / (length1 - 1);

};
function StopWatch(){
	this.jsjava_class="jsorg.apache.commons.lang.StopWatch";
	this.startTime=0;
	this.endTime=0;
}
StopWatch.prototype.start=function(){
	this.startTime=new Date().getTime();
};
StopWatch.prototype.stop=function(){
	this.endTime=new Date().getTime();
};
StopWatch.prototype.getTime=function(){
	return this.endTime-this.startTime;
};
StopWatch.prototype.getMilliSeconds=function(){
	return this.getTime();
};
StopWatch.prototype.getSeconds=function(){
	return this.getTime()/1000;
};
StopWatch.prototype.getMinutes=function(){
	return this.getTime()/(1000*60);
};
StopWatch.prototype.getHours=function(){
	return this.getTime()/(1000*3600);

};
function StringBuffer(str){
	this.jsjava_class="jsjava.lang.StringBuffer";
	if(str==undefined||str==null){
		str="";
	}
    this.orig=str; 
    this.nStr=str;
}
StringBuffer.prototype.append=function (pvalue){
    this.nStr+=pvalue; 
};
StringBuffer.prototype.getLength=function (){
    return this.nStr.length; 
};
StringBuffer.prototype.charAt=function (index){
    return this.nStr.charAt(index); 
};
StringBuffer.prototype.deleteBetween=function (index1,index2){
    if(index1<index2){
     var str=this.nStr.substring(0,index1)+this.nStr.substring(index2);
     this.nStr=str;
    }else if(index1==index2){
     var str=this.nStr.substring(0,index1)+this.nStr.substring(index1+1);
     this.nStr=str;
    }
};
StringBuffer.prototype.getValue=function (){
    return this.nStr; 
};
StringBuffer.prototype.toString=function (){
    return this.nStr; 
};
StringBuffer.prototype.deleteCharAt=function (index){
    this.deleteBetween(index,index); 
};
StringBuffer.prototype.getChars=function (){
    var chars=new Array(this.getLength()); 
    for(var i=0;i<chars.length;i++){
        chars[i]=this.nStr.charAt(i); 
    }
   return chars;
};
StringBuffer.prototype.indexOf=function (str){
    return this.nStr.indexOf(str); 
};
StringBuffer.prototype.insert=function (index,str){
    var s= this.nStr.substring(0,index)+str+this.nStr.substring(index);
    this.nStr=s;
};
StringBuffer.prototype.lastIndexOf=function (str){
    return this.nStr.lastIndexOf(str); 
};
StringBuffer.prototype.substring=function (index){
    return this.nStr.substring(index); 
};
StringBuffer.prototype.substringBetween=function (index1,index2){
    return this.nStr.substring(index1,index2); 
};
StringBuffer.prototype.reverse=function (){
    var str="";
    for(var i=this.getLength()-1;i>=0;i--){
        str+=this.charAt(i); 
    } 
    this.nStr=str;
};
function StringCharacterIterator(str){
	this.jsjava_class="jsjava.text.StringCharacterIterator";
    this.str=str;
    if(str==null){
        this.str="";	
    }
    this.list=new ArrayList();
    var length=str.length;
    for(var i=0;i<length;i++){
        this.list.add(str.charAt(i));	
    }
    this.nextIndex=0;
    this.prevIndex=this.list.getSize()-1;
    this.currentIndex=0;
}
StringCharacterIterator.prototype.hasMore=function(){
    if(this.nextIndex==this.list.getSize()+1||this.prevIndex==-2){
    	return false;
    }
    return true;	
};
StringCharacterIterator.prototype.current=function(){
    return this.list.get(this.currentIndex);
};
StringCharacterIterator.prototype.first=function(){
    this.nextIndex=1;
    this.currentIndex=this.nextIndex-1;
    return this.list.get(0);	
};
StringCharacterIterator.prototype.last=function(){
    this.prevIndex=this.list.getSize()-2;
    this.currentIndex=this.prevIndex+1;
    return this.list.get(this.list.getSize()-1);	
};
StringCharacterIterator.prototype.next=function(){
    this.currentIndex=this.nextIndex;
    return this.list.get(this.nextIndex++);	
};
StringCharacterIterator.prototype.previous=function(){
    this.currentIndex=this.prevIndex;
    return this.list.get(this.prevIndex--);	
};
StringCharacterIterator.prototype.getBeginIndex=function(){
    return 0;	
};
StringCharacterIterator.prototype.getEndIndex=function(){
    return this.list.getSize()-1;
};
StringCharacterIterator.prototype.getIndex=function(){
    return this.currentIndex;
};
StringCharacterIterator.prototype.setIndex=function(index){
    this.currentIndex=index;
    this.nextIndex=index+1;
    this.prevIndex=index-1;	
};
StringCharacterIterator.prototype.setText=function(text){
    this.str=text;
    if(text==null){
        this.str="";	
    }
    this.list=new ArrayList();
    var length=text.length;
    for(var i=0;i<length;i++){
        this.list.add(text.charAt(i));	
    }
};
function StringPrototype(){
	this.jsjava_class="jsorg.eob.prototype.StringPrototype";
}
StringPrototype.load=function(){
	String.prototype.jsjava_class="String";
	String.prototype.trim=function(){
		return this.replace(/(^\s*)|(\s*$)/g, "");
	};
	String.prototype.startsWith=function(prefix,toffset){
		if(toffset==undefined){
			toffset=0;
		}
		if(prefix==undefined){
			return false;
		}
		if(this.indexOf(prefix)==toffset){
			return true;
		}
		return false;
	};
	String.prototype.endsWith=function(suffix){
		if(suffix==undefined){
			return false;
		}
		if(this.lastIndexOf(suffix)==this.length-suffix.length){
			return true;
		}
		return false;
	};
	String.prototype.concat=function(str){
		if(str==undefined){
			str="";
		}
		return this+str;
	};
	String.prototype.toCharArray=function(){
		if(str==undefined){
			return null;
		}
		var length=this.length;
		var chars=new Array(length);
		for(var i=0;i<length;i++){
			chars[i]=this.charAt(i);			
		}
		return chars;
	};
	String.prototype.compareTo=function(o){
		if(o==undefined||!(o instanceof String)){
			return false;
		}
		if(this==o){
			return 0;
		}
		if(this>o){
			return 1;
		}
		if(this<o){
			return -1;
		}
	};
};

StringPrototype.load();
function StringTokenizer(str,delim){
	this.jsjava_class="jsjava.util.StringTokenizer";
    this.str=str;
    this.delim=delim;
    this.elements=str.split(delim);
    this.size=0;
    if(this.elements){
        this.size=this.elements.length;
    }
    this.nextIndex=0;
}
StringTokenizer.prototype=new Enumeration();
StringTokenizer.prototype.constructor=StringTokenizer;
StringTokenizer.prototype.countTokens=function(){
	return this.size;
};
StringTokenizer.prototype.hasMoreElements=function(){
	return this.nextIndex<this.size;
};
StringTokenizer.prototype.hasMoreTokens=function(){
	return this.nextIndex<this.size;
};
StringTokenizer.prototype.nextElement=function(){
	return this.elements[this.nextIndex++];
};
StringTokenizer.prototype.nextToken=function(){
	return this.elements[this.nextIndex++];
};
StringTokenizer.prototype.nextToken=function(delim){
	return this.str.split(delim)[this.nextIndex];

};
function StringUtils(){
	this.jsjava_class="jsorg.apache.commons.lang.StringUtils";	
}
StringUtils.abbreviate=function(str,offset,maxWidth){
	if (str == null) {
        return null;
    }
    if (maxWidth < 4) {
        maxWidth==4;
    }
    if (str.length <= maxWidth) {
        return str;
    }
    if (offset > str.length) {
        offset = str.length;
    }
    if ((str.length - offset) < (maxWidth - 3)) {
        offset = str.length - (maxWidth - 3);
    }
    if (offset <= 4) {
        return str.substring(0, maxWidth - 3) + "...";
    }
    if (maxWidth < 7) {
        maxWidth=7;
    }
    if ((offset + (maxWidth - 3)) < str.length) {
        return "..." + StringUtils.abbreviate(str.substring(offset),0, maxWidth - 3);
    }
    return "..." + str.substring(str.length - (maxWidth - 3));
};
StringUtils.capitalize=function(str){
	if(str==null||str==""){
		return str;
	}
	if(str.length==1){
		return str.toUpperCase();
	}
	var nstr=str.charAt(0).toUpperCase()+str.substring(1);
	return nstr;
};
StringUtils.isEmpty=function(str){
	if(str==undefined||str==""||str==null){
		return true;
	}
	return false;
};
StringUtils.isNotEmpty=function(str){
	return !StringUtils.isEmpty(str);
};
StringUtils.isBlank=function(str){
	if(str==undefined||str==""||str==null||/^\s*$/.test(str)){
		return true;
	}
	return false;
};
StringUtils.isNotBlank=function(str){
	return !StringUtils.isBlank(str);
};
StringUtils.isAlpha=function(str){
	return /^[A-Za-z]+$/.test(str);
};
StringUtils.isAlphanumeric=function(str){
	return /^[A-Za-z0-9]+$/.test(str);
};
StringUtils.isAlphanumericSpace=function(str){
	if(str==""){
		return true;
	}
	return /^[A-Za-z0-9\s]+$/.test(str);
};
StringUtils.isAlphaSpace=function(str){
	if(str==""){
		return true;
	}
	return /^[A-Za-z\s]+$/.test(str);
};
StringUtils.isAsciiPrintable=function(str){
	if (str == null) {
        return false;
    }
    var length = str.length();
    for (var i = 0; i < length; i++) {
        var ch=str.charAt(i);
        ch=ch.charCodeAt(0);
        if(ch < 32 && ch >= 127){
        	return false;
        }
    }
    return true;
};
StringUtils.isNumeric=function(str){
	return /^[0-9]+$/.test(str);
};
StringUtils.isNumericSpace=function(str){
	return /^[0-9\s]+$/.test(str);
};
StringUtils.isWhitespace=function(str){
	return /^[\s]+$/.test(str);
};
StringUtils.joinArray=function(arr,separator){
	if(StringUtils.isEmpty(separator)){
		return arr.join("");
	}
	return arr.join(separator);
};
StringUtils.joinList=function(list,separator){
	if(!(list instanceof Collection)){
		return null;
	}
	if(StringUtils.isEmpty(separator)){
		separator="";
	}
	var arr=list.toArray();
	return arr.join(separator);
};
StringUtils.joinIterator=function(iterator,separator){
	if(!iterator||!iterator.jsjava_class||iterator.jsjava_class!="jsjava.util.Iterator"){
		return null;
	}
	if(StringUtils.isEmpty(separator)){
		separator="";
	}
	iterator.moveTo(0);
	var list=new ArrayList();
	while(iterator.hasNext()){
		list.add(iterator.next());
	}
	var arr=list.toArray();
	return arr.join(separator);
};
StringUtils.trim=function(str){
	if(StringUtils.isEmpty(str)){
		return str;
	}
	return str.replace(/(^\s*)|(\s*$)/g, ""); 
};
StringUtils.charLength=function(str){
	var nstr=str.replace(/[^x00-xff]/mg,"JJ");
	return nstr.length;

};
function System(){
	this.jsjava_class="jsjava.lang.System";
}
System.out=null;
System.err=null;
System.console=null;
System.currentTimeMillis=function(){
	return new Date().getTime();
};
System.exit=function(status){
	if(System.console){
		System.console.close();
	}
};
function TDistributionImpl(degreesOfFreedom){
	this.jsjava_class="org.apache.commons.math.distribution.TDistributionImpl";	
	if (degreesOfFreedom <= 0.0) {
        throw new IllegalArgumentException(IllegalArgumentException.ERROR,"degrees of freedom must be positive.");
    }
    this.degreesOfFreedom = degreesOfFreedom;
}
TDistributionImpl.prototype.cumulativeProbability=function(x){
	var ret;
    if (x == 0.0) {
        ret = 0.5;
    } else {
        var t =
            Beta.regularizedBeta(
                this.getDegreesOfFreedom() / (this.getDegreesOfFreedom() + (x * x)),
                0.5 * this.getDegreesOfFreedom(),
                0.5);
        if (x < 0.0) {
            ret = 0.5 * t;
        } else {
            ret = 1.0 - 0.5 * t;
        }
    }
    return ret;
};
TDistributionImpl.prototype.getDegreesOfFreedom=function(){
	return this.degreesOfFreedom;
};
TDistributionImpl.prototype.getDomainLowerBound=function(p){
	return -Double.MAX_VALUE;
};
TDistributionImpl.prototype.getDomainUpperBound=function(p){
	return Double.MAX_VALUE;
};
TDistributionImpl.prototype.getInitialDomain=function(p){
	return 0.0;
};
TDistributionImpl.prototype.setDegreesOfFreedom=function(degreesOfFreedom){
	if (degreesOfFreedom <= 0.0) {
        throw new IllegalArgumentException(IllegalArgumentException.ERROR,"degrees of freedom must be positive.");
    }
    this.degreesOfFreedom = degreesOfFreedom;

};
function Timer(){
	this.jsjava_class="jsjava.util.Timer";
    this.innerTimer=null;
    this.task=null;
    this.date=null;
    this.period=null;
    this.task2=null;
}
Timer.prototype.cancel=function(){
    clearInterval(this.innerTimer);
};
Timer.prototype.setInstance=function(instanceName){
    this.instanceName=instanceName;	
};
Timer.prototype.scheduleOnce=function(task,date){
    this.task=task
    this.date=date;
    var currDate=new Date();
    var currDateTime=currDate.getTime();
    var dateTime=date.getTime();
    var diffTime=dateTime-currDateTime;
    if(diffTime>=0){
        this.innerTimer=setTimeout("eval("+this.instanceName+".task.run())",diffTime);	
    }
};
Timer.prototype.scheduleRepeat=function(task,period,delay){
    this.task2=task
    this.period=period;	
    var evalStr="eval("+this.instanceName+".task2.run())";
    if(!delay||delay==0){
        eval(this.instanceName+".task2.run()");	
    }else{
        eval(this.instanceName+".task2.run()");	
    }
    this.innerTimer=setInterval(evalStr,period);
};
function TimerTask(operation,timer){
	this.jsjava_class="jsjava.util.TimerTask";
    this.operation=operation;
    this.timer=timer;
}
TimerTask.prototype.cancel=function(){
    this.timer.cancel();
};
TimerTask.prototype.run=function(){
    eval(this.operation+"()");
};
TimerTask.prototype.scheduledExecutionTime=function(){

};
function TreeNode(){
	this.jsjava_class="jsjavax.swing.tree.TreeNode";
}
TreeNode.prototype.children=function(){
    throw new IllegalStateException(IllegalStateException.ERROR,"This is an interface method and you should use the concrete method");	
};
TreeNode.prototype.getAllowsChildren=function(){
    throw new IllegalStateException(IllegalStateException.ERROR,"This is an interface method and you should use the concrete method");	
};
TreeNode.prototype.getChildAt=function(childIndex){
    throw new IllegalStateException(IllegalStateException.ERROR,"This is an interface method and you should use the concrete method");	
};
TreeNode.prototype.getChildCount=function(){
    throw new IllegalStateException(IllegalStateException.ERROR,"This is an interface method and you should use the concrete method");	
};
TreeNode.prototype.getIndex=function(node){
    throw new IllegalStateException(IllegalStateException.ERROR,"This is an interface method and you should use the concrete method");	
};
TreeNode.prototype.getParent=function(){
    throw new IllegalStateException(IllegalStateException.ERROR,"This is an interface method and you should use the concrete method");	
};
TreeNode.prototype.isLeaf=function(){
    throw new IllegalStateException(IllegalStateException.ERROR,"This is an interface method and you should use the concrete method");	

};
UnsupportedOperationException.prototype=new Error();
UnsupportedOperationException.prototype.constructor=UnsupportedOperationException;
UnsupportedOperationException.ERROR=0;
function UnsupportedOperationException(code,message){
	this.jsjava_class="jsjava.lang.UnsupportedOperationException";
	this.code=code;
    this.message=message;
    this.name="jsjava.lang.UnsupportedOperationException";

}
function URL(url){
	this.jsjava_class="jsjava.net.URL";
    this.url=url;
    var schemePos=url.indexOf("://");
    var filePos=url.indexOf("/",schemePos+3);
    var portPos=url.indexOf(":",schemePos+1);
    if(portPos>filePos){
        portPos=-1;	
    }
    var queryPos=url.indexOf("?");
    var anchorPos=url.indexOf("#");
    this.protocol=url.substring(0,schemePos);
    this.host=url.substring(schemePos+3,filePos);
    if(portPos!=-1){
        this.host=url.substring(schemePos+3,portPos);	        
    }
    if(portPos!=-1){
        this.port=url.substring(portPos+1,filePos);	
    }else{
        this.port=getDefaultPort(this.scheme);
    }
    function getDefaultPort(protocol){
    	var defautPort=null;
        switch(protocol){
            case "http":defaultPort="80";break;	
            case "ftp":defaultPort="21";break;
            case "gopher":defaultPort="70";break;            
            default:defaultPort="80";break;
        }
        return defaultPort;
    } 
    if(anchorPos!=-1){
        this.file=url.substring(filePos,anchorPos);
        this.ref=url.substring(anchorPos+1);
    }else{
        this.file=url.substring(filePos);
         this.ref=null;
    }
    if(queryPos==-1){
        this.path=this.file;	
        this.query=null;
    }else{
        this.path=url.substring(filePos,queryPos);
        if(anchorPos!=-1){
            this.query=url.substring(queryPos+1,anchorPos);
        }else{
            this.query=url.substring(queryPos+1);   
        }
    }
    if(url.indexOf("mailto:")!=-1){
        this.protocol="mailto";
        this.host=null;
        this.file=this.path=url.substring("mailto:".length);
        this.port="-1";	
    }
}
URL.prototype.getDefaultPort=function(){
    var defautPort=null;
    switch(this.protocol){
        case "http":defaultPort="80";break;	
        case "ftp":defaultPort="21";break;
        case "gopher":defaultPort="70";break;    
        case "file":defaultPort="-1";break;  
        case "mailto":defaultPort="-1";break;        
        default:defaultPort="80";break;
    }
    return defaultPort;
};
URL.prototype.getFile=function(){
    return this.file;
};
URL.prototype.getHost=function(){
    return this.host;	
};
URL.prototype.getPath=function(){
    return this.path;
};
URL.prototype.getPort=function(){
    return this.port;
};
URL.prototype.getProtocol=function(){
    return this.protocol;
};
URL.prototype.getQuery=function(){
    return this.query;
};
URL.prototype.getRef=function(){
    return this.ref;
};
URL.prototype.getUserInfo=function(){
    return null;

};
function URLValidator(){
	this.jsjava_class="jsorg.eob.validator.URLValidator";
}
URLValidator.validate=function(str){
	return ValidatorUtils.isUrl(str);

};
function ValidatorUtils(){
	this.jsjava_class="jsorg.eob.validator.ValidatorUtils";
}
ValidatorUtils.isNull=function(value){
	if(value==undefined||value==null){
		return true;
	}
	return false;
};
ValidatorUtils.isBlankOrNull=function(value){
	if(value==undefined||value==""||value==null||/^\s*$/.test(value)){
		return true;
	}
	return false;
};
ValidatorUtils.isByte=function(value){
	return Byte.checkValid(value);
};
ValidatorUtils.isChar=function(value){
	return Character.checkValid(value);
};
ValidatorUtils.isShort=function(value){
	return Short.checkValid(value);
};
ValidatorUtils.isInt=function(value){
	return Integer.checkValid(value);
};
ValidatorUtils.isLong=function(value){
	return Long.checkValid(value);
};
ValidatorUtils.isFloat=function(value){
	return Float.checkValid(value);
};
ValidatorUtils.isDouble=function(value){
	return Double.checkValid(value);
};
ValidatorUtils.isBoolean=function(value){
	if(value==true||value==false||value=="true"||value=="false"){
		return true;
	}
	return false;
};
ValidatorUtils.isEmail=function(value,pattern){
	if(value==undefined||value==""){
	    return false;
	}
	if(pattern==undefined||pattern==""){
		var defaultPattern=/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
	    return defaultPattern.test(value);
	}
	if(typeof(pattern)=="string"){
	    pattern=new RegExp(pattern);
	}
	return pattern.test(value);
};
ValidatorUtils.isUrl=function(value){
	var regx=/^[a-zA-z]+:\/\/[^\s]*$/;
    return regx.test(value);
};
ValidatorUtils.isIP4=function(value,strict){
	if(strict != null  && strict == ""){
		if (value == "0.0.0.0")
			return false;
		else if (value == "255.255.255.255")
			return false;
	};
	theName = "IPaddress";
	var ipPattern = /^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/;
	var ipArray = value.match(ipPattern);
	if (ipArray == null){
		return false;
	}else {
		for (i = 1; i < 5; i++){
			thisSegment = parseInt(ipArray[i]);
			if (thisSegment > 255) {
				return false;
			}
			if (i == 1 && parseInt(ipArray[1]) == 0 ) {
				return false ;
			}
		}
	}
	return true; 
};
ValidatorUtils.isByteInRange=function(value,min,max){
	if(!ValidatorUtils.isByte(value)||!ValidatorUtils.isByte(min)||!ValidatorUtils.isByte(max)){
		return false;
	}
	if(value>=min&&value<=max){
		return true;
	}
	return false;
};
ValidatorUtils.isShortInRange=function(value,min,max){
	if(!ValidatorUtils.isShort(value)||!ValidatorUtils.isShort(min)||!ValidatorUtils.isShort(max)){
		return false;
	}
	if(value>=min&&value<=max){
		return true;
	}
	return false;
};
ValidatorUtils.isIntInRange=function(value,min,max){
	if(!ValidatorUtils.isInt(value)||!ValidatorUtils.isInt(min)||!ValidatorUtils.isInt(max)){
		return false;
	}
	if(value>=min&&value<=max){
		return true;
	}
	return false;
};
ValidatorUtils.isLongInRange=function(value,min,max){
	if(!ValidatorUtils.isLong(value)||!ValidatorUtils.isLong(min)||!ValidatorUtils.isLong(max)){
		return false;
	}
	if(value>=min&&value<=max){
		return true;
	}
	return false;
};
ValidatorUtils.isFloatInRange=function(value,min,max){
	if(!ValidatorUtils.isFloat(value)||!ValidatorUtils.isFloat(min)||!ValidatorUtils.isFloat(max)){
		return false;
	}
	if(value>=min&&value<=max){
		return true;
	}
	return false;
};
ValidatorUtils.isDoubleInRange=function(value,min,max){
	if(!ValidatorUtils.isDouble(value)||!ValidatorUtils.isDouble(min)||!ValidatorUtils.isDouble(max)){
		return false;
	}
	if(value>=min&&value<=max){
		return true;
	}
	return false;
};
ValidatorUtils.maxLength=function(value,max){
	if(!(value instanceof String)&&typeof(value)!="string"){
		value=new String(value);
	}
	if(value.length<=max){
		return true;
	}
	return false;
};
ValidatorUtils.maxValue=function(value,max){
	if(!ValidatorUtils.isDouble(value)||!ValidatorUtils.isDouble(max)){
		return false;
	}
	if(value<=max){
		return true;
	}
	return false;
};
ValidatorUtils.minLength=function(value,min){
	if(!ValidatorUtils.isLong(value)||!ValidatorUtils.isLong(max)){
		return false;
	}
	if(value>=min){
		return true;
	}
	return false;
};
ValidatorUtils.minValue=function(value,min){
	if(!ValidatorUtils.isDouble(value)||!ValidatorUtils.isDouble(min)){
		return false;
	}
	if(value>=min){
		return true;
	}
	return false;
};
ValidatorUtils.isMask=function(value,mask){
	if(value==undefined||value==null){
		return false;
	}
	if(value==""&&mask!=undefined&&mask!=null){
		return true;
	}
	if(mask instanceof String){
		var regx=new RegExp(mask,"gi");
		return regx.test(value);
	}
	if(mask instanceof RegExp){
		return mask.test(value);
	}
	return false;
};
ValidatorUtils.isNumber=function(value){
	return !isNaN(value);
};
ValidatorUtils.isFinite=function(value){
	return isFinite(value);

};
function VisualCondition(conditionSeed,visibles){
	this.jsjava_class="jsorg.eob.component.trigger.VisualCondition";
    this.conditionSeed=conditionSeed;
    this.visibles=visibles;

}
function WeibullDistributionImpl(alpha,beta){
	this.jsjava_class="org.apache.commons.math.distribution.WeibullDistributionImpl";	
	if (alpha <= 0.0) {
        throw new IllegalArgumentException(
            IllegalArgumentException.ERROR,"Shape must be positive.");
    }       
    this.alpha = alpha;
    if (beta <= 0.0) {
        throw new IllegalArgumentException(
            IllegalArgumentException.ERROR,"Scale must be positive.");
    }       
    this.beta = beta;
}
WeibullDistributionImpl.prototype.cumulativeProbability=function(x){
	var ret;
    if (x <= 0.0) {
        ret = 0.0;
    } else {
        ret = 1.0 - Math.exp(-Math.pow(x / this.getScale(), this.getShape()));
    }
    return ret;
};
WeibullDistributionImpl.prototype.getDomainLowerBound=function(p){
	return 0.0;
};
WeibullDistributionImpl.prototype.getDomainUpperBound=function(p){
	return Double.MAX_VALUE;
};
WeibullDistributionImpl.prototype.getInitialDomain=function(p){
	return Math.pow(this.getScale() * Math.log(2.0), 1.0 / this.getShape());
};
WeibullDistributionImpl.prototype.getScale=function(){
	return this.beta;
};
WeibullDistributionImpl.prototype.getShape=function(){
	return this.alpha;
};
WeibullDistributionImpl.prototype.inverseCumulativeProbability=function(p){
	var ret;
    if (p < 0.0 || p > 1.0) {
        throw new IllegalArgumentException
            (IllegalArgumentException.ERROR,"probability argument must be between 0 and 1 (inclusive)");
    } else if (p == 0) {
        ret = 0.0;
    } else  if (p == 1) {
        ret = Double.POSITIVE_INFINITY;
    } else {
        ret = this.getScale() * Math.pow(-Math.log(1.0 - p), 1.0 / this.getShape());
    }
    return ret;
};
WeibullDistributionImpl.prototype.setScale=function(beta){
	if (beta <= 0.0) {
        throw new IllegalArgumentException(
            IllegalArgumentException.ERROR,"Scale must be positive.");
    }       
    this.beta = beta;
};
WeibullDistributionImpl.prototype.setShape=function(alpha){
	if (alpha <= 0.0) {
        throw new IllegalArgumentException(
            IllegalArgumentException.ERROR,"Shape must be positive.");
    }       
    this.alpha = alpha;

};
function XmlBrowserParser(){
	this.jsjava_class="jsorg.eob.xml.XmlParser";
	this.xmlParser=XmlParserUtils.toXmlParser();
	this.xmlDoc=null;
}
XmlBrowserParser.prototype.loadXmlFile=function(xmlfile){
	this.xmlDoc=this.xmlParser.load(xmlfile);
};
XmlBrowserParser.prototype.loadXml=function(xml){
	if(window.ActiveXObject){
		this.xmlParser.loadXML(xml);
		this.xmlDoc=this.xmlParser;
	}else if(document.implementation){
		this.xmlDoc=XmlParserUtils.toMozillaXmlParser().parseFromString(xml,"text/xml");
	}
};
XmlBrowserParser.prototype.toDocument=function(){
	return this.xmlDoc;

};
function XmlParserUtils(){
	this.jsjava_class="jsorg.eob.xml.XmlParserUtils";
}
XmlParserUtils.toIEXmlParser=function(){
	return new ActiveXObject("Microsoft.XMLDOM");
};
XmlParserUtils.toMozillaXmlParser=function(){
	return new DOMParser();
};
XmlParserUtils.toMozillaXmlDocument=function(){
	return document.implementation.createDocument("","",null);
};
XmlParserUtils.toXmlParser=function(){
	if (window.ActiveXObject){
		return new ActiveXObject("Microsoft.XMLDOM");
	}else if (document.implementation &&document.implementation.createDocument){
		return document.implementation.createDocument("","",null);
	}else{
		return;
	}

};
function XmlSerializerUtils(){
	this.jsjava_class="jsorg.eob.xml.XmlSerializerUtils";
}
XmlSerializerUtils.serializeToString=function(xmldom){
	if(xmldom==undefined){
		return "";
	}
	if(BrowserUtils.isIE()){
		return xmldom.xml;
	}else{
		return new XMLSerializer().serializeToString(xmldom,"text/html");
	}
	return "";
};
